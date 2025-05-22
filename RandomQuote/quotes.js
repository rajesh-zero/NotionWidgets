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
    },
    {
        "quote": "Don’t count the days, make the days count.",
        "author": "Muhammad Ali"
    },
    {
        "quote": "Nothing will work unless you do.",
        "author": "Maya Angelou"
    },
    {
        "quote": "Life isn’t about finding yourself. Life is about creating yourself.",
        "author": "George Bernard Shaw"
    },
    {
        "quote": "Whatever you are, be a good one.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "Today a reader, tomorrow a leader.",
        "author": "Margaret Fuller"
    },
    {
        "quote": "The two most important days in your life are the day you are born and the day you find out why.",
        "author": "Mark Twain"
    },
    {
        "quote": "I have not failed. I’ve just found 10,000 ways that won’t work.",
        "author": "Thomas A. Edison"
    },
    {
        "quote": "If you love life, don’t waste time, for time is what life is made up of.",
        "author": "Bruce Lee"
    },
    {
        "quote": "Pain is inevitable. Suffering is optional.",
        "author": "Haruki Murakami"
    },
    {
        "quote": "Build your own dreams, or someone else will hire you to build theirs.",
        "author": "Farrah Gray"
    },
    {
        "quote": "Don’t wish it were easier. Wish you were better.",
        "author": "Jim Rohn"
    },
    {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi"
    },
    {
        "quote": "If you really want to do something, you’ll find a way. If you don’t, you’ll find an excuse.",
        "author": "Jim Rohn"
    },
    {
        "quote": "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "author": "Maya Angelou"
    },
    {
        "quote": "I hated every minute of training, but I said, “Don’t quit. Suffer now and live the rest of your life as a champion.”",
        "author": "Muhammad Ali"
    },
    {
        "quote": "The greatest pleasure in life is doing what people say you cannot do.",
        "author": "Walter Bagehot"
    },
    {
        "quote": "First they ignore you, then they ridicule you, then they fight you, and then you win.",
        "author": "Mahatma Gandhi"
    },
    {
        "quote": "Discipline is the bridge between goals and accomplishment.",
        "author": "Jim Rohn"
    },
    {
        "quote": "All things are difficult before they are easy.",
        "author": "Thomas Fuller"
    },
    {
        "quote": "Knowledge is power.",
        "author": "Francis Bacon"
    },
    {
        "quote": "Intelligence is the ability to adapt to change. ",
        "author": "Stephen Hawking"
    },
    {
        "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Success is the sum of small efforts, repeated day in and day out.",
        "author": "Robert Collier"
    },
    {
        "quote": "Anyone who has never made a mistake has never tried anything new.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
        "author": "Earl Nightingale"
    },
    {
        "quote": "When you want something, all the universe conspires in helping you to achieve it.",
        "author": "Paulo Coelho"
    },
    {
        "quote": "Choose a job you love, and you will never have to work a day in your life.",
        "author": "Confucius"
    },
    {
        "quote": "Action is the foundational key to all success. ",
        "author": "Pablo Picasso"
    },
    {
        "quote": "Your future is created by what you do today, not tomorrow.",
        "author": "Robert T. Kiyosaki"
    },
    {
        "quote": "Either you run the day or the day runs you.",
        "author": "Jim Rohn"
    },
    {
        "quote": "Don’t let the noise of others’ opinions drown out your own inner voice.",
        "author": "Steve Jobs"
    },
    {
        "quote": "DO WHAT YOU CAN’T",
        "author": "Casey Neistat"
    },
    {
        "quote": "Even dust, if piled up, will become a mountain.",
        "author": "Japanese Proverb"
    },
    {
        "quote": "The key is not to prioritize what’s on your schedule, but to schedule your priorities.",
        "author": "Stephen R. Covey"
    },
    {
        "quote": "Action will destroy your procrastination.",
        "author": "Og Mandino"
    },
    {
        "quote": "You may never know what results come of your actions, but if you do nothing, there will be no results.",
        "author": "Mahatma Gandhi"
    },
    {
        "quote": "Inspiration is for amateurs. The rest of us just show up and get to work.",
        "author": "Chuck Close"
    },
    {
        "quote": "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.",
        "author": "Arnold Schwarzenegger"
    },
    {
        "quote": "When I'm old and dying, I plan to look back on my life and say, ‘Wow, that was an adventure,’ not, ‘Wow, I sure felt safe.’",
        "author": "Tom Preston-Werner"
    },
    {
        "quote": "And those who were seen dancing were thought to be insane by those who could not hear the music.",
        "author": "Friedrich Nietzsche"
    },
    {
        "quote": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius"
    },
    {
        "quote": "Someone's sitting in the shade today because someone planted a tree a long time ago.",
        "author": "Warren Buffett"
    },
    {
        "quote": "When we strive to become better than we are, everything around us becomes better, too.",
        "author": "Paulo Coelho"
    },
    {
        "quote": "Success is nothing more than a few simple disciplines, practiced every day.",
        "author": "Jim Rohn"
    },
    {
        "quote": "I am the master of my fate; I am the captain of my soul.",
        "author": "William Ernest Henley"
    },
    {
        "quote": "Some people want it to happen, some wish it would happen, and others make it happen.",
        "author": "Michael Jordan"
    },
    {
        "quote": "The man who moves a mountain begins by carrying away small stones.",
        "author": "Confucius"
    },
    {
        "quote": "If you realized how powerful your thoughts are, you would never think a negative thought.",
        "author": "Peace Pilgrim"
    },
    {
        "quote": "Go confidently in the direction of your dreams. Live the life you’ve imagined.",
        "author": "Henry David Thoreau"
    },
    {
        "quote": "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
        "author": "Bruce Lee"
    },
    {
        "quote": "I am not a product of my circumstances. I am a product of my decisions.",
        "author": "Stephen R. Covey"
    },
    {
        "quote": "It’s not over until you win.",
        "author": "Les Brown"
    },
    {
        "quote": "Only I can change my life. No one can do it for me.",
        "author": "Carol Burnett"
    },
    {
        "quote": "In order to succeed, your desire for success should be greater than your fear of failure. ",
        "author": "Bill Cosby"
    },
    {
        "quote": "It is in your moments of decision that your destiny is shaped.",
        "author": "Tony Robbins"
    },
    {
        "quote": "The most dangerous thing you can do in life is play it safe.",
        "author": "Casey Neistat"
    },
    {
        "quote": "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
        "author": "Samuel Beckett"
    },
    {
        "quote": "Those who dare to fail miserably can achieve greatly.",
        "author": "John F. Kennedy"
    },
    {
        "quote": "Run when you can, walk if you have to, crawl if you must; just never give up.",
        "author": "Dean Karnazes"
    },
    {
        "quote": "What we fear doing most is usually what we most need to do.",
        "author": "Tim Ferriss"
    },
    {
        "quote": "What you seek is seeking you.",
        "author": "Rumi"
    },
    {
        "quote": "Not all who wander are lost.",
        "author": "J. R. R. Tolkien"
    },
    {
        "quote": "The biggest adventure you can ever take is to live the life of your dreams.",
        "author": "Oprah Winfrey"
    },
    {
        "quote": "The time is always right to do the right thing.",
        "author": "Martin Luther King Jr."
    },
    {
        "quote": "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
        "author": "Paulo Coelho"
    },
    {
        "quote": "The way I see it, if you want the rainbow, you gotta put up with the rain.",
        "author": "Dolly Parton"
    },
    {
        "quote": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "To bring anything into your life, imagine that it’s already there.",
        "author": "Richard Bach"
    },
    {
        "quote": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
        "author": "Dale Carnegie"
    },
    {
        "quote": "You don’t learn to walk by following rules. You learn by doing and falling over.",
        "author": "Richard Branson"
    },
    {
        "quote": "You were born to win, but to be a winner you must plan to win, prepare to win, and expect to win.",
        "author": "Zig Ziglar"
    },
    {
        "quote": "Embrace the glorious mess that you are.",
        "author": "Elizabeth Gilbert"
    },
    {
        "quote": "Adopt the pace of nature: her secret is patience.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "I don't measure a man’s success by how high he climbs but how high he bounces when he hits bottom.",
        "author": "George S. Patton Jr."
    },
    {
        "quote": "The few who do are the envy of the many who only watch.",
        "author": "Jim Rohn"
    },
    {
        "quote": "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        "author": "Vince Lombardi"
    },
    {
        "quote": "Eighty percent of success is showing up.",
        "author": "Woody Allen"
    },
    {
        "quote": "Effort only fully releases its reward after a person refuses to quit.",
        "author": "Napoleon Hill"
    },
    {
        "quote": "The best way out is always through.",
        "author": "Robert Frost"
    },
    {
        "quote": "To give anything less than your best is to sacrifice the gift.",
        "author": "Steve Prefontaine"
    },
    {
        "quote": "The brick walls are there for a reason. The brick walls are not there to keep us out. The brick walls are there to give us a chance to show how badly we want something. Because the brick walls are there to stop the people who don’t want it badly enough. They’re there to stop the other people.",
        "author": "Randy Pausch"
    },
    {
        "quote": "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness that most frightens us.",
        "author": "Marianne Williamson"
    },
    {
        "quote": "Always be a first rate version of yourself and not a second rate version of someone else.",
        "author": "Judy Garland"
    },
    {
        "quote": "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
        "author": "Og Mandino"
    },
    {
        "quote": "Perpetual optimism is a force multiplier.",
        "author": "Colin Powell"
    },
    {
        "quote": "Between stimulus and response, there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
        "author": "Viktor E. Frankl"
    },
    {
        "quote": "Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.",
        "author": "Steve Jobs"
    },
    {
        "quote": "When you know better you do better.",
        "author": "Maya Angelou"
    },
    {
        "quote": "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I have lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "If you judge people, you have no time to love them.",
        "author": "Mother Teresa"
    },
    {
        "quote": "Far better it is to dare mighty things, to win glorious triumphs, even though checkered by failure, than to take rank with those poor spirits who neither enjoy much nor suffer much, because they live in the gray twilight that knows neither victory nor defeat.",
        "author": "Theodore Roosevelt"
    },
    {
        "quote": "You’ve got to find what you love.",
        "author": "Steve Jobs"
    },
    {
        "quote": "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.",
        "author": "Swami Vivekananda"
    },
    {
        "quote": "Without ambition one starts nothing. Without work one finishes nothing. The prize will not be sent to you. You have to win it.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.",
        "author": "Leo Buscaglia"
    },
    {
        "quote": "Never stop fighting until you arrive at your destined place – that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life.",
        "author": "Abdul Kalam"
    },
    {
        "quote": "Never give in. Never give in. Never, never, never, never – in nothing, great or small, large or petty – never give in, except to convictions of honour and good sense. Never yield to force. Never yield to the apparently overwhelming might of the enemy.",
        "author": "Winston Churchill"
    },
    {
        "quote": "You have something special, you have GREATNESS within you!",
        "author": "Les Brown"
    },
    {
        "quote": "I did then what I knew how to do. Now that I know better, I do better.",
        "author": "Maya Angelou"
    },
    {
        "quote": "A heart full of love and compassion is the main source of inner strength, willpower, happiness, and mental tranquility.",
        "author": "Dalai Lama XIV"
    },
    {
        "quote": "I plead with you – never, ever give up on hope, never doubt, never tire, and never become discouraged. Be not afraid.",
        "author": "Pope John Paul II"
    },
    {
        "quote": "Sport has the power to change the world. It has the power to inspire. It has the power to unite people in a way that little else does. It speaks to youth in a language they understand. Sport can create hope where once there was only despair.",
        "author": "Nelson Mandela"
    }
]