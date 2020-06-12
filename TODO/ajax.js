 
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var output="";
            var completed = "";
                response.forEach(element => {
                    completed = `${element.completed}`
                    if(completed === "false"){
                        output += `<br><input type = "checkbox" class="checkbox"> ${element.title}`;
                    }else {
                        output += `<br><input type = "checkbox" class="checkbox" checked disabled> ${element.title}`;
                    }   
                });        
            document.getElementById("list").innerHTML = output; 
            $(document).ready(function() {    
     let count =0;
     function check(cnt){
         return new Promise(function(resolve,reject){
             if(cnt===5){
                 resolve("success");
             }else{
                 reject("error");
             }
         });

     }  
     $(document).on('change','.checkbox',function(){
        if($(this).prop('checked')===true){
            count++;
        }else{      
            count--;
        }
        let promise = check(count);
        promise
        .then(function(){alert("5 tasks completed");})
        .catch(function(){console.log("error");})
     })
    });
}
    }
     xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true);
     xhr.send();