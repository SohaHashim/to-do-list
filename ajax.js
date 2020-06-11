 
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var output="";
            var completed = "";
                response.forEach(element => {
                    completed = `${element.completed}`
                    if(completed === "false"){
                        output += `<br><input type = "checkbox" class="tocheck"> ${element.title}`;
                    }else {
                        output += `<br><input type = "checkbox" class="tocheck" checked disabled> ${element.title}`;
                    }   
                });        
            document.getElementById("list").innerHTML = output; 
        //    var promise = new Promise(function(resolve,reject){
        //         $(document).ready(function() {
        //            // $("input[type=checkbox]").each(function(){
        //        $('.tocheck').on('change',function(){
        //             var count = 0;                   
        //             if(this.checked){ 
        //                 //alert("jdfvb");
        //                 console.log(count);                                              
        //                 count++;
        //                 if(count == 5){
                            
        //                     // console.log(count);
        //                     // alert("5 tasks done");
        //                     resolve("success");
                            
        //                 }else{
        //                     count--;
        //                     //alert("not 5");}
        //                 }
        //             }
        //     });
        //     });
        // });
        //     promise
        //     .then(function(s){alert(s);})  
        
        }
        
    };               
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhr.send();
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
        if(this.checked){
            count++;
        if($(this).checked==false){
            count--;
        }
        }
        let promise = check (count);
        promise
        .then(function(){alert("5 tasks completed");})
        .catch(function(){console.log("checked");})
     })
    