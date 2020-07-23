/*

var name = prompt('What is your name');
greeting(name);

function greeting(yourName)
{
    console.log('hello ' + yourName);
}



// String Functions

var fruit = 'banana,apple,mango';

console.log(fruit.length);
console.log(fruit.indexOf('b'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.slice(2,5));
console.log(fruit.charAt(1));
console.log(fruit.split(","));
console.log(fruit.replace('a',123));

*/

// Array function
/*
var newArray = new Array(1,2,5,9,4,222,5,11,44,33,5,77,100);                         // Array declaration
var fruits = ['banana','apple','kiwi','mango'];      // Array declaration

console.log(fruits);                                    // Display Array
console.log(fruits.length);                             // Array length
console.log(fruits.pop(),fruits);                       // Pop -delete last item
console.log(fruits.push('pineapple'),fruits);                  // add item at end of array
console.log(fruits.shift(),fruits);                             // remove 1st item from array
console.log(fruits.unshift('guava'),fruits);                             // Add item at 1st position to array
console.log(fruits[2]);                                         // Display item at position 2
console.log(fruits.sort());                                     // sorts charater array (numbers array need different fucntion)
console.log(newArray.sort(function(a,b){return(a-b)}));           // array numbers sort ascending
console.log(newArray.sort(function(a,b){return(b-a)}));           // array numbers sort descending

console.log(fruits.slice(2,3));                                 // slice array
console.log(fruits.reverse());
var addarray = newArray.concat(fruits);                     //  add array (concat)
console.log(addarray);


for(var num = 0; num < 5 ; num++)
{
    newArray.push(num);
}

console.log(newArray);

*/

// objects

/*
var student = {                                     // student   - object
    name : 'john',                                  // name, lastName   -  property
    lastName : 'smith',
    age : '30',
    country : 'india',
    fullName : function(){                          //fullName - method
        return (this.name + ' ' + this.lastName);
    }

}

console.log(student.name);
console.log(student.age);
student.name = 'will';                          
console.log(student.name);
console.log(student.fullName());

*/

// coditions and switch cases

// WAP to print as below
// age 0-2 --> infant
// age 3-14 --> child
// age 15+ --> adult

/*
var age = prompt('what is your age!');

if( (age>=0) && (age <=2) )
{
    var type = 'infant';
}

else if ( (age > 2) && (age<=14) )
{
    var type = 'child';
}

else
{
    var type ='adult';
}

console.log('you are --> ' + type);

*/

// switch
//WAP to print Weekend for fri(5), sat(6), sun(0) and weekday for rest
/*

var day = prompt('what day is today!');
var week;
switch(day)
{
    case '0' : week = 'weekend';
            break;
    case '5' : week = 'weekend';break;
    case '6' : week = 'weekend';break;
    default : week = 'weekday';break;
    

}

console.log('today is --> '+ week);
*/

/*************** * game 1 *******************/


function ageInDays()
{
    var age = prompt('what is your birth year');
    var days = (2020-age)*365;
    document.getElementById('resultInDays').innerHTML = days;
}

function reset()
{
    document.getElementById('resultInDays').remove();
}

/********************************/

/************************* game2 ******************************/

function newImage()
{
    var img = document.createElement('img');
    var div =document.getElementById('imggen');
    img.src = "cat.gif";
    div.appendChild(img);

}

function newtext()
{
    var btn = document.createElement('button');
    var div =document.getElementById('imggen');
    var tex = document.createTextNode('hi this is cat');
    btn.appendChild(tex);
    div.appendChild(btn);

}


function newbold()
{
    var text = document.createElement('b')
    text.innerText ='this is text';
    var div =document.getElementById('imggen');
    div.appendChild(text);
}

/*******************************************************/


 /****************************game3 ********************************/
  
//co    nsole.log(Math.floor(Math.random() * 3)+1);

var arr = ['rock','paper','scissors'];

function rpsGame(yourChoice)
{
    humanChoice = yourChoice.id;
    botChoice = random();
    console.log(humanChoice,botChoice);
    var a = resultSearch(humanChoice,botChoice);
    console.log(a);
    document.getElementById('rps-box').remove();
    printresult(humanChoice,botChoice,a);
}

function printresult(human,bot,message)
{
    var humanimg = document.createElement('img');
    humanimg.src= getImage(human);
    var msg = document.createElement('h1');
    h1 = document.createTextNode(message);

    var botimg  = document.createElement('img') ;
    botimg.src= getImage(bot);
    var div=document.getElementById('rps');
    div.appendChild(humanimg);
    div.appendChild(h1);
    div.appendChild(botimg);
}

function getImage(imagematch)
{
    if(imagematch=='rock')
    {
           console.log('rock image');
            return('rock.png');
     }
    else if(imagematch=='paper')
    {
        console.log('paper image');
        return('paper.png');
    }
    else
    {
        console.log('scissors image');
        return('scissors.png');
        
    }
}


function random()
{
    var choice = Math.floor(Math.random() * 3);
    return(arr[choice]);
 
}

function resultSearch(human,bot)
{
    if(human==bot)
    {
    //    console.log('Match Tie');
        return ('Match Tie');
    }
    else if( (human=='rock' && bot=='paper') || (human=='paper' && bot=='scissors') || (human=='scissors' && bot=='rock') )
    {
      //  console.log('human Lost');
        return ('Human Lost');
        
    }
    else
    {
    //    console.log('human Wins');
        return ('Human Wins');
        
    }
}

/****************************************************/

/******************** game4 ***************************/

var color = ['red-btn','green-btn','yellow-btn','blue-btn'];


var allbtnvalue = document.getElementsByTagName('button');

var copybtnvalue= [];
for(var j=0; j<allbtnvalue.length;j++)
    {
        copybtnvalue.push(allbtnvalue[j].classList[0]);
    }


//var copybtnvalue = allbtnvalue;
console.log('all', allbtnvalue);
console.log('copy', copybtnvalue);

function btncolorchange(btnselect)
{
    var selectcolor = btnselect.value;
    if(selectcolor=='red')
    {
        for(var i=0 ;i<allbtnvalue.length;i++)
        {
            allbtnvalue[i].classList.remove(allbtnvalue[i].classList);
            allbtnvalue[i].classList.add('red-btn');
        }
    }

    else if(selectcolor=='green')
    {
        for(var i=0 ;i<allbtnvalue.length;i++)
        {
            allbtnvalue[i].classList.remove(allbtnvalue[i].classList);
            allbtnvalue[i].classList.add('green-btn');
        }
    }
    else if(selectcolor=='reset')
    {
        for(var i=0 ;i<allbtnvalue.length;i++)
        {
            
            allbtnvalue[i].classList.remove(allbtnvalue[i].classList);
            allbtnvalue[i].classList.add(copybtnvalue[i]);
        }
    }
    else if(selectcolor=='random')
    {
        for(var i=0 ;i<allbtnvalue.length;i++)
        {   
            var randomcolor = Math.floor(Math.random()*4);
            console.log(randomcolor);
            console.log(color[randomcolor]);
            allbtnvalue[i].classList.remove(allbtnvalue[i].classList);
            allbtnvalue[i].classList.add(color[randomcolor]);
        }
    }
}

/******************************************************/



window.onload = function()
{
    console.log('window loaded');

}

myclass.addEventListener('click',function(){
    console.log('clicked');

})

myclass.addEventListener('mouseover',function(){
   
   // add paragraph
   /*
    var inclass = document.getElementsByClassName('class1');
    var p = document.createElement('p')
    p.innerText = 'this is paragraph'
    inclass[0].appendChild(p);
    console.log(inclass[0])
*/

    // change color
    
    var inclass = document.getElementsByClassName('testClass');
    inclass[0].classList.add('pcolor');
    console.log('mouse over');
    console.log(inclass[0]);

  inclass[0].innerHTML = "<p> text changed after mouse over </b>";
    

})

myclass.addEventListener('mouseout',function()
{
    var inclass = document.getElementsByClassName('testClass');
    inclass[0].classList.remove('pcolor');
    
  inclass[0].innerHTML = "<p> this is the textclass </p>";
    
})




function clicked()
{
    console.log('btn clicked');
    var elemclass = document.getElementsByClassName('class1');
    console.log(elemclass[0]);
    var p = document.createElement('p')
    p.innerText = 'this is after btn clicked';
   elemclass[0].appendChild(p);
}

