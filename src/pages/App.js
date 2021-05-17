import { useState, useEffect } from "react";
import { getWordsFromMockAPI } from "../api/words";
import Loading from "../components/Loading";
import BtnRaffle from "../components/BtnRaffle";

const App = () => {
  const [sortedWord, setSortedWord] = useState("Aperte o botão para começar!");
  const [isLoading, setIsLoading] = useState(true);
  const [words, setWords] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getWordsFromMockAPI().then((response) => {
      setWords(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>MIMICS</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h4>{sortedWord}</h4>
          <BtnRaffle
            onClick={() =>
              setSortedWord(words[Math.floor(Math.random() * words.length)])
            }
          />
        </div>
      )}
    </div>
  );
};

export default App;
