const username = document.getElementById("exampleInputUsername1");
const pwd = document.getElementById("exampleInputPassword1");
const form = document.getElementById("form");
const button = document.getElementById("button");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate(directTo);
});
function validate(callback){
    const usernameValue = username.value.trim();
    const pwdValue = pwd.value.trim();
    let userFlag = true;
    let pwdFlag = true;
    if(usernameValue === ""|| pwdValue === ""){
        alert("fields can't be empty");
        return false;
    } else if(usernameValue != "admin"){
        userFlag = true;
        alert("incorrect username");
        return false;
    }else {
        pwdFlag = false;
    }
     if (pwdValue != "12345"){
        alert("Incorrect password");
        pwdFlag = true;
        return false;
    } else{
        pwdFlag = false;
        callback();
            }
}          
function directTo(){
    location.assign("ToDoList.html");
}
// function loadList(){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if(this.readyState==4 && this.status==200){
//             var response = JSON.parse(this.responseText);
//             var output="";
//             var completed = "";
//                 response.forEach(element => {
//                     completed = `${element.completed}`
//                     if(completed === "false"){
//                         output += `<br><input type = "checkbox"> ${element.title}`;
//                     }else {
//                         output += `<br><input type = "checkbox" checked> ${element.title}`;
//                     }   
//                 });
               
//                 // output += "<br><input id=\"check\" type = \"checkbox\"> ";
//                 // output +=  response[i].title ;           
//             // for( var i=0;i<response.length;i++){
//             //     if(response[i].completed === "true"){
//             //         document.getElementById("check").checked = true;
//             //     }   
//             // }         
//             document.getElementById("list").innerHTML = output;                              
//    }
//    };                
// xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true);
// xhr.send();
// }    