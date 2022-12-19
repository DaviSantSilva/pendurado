//@ts-check
import React, { useCallback, useState } from "react";
import { wordsList as data } from "../src/data/databank";

console.table(data);

function setupGame() {
  const wordsListCategory = Object.keys(data);
  const randomCategory = Math.floor(Math.random() * wordsListCategory.length);
  const randomWord = Math.floor(
    Math.random() * data[wordsListCategory[randomCategory]].length
  );

  const category = wordsListCategory[randomCategory];
  const word = data[category][randomWord]
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
  const tries = Math.ceil(word.length / 2);

  console.debug(tries);
  return {
    category,
    word,
    tries,
  };
}

export default function Index() {
  const [gameState, setGameState] = useState(setupGame);
  console.debug("setupGame finished");

  const verifyLetter = useCallback(
    (letter) => {
      const wordSplited = gameState.word.split("");
      console.debug(wordSplited);

      if (wordSplited.includes(letter)) {
        return { isCorrect: true, tries: gameState.tries };
      } else {
        return { isCorrect: false, tries: gameState.tries - 1 };
      }
    },
    [gameState]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const verifiedLetter = verifyLetter(e);
    console.debug(verifiedLetter);
    setGameState((oldState) => ({ ...oldState, tries: verifiedLetter.tries }));
    return {
      verifiedLetter,
    };
  };

  console.debug("end");

  return (
    <>
      <div>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            name="letras"
            id="letras"
            maxLength={1}
            onChange={(e) => e.target.value.toLocaleLowerCase()}
          />
          <button type="submit"> verificar</button>
        </form>
      </div>
    </>
  );
}
