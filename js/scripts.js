class Stack {
    constructor(size) {
        this.arr = new Array(size);
        this.capacity = size;
        this.top = -1;
    }

    push(x) {
        if (this.isFull()) {
            console.log("OverFlow");
            return;
        }
        console.log("Inserting");
        this.arr[++this.top] = x;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack Empty");
            return;
        }
        return this.arr[this.top--];
    }

    size() {
        return this.top + 1;
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.capacity - 1;
    }

    printStack() {
        let stk = new Array();
        for (let i = 0; i <= this.top; i++) {
            console.log(this.arr[i]);
            stk.push(this.arr[i]);
        }
        return stk;
    }
}
var stk = new Stack(10);
var EmptySlots = new Array("__","__","__","__","__","__","__","__","__","__");

Insert_Data(EmptySlots);

var pushbtn = document.getElementById("pushbtn");
pushbtn.onclick = function () {
    var element = document.getElementById("inp").value;
    var table = document.getElementById("datas");
    console.log(element);
    stk.push(element);
    EmptySlots.pop();
    table.innerHTML = "";
    Insert_Data(EmptySlots);
    Insert_Data(stk.printStack().reverse());
    element.value = "";
}

var popbtn = document.getElementById("popbtn");
popbtn.onclick = function () {
    var table = document.getElementById("datas");
    stk.pop();
    EmptySlots.push("__");
    table.innerHTML = "";
    Insert_Data(EmptySlots);
    Insert_Data(stk.printStack().reverse());
    Remove_Data();
}


function Insert_Data(a) {
    var table = document.getElementById("datas");
    
    var tr = "";
    a.forEach(x => {
        tr += '<tr>';
        tr += '<td>' + x + '</td>'
        tr += '</tr>'

    })
    table.innerHTML += tr;
}

function Remove_Data() {
    var table = document.getElementById("datas");
    var tr = "";
    tr += '<tr>';
    tr += '<td>' + " " + '</td>'
    tr += '</tr>'
    table.innerHTML += tr;
}