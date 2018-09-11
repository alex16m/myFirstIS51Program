var MyFirstProgram = (function () {
    function MyFirstProgram() {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        this.printArgs(argArray);
    }
    MyFirstProgram.prototype.printArgs = function (argArray) {
        console.log(argArray);
    };
    MyFirstProgram.prototype.runFirst = function (callback) {
        console.log("This method runs first");
    };
    MyFirstProgram.prototype.runLast = function () {
        console.log("This method runs last");
    };
    MyFirstProgram.prototype.runMiddle = function () {
        console.log("This code runs inbetween the other two...");
    };
    return MyFirstProgram;
}());
var newObject = new MyFirstProgram("a", "b", "c");
