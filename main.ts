class MyFirstProgram {
    constructor(...argArray: Array<any>) {
        this.printArgs(argArray)
    }

    printArgs(argArray) {
        console.log(argArray);
    }

    runFirst(callback: Function) {
        console.log("This method runs first!");
    }

    runLast() {
        console.log("This method runs last");
    }
}

const newObject = new MyFirstProgram("a","b","c");