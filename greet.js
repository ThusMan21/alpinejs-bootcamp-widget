function greet(name, language) {
    const greetings = {
        English: 'Hello',
        Frecnh: 'Bonjour',
        IsiZulu: 'Sawubona'
    };
    return `${greetings[language]} ${name}`;
}

function greetWidget() {
    return {
        name: '',
        language: 'English',
        greeting: '',
        greet() {
            this.greeting = greet(this.name, this.language);
        }
    }
}