let form=document.getElementById("form");
let input=document.getElementById("input");
let msg=document.getElementById("msg");
let posts=document.getElementById("posts");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
console.log("button click");
formValidation();

});

let formValidation=()=>{
    if(input.value==""){
     msg.innerHTML="Invalid";
        console.log("failure");
    }
    else{
        msg.innerHTML="";
console.log("success");
acceptdata();
    }
};

let data={};
let acceptdata=()=>{
data["text"]=input.value
console.log(data);
createpost();
};

let createpost=()=>{
    //posts.innerHTML=data.text;
    posts.innerHTML+=`
<div>
<p>${data.text}</p>
<span class="options">
<i onClick="editpost(this)" class="fa fa-pencil-square-o"></i>
<i onClick="deletepost(this)" class="fa fa-trash-o"></i>
</span>
</div> `
input.value="";
};

let deletepost=(e)=>{
    e.parentElement.parentElement.remove();
};

let editpost=(e)=>{
input.value=e.parentElement.previousElementSibling.innerHTML;
e.parentElement.parentElement.remove();
};