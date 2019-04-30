var next = document.querySelector('.next');
var current = document.querySelector('.current');
var text = document.querySelector('.writeHere');
var count=1;
var interval;

var getText = text.value;
console.log(getText);
function startCounter(){
	 interval=setInterval(animation,1000);
}

function animation(){

	next.classList.add('animate');
	 next.textContent=count;
	 if(count == text.value){
	 	clearInterval(interval);
        setTimeout(function(){ alert("time's up"); }, 1000);
	 	return;
	 }
	setTimeout(function(){
		next.classList.remove('animate');
		current.textContent=count;
		count++;      
	},500);
}
