'use strict'

const switcher = document.querySelector('input');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

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