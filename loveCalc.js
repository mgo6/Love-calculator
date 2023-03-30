// button listener 
var button = document.querySelector('button');

button.addEventListener('click', function(e){
var yourName = document.querySelector ("#yourName").value;
var crushName = document.querySelector ("#crushName").value;
//----------------------------------------------------
 
const name1 = yourName.charAt(0).toUpperCase() + yourName.slice(1).toLowerCase() ;
const name2 = crushName.charAt(0).toUpperCase() + crushName.slice(1).toLowerCase() ;


 


// "sonai", "Sonai" ,"Sonai ","Mantu","mantu","Mantu ","sosti","tanu","Sosti","Tanu"




// document.getElementById("love").onclick = function(){
    var guest = ["Mangal ", "Mangal","mangal"];
    var pass = [ "sonai", "Sonai" ,"Sonai "];
    // var hate = ["bhanu","Bhanu","Bhanu ","Suraj","suraj","Suraj ","Papu","papu","Papu "];
    // var Nhat = ["Sonai","sonai","Sonai ","Sanu","sanu","Sanu ",]
    
    // var user = document.getElementById("yourName").value;
    // var password = document.getElementById("crushName").value;
    // console.log("hello",user);
    if (guest.includes(yourName) && pass.includes(crushName)) {
        var lovely = Math.random();
        loveScore = Math.floor(95 + (lovely*10))+1;
        console.log(lovely)

} 
// else if(hate.includes( yourName) && Nhat.includes(crushName)||Nhat.includes( yourName) && hate.includes(crushName) ){
//  console.log("SHAME ON YOU")
//  loveScore = 0;
// }

else if (guest.includes(yourName)  ) {
    var lovely ="☠ERR0R!";
    loveScore = lovely;
    console.log(lovely)

} 
 
  


else{
 

//---------------------------------------------

var loveScore = Math.random();
loveScore = Math.floor(loveScore * 90) + 1 ;
}


// A place for % result to be printed out 
var resultNumber = document.querySelector("#resultNumber");
// A place for the following explanation to be printed out 
var explanation = document.querySelector("#explanation");
// Hiding form for result 
var hideForResult = document.querySelector('.hideForResult');
// Showing Try Again button
var tryAgain = document.querySelector('#tryAgain');
// Shortcut for result
var yourResultIs = name1 + " & " +name2 + ", Your Compatibility is " + loveScore + "%.";


if (loveScore >= 101){
    explanation.style.visibility = "visible";
    resultNumber.style.visibility = "visible";
    resultNumber.innerHTML = loveScore + "%";
    explanation.innerHTML = yourResultIs + "😍GET READY FOR A LONG AND LOVELY JOURNEY. You can Full  Fill YOUR DREAMS.. Wishing You a LOvely journey.";
    hideForResult.style.display = "none";
    tryAgain.style.visibility = "visible";
}
else if (loveScore >= 100 && loveScore <101){
    explanation.style.visibility = "visible";
    resultNumber.style.visibility = "visible";
    resultNumber.innerHTML = loveScore + "%"; 
    explanation.innerHTML = yourResultIs + "Your heart is As soft as cloude, And  Your Love is As Pure As Tears.. 😘,Best of luck for your journey .";
    hideForResult.style.display = "none";
    tryAgain.style.visibility = "visible";
}
else if (loveScore >= 99 && loveScore <100){
    explanation.style.visibility = "visible";
    resultNumber.style.visibility = "visible";
    resultNumber.innerHTML = loveScore + "%"; 
    explanation.innerHTML = yourResultIs + "As normaly Not  very Good Bondind, But Love for each Other is extrimly very high. Keep it up.";
    hideForResult.style.display = "none"; 
    tryAgain.style.visibility = "visible";
}
else if (loveScore >= 97 && loveScore <99){
    explanation.style.visibility = "visible";
    resultNumber.style.visibility = "visible";
    resultNumber.innerHTML = loveScore + "%"; 
    explanation.innerHTML = yourResultIs + " Love is TOO much for Each Other , But Your Mind Can't stay focased... Never Broke Trust  ";
    hideForResult.style.display = "none";
    tryAgain.style.visibility = "visible";
}
else if (loveScore >= 95 && loveScore <97){
    explanation.style.visibility = "visible";
    resultNumber.style.visibility = "visible";
    resultNumber.innerHTML = loveScore + "%"; 
    explanation.innerHTML = yourResultIs + "I know Your Love is too much 😘, but your love story gose Somethink Different. Stay Ready For it...";
    hideForResult.style.display = "none";
    tryAgain.style.visibility = "visible";
}
else if (loveScore >= 90 && loveScore < 95){
    explanation.style.visibility = "visible";
    resultNumber.style.visibility = "visible";
    resultNumber.innerHTML = loveScore + "%";
    explanation.innerHTML = yourResultIs + "Very Nice Couple 🥰, God Bless You.. Never  leave hands of each other.";
    hideForResult.style.display = "none";
    tryAgain.style.visibility = "visible";
}

    else if (loveScore >= 70 && loveScore < 90) {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        explanation.innerHTML = yourResultIs + "High change there 😏";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else if (loveScore >= 40 && loveScore < 70) {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        explanation.innerHTML = yourResultIs + "That's not bad 🤔";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else if (loveScore === 0  ) {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        explanation.innerHTML = yourResultIs + "SHAME ON YOU🤮";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else if (loveScore === lovely  ) {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore  +"!";
        resultNumber.style.color ="red";
        resultNumber.style.textShadow ="2px 2px 3px white";
        explanation.innerHTML =   "😓SORRY WE CAN'T RECIVED ANY DATA FROM THIS HEART... (This heart is Private, Not available in publickly.) OR This hrart in broken it's trying to rebuild himself... PLEASE TRY AGAIN SOME DAY'S LETTER";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
    else {
        explanation.style.visibility = "visible";
        resultNumber.style.visibility = "visible";
        resultNumber.innerHTML = loveScore + "%";
        explanation.innerHTML = yourResultIs + "ugh, as if! 🤧";
        hideForResult.style.display = "none";
        tryAgain.style.visibility = "visible";
    }
// }
});


// document.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
//   });

//FOR ME -----------------------------------------------------

// document.getElementById("love").onclick = function(){
//     var guest = ["mangal", "Mangal", "sonai", "Sonai"];
//     var pass = ["mangal", "Mangal", "sonai", "Sonai"];
    
//     var user = document.getElementById("yourName").value;
//     var password = document.getElementById("crushName").value;
//     // console.log("hello",user);
//     if (guest.includes( user) && pass.includes(password)) {
//   console.log("hello sir")

//   function unlocked() {
//     var loveScore = Math.random();
// loveScore = Math.floor(loveScore + 90) + 1 ;

//   }

// unlocked();

// }
// }