let quotes = [
    {
        "quote": "Success does not consist in never making mistakes but in never making the same one a second time.",
        "author": "George Bernard Shaw"
    },
    {
        "quote": "You have to learn the rules of the game. And then you have to play better than anyone else.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Success is simple. Do what's right, the right way, at the right time.",
        "author": "Arnold H. Glasow"
    },
    {
        "quote": "Success is not in what you have, but who you are.",
        "author": "Bo Bennett"
    },
    {
        "quote": "Don't wait. The time will never be just right.",
        "author": "Napoleon Hill"
    },
    {
        "quote": "If you genuinely want something, don't wait for it--teach yourself to be impatient.",
        "author": "Gurbaksh Chahal"
    },
    {
        "quote": "Don\u00e2\u20ac\u2122t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett"
    },
    {
        "quote": "Failure will never overtake me if my determination to succeed is strong enough.",
        "author": "Og Mandino"
    },
    {
        "quote": "You are never too old to set another goal or to dream a new dream.",
        "author": "C.S. Lewis"
    },
    {
        "quote": "Quality is not an act, it is a habit.",
        "author": "Aristotle"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
    },
    {
        "quote": "The harder you work for something, the greater you'll feel when you achieve it.",
        "author": "Unknown"
    },
    {
        "quote": "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.",
        "author": "Conrad Hilton"
    },
    {
        "quote": "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Do what you can, with what you have, where you are.",
        "author": "Theodore Roosevelt"
    },
    {
        "quote": "Success is not a destination, but the road that you're on. Being successful means that you're working hard and walking your walk every day. You can only live your dream by working hard towards it. That's living your dream.",
        "author": "Marlon Wayans"
    },
    {
        "quote": "Success comes from knowing that you did your best to become the best that you are capable of becoming.",
        "author": "John Wooden"
    },
    {
        "quote": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
        "author": "Bruce Lee"
    },
    {
        "quote": "Motivation comes from working on things we care about.",
        "author": "Sheryl Sandberg"
    },
    {
        "quote": "Always do your best. What you plant now, you will harvest later.",
        "author": "Og Mandino"
    },
    {
        "quote": "All progress takes place outside the comfort zone.",
        "author": "Michael John Bobak"
    },
    {
        "quote": "Do not wait to strike till the iron is hot; but make it hot by striking.",
        "author": "William Butler Yeats"
    },
    {
        "quote": "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit.",
        "author": "Conrad Hilton"
    },
    {
        "quote": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
        "author": "Chantal Sutherland"
    },
    {
        "quote": "It always seems impossible until it's done.",
        "author": "Nelson Mandela"
    },
    {
        "quote": "The way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "quote": "You don't have to be great to start, but you have to start to be great.",
        "author": "Zig Ziglar"
    },
    {
        "quote": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.",
        "author": "Helen Keller"
    },
    {
        "quote": "Do one thing every day that scares you.",
        "author": "Anonymous"
    },
    {
        "quote": "All you need in this life is ignorance and confidence, and then success is sure.",
        "author": "Mark Twain"
    },
    {
        "quote": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett"
    },
    {
        "quote": "Act as if what you do makes a difference. It does.",
        "author": "William James"
    },
    {
        "quote": "The distance between insanity and genius is measured only by success.",
        "author": "Bruce Feirstein"
    },
    {
        "quote": "The most important single ingredient in the formula of success is knowing how to get along with people.",
        "author": "Theodore Roosevelt"
    },
    {
        "quote": "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
        "author": "Tony Robbins"
    },
    {
        "quote": "Stop chasing the money and start chasing the passion.",
        "author": "Tony Hsieh"
    },
    {
        "quote": "The successful warrior is the average man, with laser-like focus.",
        "author": "Bruce Lee"
    },
    {
        "quote": "In the middle of every difficulty lies opportunity.",
        "author": "Albert Einstein"
    },
    {
        "quote": "It's not whether you get knocked down, it's whether you get up.",
        "author": "Vince Lombardi"
    },
    {
        "quote": "The only limit to your impact is your imagination and commitment.",
        "author": "Tony Robbins"
    },
    {
        "quote": "Success is sweet: the sweeter if long delayed and attained through manifold struggles and defeats.",
        "author": "A. Branson Alcott"
    },
    {
        "quote": "Aim for the moon. If you miss, you may hit a star.",
        "author": "W. Clement Stone"
    },
    {
        "quote": "The secret of success is constancy to purpose.",
        "author": "Benjamin Disraeli"
    },
    {
        "quote": "Perseverance is not a long race; it is many short races one after the other.",
        "author": "Walter Elliot"
    },
    {
        "quote": "To be a good loser is to learn how to win.",
        "author": "Carl Sandburg"
    },
    {
        "quote": "Start where you are. Use what you have. Do what you can.",
        "author": "Arthur Ashe"
    },
    {
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "Problems are not stop signs, they are guidelines.",
        "author": "Robert H. Schuller"
    },
    {
        "quote": "The secret of success is to do the common thing uncommonly well.",
        "author": "John D. Rockefeller Jr."
    },
    {
        "quote": "Success is not the absence of failure; it's the persistence through failure.",
        "author": "Alisha Tyler"
    },
    {
        "quote": "Your life does not get better by chance, it gets better by change.",
        "author": "Jim Rohn"
    },
    {
        "quote": "I don't know the key to success, but the key to failure is trying to please everyone.",
        "author": "Bill Cosby"
    },
    {
        "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "author": "Christian D. Larson"
    },
    {
        "quote": "If you believe it will work out, you\u00e2\u20ac\u2122ll see opportunities. If you believe it won\u00e2\u20ac\u2122t, you will see obstacles.",
        "author": "Wayne Dyer"
    },
    {
        "quote": "You simply have to put one foot in front of the other and keep going. Put blinders on and plow right ahead.",
        "author": "George Lucas"
    },
    {
        "quote": "The only way to achieve the impossible is to believe it is possible.",
        "author": "Charles Kingsleigh"
    },
    {
        "quote": "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
        "author": "Confucius"
    },
    {
        "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill"
    },
    {
        "quote": "I find that the harder I work, the more luck I seem to have.",
        "author": "Thomas Jefferson"
    },
    {
        "quote": "Your true success in life begins only when you make the commitment to become excellent at what you do.",
        "author": "Brian Tracy"
    },
    {
        "quote": "A minute's success pays the failure of years.",
        "author": "Robert Browning"
    },
    {
        "quote": "Success is not a good teacher, failure makes you humble.",
        "author": "Shah Rukh Khan"
    },
    {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "author": "Confucius"
    },
    {
        "quote": "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.",
        "author": "John Maxwell"
    },
    {
        "quote": "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        "author": "Jimmy Dean"
    },
    {
        "quote": "Small deeds done are better than great deeds planned.",
        "author": "Peter Marshall"
    },
    {
        "quote": "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
        "author": "Barack Obama"
    },
    {
        "quote": "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
        "author": "St. Jerome"
    },
    {
        "quote": "Don't let the fear of losing be greater than the excitement of winning.",
        "author": "Robert Kiyosaki"
    },
    {
        "quote": "The ones who are crazy enough to think they can change the world, are the ones that do.",
        "author": "Anonymous"
    },
    {
        "quote": "The ladder of success is best climbed by stepping on the rungs of opportunity.",
        "author": "Ayn Rand"
    },
    {
        "quote": "Hardships often prepare ordinary people for an extraordinary destiny.",
        "author": "C.S. Lewis"
    },
    {
        "quote": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",
        "author": "Chantal Sutherland"
    },
    {
        "quote": "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
        "author": "Norman Vincent Peale"
    },
    {
        "quote": "Success is not just about making money. It's about making a difference.",
        "author": "Unknown"
    },
    {
        "quote": "Opportunities don\u00e2\u20ac\u2122t happen. You create them.",
        "author": "Chris Grosser"
    },
    {
        "quote": "Success usually comes to those who are too busy to be looking for it.",
        "author": "Henry David Thoreau"
    },
    {
        "quote": "Be brave. Take risks. Nothing can substitute experience.",
        "author": "Paulo Coelho"
    },
    {
        "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer"
    },
    {
        "quote": "The harder the conflict, the more glorious the triumph.",
        "author": "Thomas Paine"
    },
    {
        "quote": "Life is 10% what happens to us and 90% how we react to it.",
        "author": "Charles R. Swindoll"
    },
    {
        "quote": "Don't be afraid to give up the good to go for the great.",
        "author": "John D. Rockefeller"
    },
    {
        "quote": "Opportunities don't happen. You create them.",
        "author": "Chris Grosser"
    },
    {
        "quote": "The road to success and the road to failure are almost exactly the same.",
        "author": "Colin R. Davis"
    },
    {
        "quote": "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        "author": "Colin Powell"
    },
    {
        "quote": "Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.",
        "author": "George Whitefield"
    },
    {
        "quote": "Don't watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson"
    },
    {
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
    },
    {
        "quote": "Self-belief and hard work will always earn you success.",
        "author": "Virat Kohli"
    },
    {
        "quote": "Don\u00e2\u20ac\u2122t wait for the right opportunity: create it.",
        "author": "George Bernard Shaw"
    },
    {
        "quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        "author": "Jim Rohn"
    },
    {
        "quote": "You know you are on the road to success if you would do your job and not be paid for it.",
        "author": "Oprah Winfrey"
    },
    {
        "quote": "Success is liking yourself, liking what you do, and liking how you do it.",
        "author": "Maya Angelou"
    },
    {
        "quote": "It's not about perfect. It's about effort.",
        "author": "Jillian Michaels"
    },
    {
        "quote": "A key to achieving success is to assemble a strong and stable management team.",
        "author": "Vivek Wadhwa"
    },
    {
        "quote": "As you climb the ladder of success, be sure it's leaning against the right building.",
        "author": "H. Jackson Brown, Jr."
    },
    {
        "quote": "The secret of getting ahead is getting started.",
        "author": "Mark Twain"
    },
    {
        "quote": "Success isn't a result of spontaneous combustion. You must set yourself on fire.",
        "author": "Arnold H. Glasow"
    },
    {
        "quote": "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.",
        "author": "G. K. Chesterton"
    },
    {
        "quote": "When you have a dream, you've got to grab it and never let go.",
        "author": "Carol Burnett"
    },
    {
        "quote": "Don't be distracted by criticism. Remember--the only taste of success some people get is to take a bite out of you.",
        "author": "Zig Ziglar"
    },
    {
        "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        "author": "Thomas Edison"
    },
    {
        "quote": "Keep your eyes on the stars, and your feet on the ground.",
        "author": "Theodore Roosevelt"
    },
    {
        "quote": "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.",
        "author": "Martha Stewart"
    },
    {
        "quote": "What you do today can improve all your tomorrows.",
        "author": "Ralph Marston"
    },
    {
        "quote": "Don't be distracted by criticism. Remember, the only taste of success some people have is when they take a bite out of you.",
        "author": "Zig Ziglar"
    },
    {
        "quote": "If you can dream it, you can do it.",
        "author": "Walt Disney"
    },
    {
        "quote": "The best way to predict your future is to create it.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
        "author": "Ray Goforth"
    },
    {
        "quote": "The greater the artist, the greater the doubt. Perfect confidence is granted to the less talented as a consolation prize.",
        "author": "Robert Hughes"
    },
    {
        "quote": "Follow your dreams, believe in yourself and don't give up.",
        "author": "Rachel Corrie"
    },
    {
        "quote": "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier, wish you were better.",
        "author": "Jim Rohn"
    },
    {
        "quote": "The starting point of all achievement is desire.",
        "author": "Napoleon Hill"
    },
    {
        "quote": "The only place where success comes before work is in the dictionary.",
        "author": "Vidal Sassoon"
    },
    {
        "quote": "Setting goals is the first step in turning the invisible into the visible.",
        "author": "Tony Robbins"
    },
    {
        "quote": "Change your life today. Don't gamble on the future, act now, without delay.",
        "author": "Simone de Beauvoir"
    },
    {
        "quote": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs"
    },
    {
        "quote": "If you want to achieve greatness stop asking for permission.",
        "author": "Anonymous"
    },
    {
        "quote": "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
        "author": "Dale Carnegie"
    },
    {
        "quote": "Would you like me to give you a formula for success? It's quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn't at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that's where you will find success.",
        "author": "Thomas J. Watson"
    },
    {
        "quote": "The future depends on what you do today.",
        "author": "Mahatma Gandhi"
    },
    {
        "quote": "Dream big and dare to fail.",
        "author": "Norman Vaughan"
    },
    {
        "quote": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt"
    },
    {
        "quote": "If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve.",
        "author": "Jeff Bezos"
    },
    {
        "quote": "I cannot give you the formula for success, but I can give you the formula for failure--It is: Try to please everybody.",
        "author": "Herbert Bayard Swope"
    },
    {
        "quote": "Never give in except to convictions of honor and good sense.",
        "author": "Winston Churchill"
    },
    {
        "quote": "The only thing standing between you and your goal is the story you keep telling yourself.",
        "author": "Tony Robbins"
    },
    {
        "quote": "Try not to become a man of success. Rather become a man of value.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Whether you think you can or you think you can't, you're right.",
        "author": "Henry Ford"
    },
    {
        "quote": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "You miss 100% of the shots you don't take.",
        "author": "Wayne Gretzky"
    },
    {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "Don't let what you can't do stop you from doing what you can do.",
        "author": "John Wooden"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you're doing and you work hard you will be successful.",
        "author": "Albert Schweitzer"
    },
    {
        "quote": "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
        "author": "Vince Lombardi"
    },
    {
        "quote": "If you really look closely, most overnight successes took a long time.",
        "author": "Steve Jobs"
    }
]