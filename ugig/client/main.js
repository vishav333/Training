import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Template.hello.events({
    'click #ig': function(){
var arr=["dangar","bandar","idiot","motu","doggy","donkey","dirty man"];
var mth=Math.round(Math.random(arr)*6);
alert(arr[mth]);
        
   },
    'mouseover':function(){
var ag=document.getElementById("ig");
ag.style.width="440px";
ag.style.height="240px";

},
   'mouseout':function(){
var prv=document.getElementById("ig");
prv.style.width="400px";
prv.style.height="200px";

}
});



