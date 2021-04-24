let countg=0;
let full=0;
function load_list(){

    let res=new XMLHttpRequest();
    res.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.readyState);
            let e=document.getElementById("todo-list");
            e.innerHTML="";
            todo_list=JSON.parse(res.responseText);
            let count=0;
            todo_list.forEach(i => {
                if(i['completed']==true){
                    count+=1;
                }
                let temp=document.createElement('tr');
                temp.style.height="50px";
                temp.style.borderBottom="1px solid rgba(205, 192, 192, 0.35)"
                temp.style.alignItems="centre";
                temp.innerHTML=`
                    <td style="text-align:center;">${i['id']}</td>
                    <td style="text-align:center;">${i['title']}</td>
                    <td><input class="task" type="checkbox" onchange="checkbox_change()" ${i['completed']?'checked="checked" disabled="disabled"':''}>
                    </td>
                    `;
                e.appendChild(temp);
            });

        countg=count;

        }
        else{
            let e=document.getElementById("todo-list");
            e.innerHTML="<i>no tasks to show.</i>"
        }
    };
    res.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    res.send(null);
    

}
// load_list();
// setInterval(load_list,60000);

function checkbox_change(){
    if((document.querySelectorAll('.task:checked').length-countg)==5){
        bootbox.alert({message:"<span style='position:relative;left:20px;top:15px;border-radius:50%;float:left'><img height='160px' width='160px' src='./res/tenor3.gif' style='border-radius:50%;float:left'></img><h1 style='color:rgba(102,113,134,255);position:relative;left:-60px;top:60px;float:right;margin-left:30px'>Congratz.!</h1><small style='color:rgb(244,180,100);position:relative;top:60px;left:20px;white-space:nowrap'>you have compleated 5 tasks today.</small></span>",centerVertical:true});
    }    
};

function loginbtn(){
    if((document.querySelector("#uname").value=="admin")&&(document.querySelector("#pword").value=="12345")){
        console.log("login sucks");
        window.location.href="./todo.html"
    }
    else{
        document.querySelector("#warn").innerHTML="Username or Password is incorrect.";
    }
}

// Array.from(document.getElementsByClassName('task')).forEach((element) => {
//         element.addEventListener('change',()=> {
//             console.log("CHANGED");
//         });

    // });

