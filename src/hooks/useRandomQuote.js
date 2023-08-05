import {  useState } from "react";

/**
 * @returns 
 */
function useRandomQuote() {
    const quotes = [
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
        , { quote: "The function of leadership is to produce more leaders, not more followers.", author: "Ralph Nader" }
        , { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" }
        , { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" }
        , { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" }
        , { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" }
        , { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
        , { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
        , { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" }
        , { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" }
        , { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
        , { quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort" }
        , { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" }
        , { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" }
        , { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" }
        , { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" }
        , { quote: "Don't be distracted by criticism. Remember--the only taste of success some people get is to take a bite out of you.", author: "Zig Ziglar" }
        , { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" }
        , { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" }
        , { quote: "Success is not just about making money. It's about making a difference.", author: "Unknown" }];
     
        const [currentQuote, setCurrentQuote] = useState(quotes[Math.floor(Math.random() * 20)]);

    
        const generateRandomQuote = () =>{
            const randomInteger = Math.floor(Math.random() * 20);
            setCurrentQuote(quotes[randomInteger]);
        };

        return [currentQuote, generateRandomQuote];

}

export {useRandomQuote};