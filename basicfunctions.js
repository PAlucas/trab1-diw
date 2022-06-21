let sideBar = document.getElementById("sidebar");
let firstStar = document.getElementById("first-star");
let secondStar = document.getElementById("second-star");
let thirdStar = document.getElementById("third-star");
let forthStar = document.getElementById("forth-star");
let fifthStar = document.getElementById("fifth-star");
let firstCircle = document.getElementById("first-circle");
let secondCircle = document.getElementById("second-circle");
let thirdCircle = document.getElementById("third-circle");
let firstStar0 = document.getElementById("first-star-0");
let secondStar0 = document.getElementById("second-star-0");
let thirdStar0 = document.getElementById("third-star-0");
let forthStar0 = document.getElementById("forth-star-0");
let fifthStar0 = document.getElementById("fifth-star-0");
let firstStar1 = document.getElementById("first-star-1");
let secondStar1 = document.getElementById("second-star-1");
let thirdStar1 = document.getElementById("third-star-1");
let forthStar1 = document.getElementById("forth-star-1");
let fifthStar1 = document.getElementById("fifth-star-1");
let firstStar2 = document.getElementById("first-star-2");
let secondStar2 = document.getElementById("second-star-2");
let thirdStar2 = document.getElementById("third-star-2");
let forthStar2 = document.getElementById("forth-star-2");
let fifthStar2 = document.getElementById("fifth-star-2");
let firstCard = document.querySelector("#first-card");
let firstCardInfo = document.querySelector("#first-card-info");
let secondCard = document.querySelector("#second-card");
let secondCardInfo = document.querySelector("#second-card-info");
let thirdCard = document.querySelector("#third-card");
let thirdCardInfo = document.querySelector("#third-card-info");

function passRight(){
    if(firstCircle.className == "active" && firstCard.style.display == "block"){
        firstCircle.className = "ball";
        secondCircle.className = "active";
        firstCard.style.display = "none";
        firstCardInfo.style.display = "none";
        secondCard.style.display = "block";
        secondCardInfo.style.display = "block";
    }else if(secondCircle.className == "active" && secondCard.style.display == "block"){
        thirdCircle.className = "active";
        secondCircle.className = "ball";
        secondCard.style.display = "none";
        secondCardInfo.style.display = "none";
        thirdCard.style.display = "block";
        thirdCardInfo.style.display = "block";
    }else{
        thirdCircle.className = "ball";
        firstCircle.className = "active";
        thirdCard.style.display = "none";
        thirdCardInfo.style.display = "none";
        firstCard.style.display = "block";
        firstCardInfo.style.display = "block";
    }
}

function passLeft(){
    if(firstCircle.className == "active" && firstCard.style.display == "block"){
        firstCircle.className = "ball";
        thirdCircle.className = "active";
        firstCard.style.display = "none";
        firstCardInfo.style.display = "none";
        thirdCard.style.display = "block";
        thirdCardInfo.style.display = "block";
    }else if(secondCircle.className == "active" && secondCard.style.display == "block"){
        firstCircle.className = "active";
        secondCircle.className = "ball";
        secondCard.style.display = "none";
        secondCardInfo.style.display = "none";
        firstCard.style.display = "block";
        firstCardInfo.style.display = "block";
    }else{
        thirdCircle.className = "ball";
        secondCircle.className = "active";
        thirdCard.style.display = "none";
        thirdCardInfo.style.display = "none";
        secondCard.style.display = "block";
        secondCardInfo.style.display = "block";
    }
}

setInterval(() => {
    passRight();
}, 7000);

function toggle(){
    sideBar.style.display = "flex";
};
function invertToggle(){
    sideBar.style.display = "none";
}

document.onclick = function(event){
    if(event.target.id === firstStar.id){
        firstStar.className = "fa fa-star checked";
        secondStar.className = "fa fa-star";
        thirdStar.className = "fa fa-star";
        forthStar.className = "fa fa-star";
        fifthStar.className = "fa fa-star";
    }else if(event.target.id === secondStar.id){
        firstStar.className = "fa fa-star checked";
        secondStar.className = "fa fa-star checked";
        thirdStar.className = "fa fa-star";
        forthStar.className = "fa fa-star";
        fifthStar.className = "fa fa-star";
    }else if(event.target.id === thirdStar.id){
        firstStar.className = "fa fa-star checked";
        secondStar.className = "fa fa-star checked";
        thirdStar.className = "fa fa-star checked";
        forthStar.className = "fa fa-star";
        fifthStar.className = "fa fa-star";
    }else if(event.target.id === forthStar.id){
        firstStar.className = "fa fa-star checked";
        secondStar.className = "fa fa-star checked";
        thirdStar.className = "fa fa-star checked";
        forthStar.className = "fa fa-star checked";
        fifthStar.className = "fa fa-star";
    }else if(event.target.id === fifthStar.id){
        firstStar.className = "fa fa-star checked";
        secondStar.className = "fa fa-star checked";
        thirdStar.className = "fa fa-star checked";
        forthStar.className = "fa fa-star checked";
        fifthStar.className = "fa fa-star checked";
    }else if(event.target.id === firstStar0.id){
        firstStar0.className = "fa fa-star checked";
        secondStar0.className = "fa fa-star";
        thirdStar0.className = "fa fa-star";
        forthStar0.className = "fa fa-star";
        fifthStar0.className = "fa fa-star";
    }else if(event.target.id === secondStar0.id){
        firstStar0.className = "fa fa-star checked";
        secondStar0.className = "fa fa-star checked";
        thirdStar0.className = "fa fa-star";
        forthStar0.className = "fa fa-star";
        fifthStar0.className = "fa fa-star";
    }else if(event.target.id === thirdStar0.id){
        firstStar0.className = "fa fa-star checked";
        secondStar0.className = "fa fa-star checked";
        thirdStar0.className = "fa fa-star checked";
        forthStar0.className = "fa fa-star";
        fifthStar0.className = "fa fa-star";
    }else if(event.target.id === forthStar0.id){
        firstStar0.className = "fa fa-star checked";
        secondStar0.className = "fa fa-star checked";
        thirdStar0.className = "fa fa-star checked";
        forthStar0.className = "fa fa-star checked";
        fifthStar0.className = "fa fa-star";
    }else if(event.target.id === fifthStar0.id){
        firstStar0.className = "fa fa-star checked";
        secondStar0.className = "fa fa-star checked";
        thirdStar0.className = "fa fa-star checked";
        forthStar0.className = "fa fa-star checked";
        fifthStar0.className = "fa fa-star checked";
    }else if(event.target.id === firstStar1.id){
        firstStar1.className = "fa fa-star checked";
        secondStar1.className = "fa fa-star";
        thirdStar1.className = "fa fa-star";
        forthStar1.className = "fa fa-star";
        fifthStar1.className = "fa fa-star";
    }else if(event.target.id === secondStar1.id){
        firstStar1.className = "fa fa-star checked";
        secondStar1.className = "fa fa-star checked";
        thirdStar1.className = "fa fa-star";
        forthStar1.className = "fa fa-star";
        fifthStar1.className = "fa fa-star";
    }else if(event.target.id === thirdStar1.id){
        firstStar1.className = "fa fa-star checked";
        secondStar1.className = "fa fa-star checked";
        thirdStar1.className = "fa fa-star checked";
        forthStar1.className = "fa fa-star";
        fifthStar1.className = "fa fa-star";
    }else if(event.target.id === forthStar1.id){
        firstStar1.className = "fa fa-star checked";
        secondStar1.className = "fa fa-star checked";
        thirdStar1.className = "fa fa-star checked";
        forthStar1.className = "fa fa-star checked";
        fifthStar1.className = "fa fa-star";
    }else if(event.target.id === fifthStar1.id){
        firstStar1.className = "fa fa-star checked";
        secondStar1.className = "fa fa-star checked";
        thirdStar1.className = "fa fa-star checked";
        forthStar1.className = "fa fa-star checked";
        fifthStar1.className = "fa fa-star checked";
    }else if(event.target.id === firstStar2.id){
        firstStar2.className = "fa fa-star checked";
        secondStar2.className = "fa fa-star";
        thirdStar2.className = "fa fa-star";
        forthStar2.className = "fa fa-star";
        fifthStar2.className = "fa fa-star";
    }else if(event.target.id === secondStar2.id){
        firstStar2.className = "fa fa-star checked";
        secondStar2.className = "fa fa-star checked";
        thirdStar2.className = "fa fa-star";
        forthStar2.className = "fa fa-star";
        fifthStar2.className = "fa fa-star";
    }else if(event.target.id === thirdStar2.id){
        firstStar2.className = "fa fa-star checked";
        secondStar2.className = "fa fa-star checked";
        thirdStar2.className = "fa fa-star checked";
        forthStar2.className = "fa fa-star";
        fifthStar2.className = "fa fa-star";
    }else if(event.target.id === forthStar2.id){
        firstStar2.className = "fa fa-star checked";
        secondStar2.className = "fa fa-star checked";
        thirdStar2.className = "fa fa-star checked";
        forthStar2.className = "fa fa-star checked";
        fifthStar2.className = "fa fa-star";
    }else if(event.target.id === fifthStar2.id){
        firstStar2.className = "fa fa-star checked";
        secondStar2.className = "fa fa-star checked";
        thirdStar2.className = "fa fa-star checked";
        forthStar2.className = "fa fa-star checked";
        fifthStar2.className = "fa fa-star checked";
    }
}