class TestClass {
    oname: string;

    constructor(name: string) {
        this.oname = name;
    }

    greet() {
        return "Hello " + this.oname + "!";
    }
}

function writeLogText(writeLogText) {
    console.log('My LOG: ' + writeLogText);
}

writeLogText('Hello...');

writeLogText('Ez egy node kliens oldali kiírás.');

var testObject = new TestClass("Gábor");
console.log(testObject.greet());