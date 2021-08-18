function changeColor() {
  var body =document.body;
  document.body.style.background = 'A8B7AB';
}

function welcomeMsg(){
var name = prompt("please enter your name");
var welcome = document.getElementById("welcome");
welcome.innerHTML ="Hi," + name;
var d = new Date();
}

function changeImage(){
   //document.getElementById("image1").src="https://images.unsplash.com/photo-1627417594177-55a6c0e4f3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";


 var img1 = "https://i.ytimg.com/vi/KMDPqUEPoZI/maxresdefault.jpg"; 
 var img2="https://images.unsplash.com/photo-1627417594177-55a6c0e4f3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";

 if(document.getElementById("image1").src==img1){
   document.getElementById("image1").src=img2;
  }
  else{
    document.getElementById("image1").src = img1;
  
  }
} 
 