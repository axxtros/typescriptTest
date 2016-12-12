var TestClass = (function () {
    function TestClass(name) {
        this.oname = name;
    }
    TestClass.prototype.greet = function () {
        return "Hello " + this.oname + "!";
    };
    return TestClass;
}());
function writeLogText(writeLogText) {
    console.log('My LOG: ' + writeLogText);
}
writeLogText('Hello...');
writeLogText('Ez egy node kliens oldali kiírás.');
var testObject = new TestClass("Gábor");
console.log(testObject.greet());
//# sourceMappingURL=Test.js.map