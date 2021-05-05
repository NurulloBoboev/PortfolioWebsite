'use strict'

const burger = document.querySelector('.burger');
const nav = document.querySelector('.dropdown_content');
const links = document.querySelectorAll('.dropdown_content a');

// Toggle the nav bar
burger.addEventListener('click', function () {
    nav.classList.toggle('dropdown_active');
    burger.classList.toggle('burgerhover')

    //Add animations for the buttons
    links.forEach((link,index) =>{

        if(link.style.animation) {
            console.log(link.style.animation);
            link.style.animation = '';
        } else {
            link.style.animation = `dropdown_fade 2s ease forwards ${index*0.125}s`;
            console.log(link.style.animation);
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


