import * as ko from "knockout";

interface IAppData {
  counter: number;
}

export default class Blade1 {
  name = 'my knockout application';
  counter: KnockoutObservable<number>;

  constructor(data: IAppData) {
    this.counter = ko.observable(data.counter);
  }

  increment() {
    this.counter(this.counter() + 1);
  }
}

