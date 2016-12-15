import * as ko from "knockout";

class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>

    constructor(language: string, framework: string) {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
    }
    
    public buttonPressed () {
        alert('Bruh you pressed me!!');
    }
}

ko.applyBindings(new HelloViewModel("Julian", "Knockout"));