function showDiv1() {
  document.getElementById("R").style.visibility = "visible";
}
setTimeout("showDiv1()", 500);
function showDiv2() {
  document.getElementById("P").style.visibility = "visible";
}
setTimeout("showDiv2()", 1500);
function showDiv3() {
  document.getElementById("S").style.visibility = "visible";
}
setTimeout("showDiv3()", 2700);
const rules = document.getElementById('features');
rules.onclick = () =>{
  if(document.getElementById("rules").style.visibility == "hidden"){
    document.getElementById("rules").style.visibility = "visible";
  }else{
    document.getElementById("rules").style.visibility = "hidden";
  }
}

var userpoints =0;
var compoints = 0;
var lostpoints =0;

//function to return user points
function answer(randomNo,num){

 
if(num == 1 && randomNo ==1){
  userpoints = 0;
  lostpoints =0;
}
else if(num ==1 && randomNo ==2){
  lostpoints = 1;
  userpoints =0;
}
else if(num == 1 && randomNo ==3){
  lostpoints =0;
  userpoints = 1;
}
else if(num ==2 && randomNo ==1){
  userpoints = 1;
  lostpoints =0;
}
else if(num ==2 && randomNo ==2){
  userpoints =0;
  lostpoints =0;
}
else if(num ==2 && randomNo == 3){
  lostpoints = 1;
  userpoints =0;
}
else if(num ==3 && randomNo ==1){
  lostpoints = 1;
  userpoints =0;
}
else if(num ==3 && randomNo ==2){
  userpoints = 1;
  lostpoints =0;
}
else if(num ==3 && randomNo ==3){
  userpoints = 0;
  lostpoints =0;
}
console.log(`lost points ${lostpoints}`);
return userpoints;
}

//function to return computer points

var randomNos;
var numo;
function answerc(randomNos,numo){

if(numo == 1 && randomNos ==1){
  compoints = compoints+0;
}
else if(numo ==1 && randomNos ==2){
  compoints = compoints+1;
}
else if(numo ==1 && randomNos ==3){
  compoints = compoints+0;
}
else if(numo ==2 && randomNos ==1){
  compoints = compoints+0;
}
else if(numo ==2 && randomNos ==2){
  compoints = compoints+0;
}
else if(numo ==2 && randomNos == 3){
  compoints = compoints+1;
}
else if(numo ==3 && randomNos ==1){
  compoints = compoints+1;
}
else if(numo ==3 && randomNos ==2){
  compoints = compoints+0;
}
else if(numo ==3 && randomNos ==3){
  compoints = compoints+0;
}
return compoints;
}


//Declaring the buttons

const rock = document.getElementById("x");
const paper =document.getElementById("y");
const scissor = document.getElementById("z");
const score = document.getElementById("numberx");
const scorec = document.getElementById("numbery");
const msg = document.getElementById("msg");
const gameover = document.getElementById('gameover');
const replay = document.getElementById('bt');


var res = 0;
var resc =0;

//functions to display the computer pick

function display(){
  var randomNum = Math.floor(Math.random() * 3) + 1;
      if(randomNum == 1){
        document.getElementById('crock').style.visibility = "visible";

        setTimeout(() =>{
          document.getElementById('crock').style.visibility = "hidden";
        },1000);

        }else if(randomNum == 2){
          document.getElementById('cpaper').style.visibility = "visible";

          setTimeout(() =>{
            document.getElementById('cpaper').style.visibility = "hidden";
          },1000);
          
          
        }else{
          document.getElementById('csci').style.visibility = "visible";

          setTimeout(() =>{
            document.getElementById('csci').style.visibility = "hidden";
          },1000);

        }
  return randomNum;
}
//function to display user pick

function displayuser(f){

  if(f == 1){
    document.getElementById('brock').style.visibility = "visible";
    setTimeout(() =>{
      document.getElementById('brock').style.visibility = "hidden";
    },1000);
  }
  else if(f == 2){
    document.getElementById('bpaper').style.visibility = "visible";
    setTimeout(() =>{
      document.getElementById('bpaper').style.visibility = "hidden";
    },1000);

  }
  else{
    document.getElementById('bsci').style.visibility = "visible";

    setTimeout(() =>{
      document.getElementById('bsci').style.visibility = "hidden";
    },1000);
  }
}

//game over function



//function for game play

function gameplay(){
  
  
  // rock click function
    

    rock.onclick = () =>{
      
      nums = 1;

      
      
      
      //checking lost points condition
      

      if(resc >= 3){
        
        gameover.style.visibility = "visible";
        }
      else{
        //displaying the images
        displayuser(nums);
        var returnedno = display();

        res += answer(returnedno,nums);
        resc = answerc(returnedno,nums);
      }
      score.innerHTML = res;
      scorec.innerHTML = resc;
    }



  //paper click function
     

    paper.onclick = () =>{
      
      nums = 2;

     
      

      if(resc >= 3){
        gameover.style.visibility = "visible";
      }
      else{
         //displaying the images
      displayuser(nums);
      var returnedno = display();
        res += answer(returnedno,nums);
        
        resc = answerc(returnedno,nums);
      }
      score.innerHTML = res;
      scorec.innerHTML = resc;
    }



  //scissor click function 


    scissor.onclick =() =>{
    
      nums = 3;
      
      

      if(resc >= 3){
        gameover.style.visibility = "visible";
      }
      else{

        //displaying the images
       displayuser(nums);
       var returnedno = display();
       res += answer(returnedno,nums);
        
       resc = answerc(returnedno,nums);
      }
      score.innerHTML = res;
      scorec.innerHTML = resc;

    }

}
gameplay();

