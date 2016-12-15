import * as ko from "knockout";

interface IAppData {
  counter: number;
}

class AppModel {
  name = 'my knockout application';
  counter: KnockoutObservable<number>;

  constructor(data: IAppData) {
    this.counter = ko.observable(data.counter);
  }

  increment() {
    this.counter(this.counter() + 1);
  }
}

ko.applyBindings(new AppModel({ counter: 1 } ), document.getElementById('app'));
