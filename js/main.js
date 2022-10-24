var elementNameCard = document.querySelector("#newTask");
var elementButtonPlus = document.querySelector(".addItem");
var elementShowCardUnC = document.querySelector("#todo");
var elementShowCardC = document.querySelector("#completed");

var listTaskTodo = [];
var listDoneTask = [];

function show() {
    listTaskTodo.push(elementNameCard.value);

    localStorage.setItem("valueTask",JSON.stringify(listTaskTodo));

    elementNameCard.value = "";

    showTaskTodo()
}

function showTaskTodo() {
    listTaskTodo = JSON.parse(localStorage.getItem("valueTask"));

    var str = "";

    listTaskTodo.forEach((element,index) => {
        str += `
        <li class="">
        <span class="showTask">${element}</span>
        <span>
          <i onclick="removeTaskTodo(${index})" class="fa fa-trash-alt"></i>
          <i onclick="addTaskTodo(${index})" class="fa fa-check-circle"></i>
        </span>
        </li>
        `
    });

    elementShowCardUnC.innerHTML = str;

}

function removeTaskTodo(index) {
    listTaskTodo = JSON.parse(localStorage.getItem("valueTask"));
    var newIndex = listTaskTodo.findIndex((element,elementIndex) => elementIndex === index )
    

    if(newIndex !== -1) {
        listTaskTodo.splice(newIndex,1);
        localStorage.setItem("valueTask",JSON.stringify(listTaskTodo));
        showTaskTodo();
    }

}

function addTaskTodo(index) {
    listTaskTodo = JSON.parse(localStorage.getItem("valueTask"));
    
    var oldIndex = listTaskTodo.findIndex(
        (elementDone,elementIndexDone) => 
        elementIndexDone === index
    )

    if(oldIndex !== -1) {
        listDoneTask.push(listTaskTodo[oldIndex]);
        listTaskTodo.splice(oldIndex,1);

        localStorage.setItem("valueTask",JSON.stringify(listTaskTodo));
        showTaskTodo();
    }   

    localStorage.setItem("valueTaskDone",JSON.stringify(listDoneTask));
    showTaskDone();
}

function showTaskDone() {
    listDoneTask = JSON.parse(localStorage.getItem("valueTaskDone"));
    
    var str2 = "";
    listDoneTask.forEach((elementDone,index2) => {
        str2 += `
        <li class="">
            <span class="showTaskDone">${elementDone}</span>
            <span>
            <i onclick="remoteTaskDone(${index2})" class="fa fa-trash-alt"></i>
            <i onclick="addTaskTodo2(${index2})" class="fa fa-check-circle"></i>
            </span>
        </li>
        `
    });

    elementShowCardC.innerHTML = str2;
}

function addTaskTodo2(index2) {
    listDoneTask = JSON.parse(localStorage.getItem("valueTaskDone"));
    
    var oldIndex2 = listDoneTask.findIndex(
        (elementDone,elementIndexDone2) => 
        elementIndexDone2 === index2
    )

    if(oldIndex2 !== -1) {
        listTaskTodo.push(listDoneTask[oldIndex2]);
        listDoneTask.splice(oldIndex2,1);

        localStorage.setItem("valueTaskDone",JSON.stringify(listDoneTask));
        showTaskDone();
        
    }   
    localStorage.setItem("valueTask",JSON.stringify(listTaskTodo));


    showTaskTodo();
}

function remoteTaskDone(index2) {
    listDoneTask = JSON.parse(localStorage.getItem("valueTaskDone"));

    var oldIndex2 = listDoneTask.findIndex(
        (elementDone,elementIndexDone2) => 
        elementIndexDone2 === index2
    )

    if(oldIndex2 !== -1) {
        listDoneTask.splice(oldIndex2,1);

        localStorage.setItem("valueTaskDone",JSON.stringify(listDoneTask));
        showTaskDone();
    }   
}





