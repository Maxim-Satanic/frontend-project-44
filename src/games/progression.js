const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAndAnswer = () => {

  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);

  const length = getRandomNumber(5, 10);

  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  const question = progression.map((num, index) => (index === hiddenIndex ? '..' : String(num))).join(' ');

  return { question, answer: correctAnswer };
};

export default {
  description: 'What number is missing in the progression?',
  getQuestionAndAnswer,
};