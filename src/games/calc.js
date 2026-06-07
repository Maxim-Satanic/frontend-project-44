const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getQuestionAndAnswer = () => {
  const a = getRandomNumber(1, 50);
  const b = getRandomNumber(1, 50);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${a} ${operator} ${b}`;
  const answer = String(calculate(a, b, operator));
  return { question, answer };
};

export default {
  description: 'What is the result of the expression?',
  getQuestionAndAnswer,
};
