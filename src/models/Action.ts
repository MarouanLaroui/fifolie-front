export default class Action {
  id: number;
  name: string;
  maxValue: number;
  currentValue: number;

  constructor(
    id: number,
    name: string,
    maxValue: number,
    currentValue: number
  ) {
    this.id = id;
    this.name = name;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
  }
}
