export default class Calculator {
  add(op1, op2) {
    return (op1 * 10000 + op2 * 10000) / 10000;
  }

  subtract(op1, op2) {
    return (op1 * 10000 - op2 * 10000) / 10000;
  }

  multiply(op1, op2) {
    return (op1 * 100 * (op2 * 100)) / 10000;
  }

  devide(op1, op2) {
    return (op1 * 100) / (op2 * 100);
  }
}
