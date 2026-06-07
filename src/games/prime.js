const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const boundary = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= boundary; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {

  const number = getRandomNumber(2, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question: `Is ${number} a prime number?`,
    answer: correctAnswer,
  };
};

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestionAndAnswer,
};
