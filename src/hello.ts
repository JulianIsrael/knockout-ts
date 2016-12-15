import * as ko from "knockout";

class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
    }
    
    public buttonPressed () {
        var btn = document.createElement('BUTTON');
        var text = document.createTextNode("I was added");
        btn.appendChild(text);

        document.body.appendChild(btn)
    }
}

ko.applyBindings(new HelloViewModel("Julian", "Knockout"));