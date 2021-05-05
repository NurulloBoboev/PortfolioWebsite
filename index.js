'use strict'

const burger = document.querySelector('.burger');
const nav = document.querySelector('.dropdown_content');
const links = document.querySelectorAll('.dropdown_content a');

// Toggle the nav bar
burger.addEventListener('click', function () {
    nav.classList.toggle('dropdown_active');

    //Add animations for the buttons
    links.forEach((a,index) =>{
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = 'dropdown_fade 0.5s ease forwards ${index / 7+ 0}s';
        }
    });
});



var i = 1;
var image1 = 'gif1.gif';
var image2 = 'gif2.gif';
var time = 8000;


    function changeImg(){
        document.python.src = image1;

        if(i < 2){
            document.python.src = image2;
            i++;
        } else {
            document.python.src = image1;
            i = 0;
        }

        setTimeout("changeImg()", time);
    }

    window.onload = changeImg;


