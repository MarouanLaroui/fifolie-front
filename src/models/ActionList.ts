import Action from "./Action";

export default class ActionList {
  id: number;
  actions: Action[];

  constructor(id: number, actions: Action[]) {
    this.id = id;
    this.actions = actions;
  }
}
