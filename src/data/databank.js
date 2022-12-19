export const wordsList = {
  carro: ["Motor", "Porta", "Capô", "Pneu", "Antena"],
  fruta: ["Banana", "Maçã", "Pêra", "Mamão", "Laranja"],
  corpo: ["Braço", "Perna", "Cérebro", "Pescoço", "Olhos"],
  computador: ["Mouse", "Teclado", "Monitor", "Gabinete", "headset"],
  programação: ["Linguagem", "Framework", "JavaScript", "React", "dev"],
  alimento: ["Arroz", "Feijão", "Carne", "Leite", "Ovo"],
};

const wordByCategory = [
  {
    tecnologia: ["computador", "playstation"],
  },
  {
    brayan: ["computador", "playstation"],
  },
  {
    quirino: ["computador", "playstation"],
  },
  {
    valdevino: ["computador", "playstation"],
  },
];

function startGame() {
  const randomNumberFromWordByCategory = Math.floor(
    Math.random() * wordByCategory.length
  );

  const key = Object.keys(wordByCategory[randomNumberFromWordByCategory]);
  const result = wordByCategory[randomNumberFromWordByCategory][key];

  const randomNumberFromByCategory = Math.floor(Math.random() * result.length);

  return {
    category: key[0],
    word: result[randomNumberFromByCategory],
    tries: Math.ceil(result[randomNumberFromByCategory].length / 2),
  };
}

const { word, tries } = startGame();
const wordSplited = word.split("");

function verifyLetter(letter) {
  if (wordSplited.includes(letter)) {
    return true;
  } else {
    tries - 1;
    return false;
  }
}

verifyLetter("z");