import { useRandomQuote } from './hooks/useRandomQuote';
import './styles/App.css';

function App() {
  const [randomQuote, generateNewRandomQuote] = useRandomQuote();
  


  return (
    <div className='wrapper'>
      <div id="quote-box">
        <div id="text"> { randomQuote.quote }</div>
        <div id="author">{ randomQuote.author }</div>
    
        <a id="tweet-quote" href="https://twitter.com/intent/tweet" target='blank'>tweet quote</a>
        <button id="new-quote" onClick={ generateNewRandomQuote }>New Quote</button>
      </div>
    </div>
  );
}

export default App;
