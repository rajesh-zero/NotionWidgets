import re
import json

def count_quotes_in_js_file(filepath):
    """
    Reads a JavaScript file, extracts a JavaScript array named 'quotes',
    and returns the number of elements in that array.
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Use regex to find the 'quotes' array content
        # This regex looks for 'let quotes = [' or 'var quotes = [' or 'const quotes = ['
        # and captures the content within the brackets [...]
        match = re.search(r'let\s+quotes\s*=\s*(\[.*?\]);', content, re.DOTALL | re.MULTILINE)
        if not match:
            # Fallback for arrays not ending with a semicolon
            match = re.search(r'let\s+quotes\s*=\s*(\[.*?\])', content, re.DOTALL | re.MULTILINE)

        if match:
            array_content = match.group(1)
            # The captured content should be a valid JSON array.
            # Replace JavaScript specific things if necessary, e.g. trailing commas (though json.loads might handle some)
            # For this specific file, it seems to be JSON compatible already.
            try:
                quotes_array = json.loads(array_content)
                return len(quotes_array)
            except json.JSONDecodeError as e:
                print(f"Error decoding JSON: {e}")
                # Attempt to fix common JS-isms like trailing commas
                # Remove trailing commas from objects and arrays
                array_content_fixed = re.sub(r',\s*([\}\]])', r'\1', array_content)
                try:
                    quotes_array = json.loads(array_content_fixed)
                    return len(quotes_array)
                except json.JSONDecodeError as e_fixed:
                    print(f"Error decoding JSON after attempting to fix trailing commas: {e_fixed}")
                    print(f"Problematic content snippet: {array_content_fixed[:200]}...") # Log snippet for debugging
                    return None
        else:
            print("Could not find the 'quotes' array in the file.")
            return None
    except FileNotFoundError:
        print(f"Error: File not found at {filepath}")
        return None
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return None

if __name__ == "__main__":
    filepath = "RandomQuote/quotes.js"
    num_quotes = count_quotes_in_js_file(filepath)
    if num_quotes is not None:
        print(f"Total number of quotes: {num_quotes}")
