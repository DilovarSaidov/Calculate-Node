export default class CalculateModel {
  static async Calculate(input: string) {
    try {
      return eval(input);
    } catch (error) {
      return "Ошибка в выражении";
    }
  }
}
