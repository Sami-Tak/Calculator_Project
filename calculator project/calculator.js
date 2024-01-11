const result = document.getElementById("result");
function display(value){
    result.value += value;
}

function del(){
    document.form.answer.value = document.form.answer.value.substr(0,form.answer.value.length-1)
}

function clearScreen() {
    result.value ="";
}
//  function name was not correct
function giveAns(){
    var a = result.value;
    var b = eval(a);
    result.value = b;
}