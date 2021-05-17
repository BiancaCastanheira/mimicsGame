import { useState, useEffect } from "react";
import { getWordsFromMockAPI } from "../api/words";
import Loading from "../components/Loading";
import BtnRaffle from "../components/BtnRaffle";

const App = () => {
  const [sortedWord, setSortedWord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let words;

    setIsLoading(true);
    getWordsFromMockAPI().then((response) => {
      words = response.data;
      setSortedWord(words[Math.floor(Math.random() * words.length)]);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>MIMICS</h1>
      <h4>{sortedWord}</h4>
      <Loading isLoading={isLoading} />
      <BtnRaffle onClick={() => setSortedWord("Cliquei no botão")} />
    </div>
  );
};

export default App;
