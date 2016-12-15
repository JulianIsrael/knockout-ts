import * as ko from "knockout";
import Blade1 from "./blades/blade1/index";

ko.applyBindings(new Blade1({ counter: 1 } ), document.getElementById('app'));
