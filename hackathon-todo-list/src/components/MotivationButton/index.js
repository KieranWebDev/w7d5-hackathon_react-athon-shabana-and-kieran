const MotivationalQuoteSection = function ({ motivationalQuote, handleClick }) {
  <section>
    <p>{motivationalQuote}</p>
    <button onClick={handleClick}>New motivational quote</button>
  </section>;
};

export default MotivationalQuoteSection;
