let Count = 3; //Count
let random = (Math.floor((Math.random() * 10) + 1));
let imgBox =document.getElementById("imgBox");
let imgPath= "Image/Congratulations-GIF.gif";

function GuessNumberfun() {
    
    let GuessNumber = Number(document.getElementById("number").value);

    let chances = document.getElementById("ChanceCount");
    let Comment = document.getElementById("Comment")
    if ((random == GuessNumber) && (Count >= 1)) {
        Comment.innerHTML = "You Won";
        imgBox.innerHTML=`<img src=${imgPath} alt="" >`;
    } else if ((Count >= 1)) {
        Count--;
        if (Count==2) {
            chances.innerHTML = `Chances Left: <span style="color: #FFD700;">${Count}</span>`;
        }else if (Count==1){
             chances.innerHTML = `Chances Left: <span style="color:#D2691E ;">${Count}</span>`;

        }else{
            chances.innerHTML = `Chances Left: <span style="color:#DC143C ;">${Count}</span>`;
        }
           
       
       
        if (GuessNumber < random) {
            Comment.innerHTML = "Your Number is too low";

        } else if (GuessNumber > random) {
            Comment.innerHTML = "Your Number is too high";

        }

    } else {
        Comment.innerHTML = "Game over Correct number was " + random;
    }



}