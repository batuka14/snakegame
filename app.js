let canvas=document.querySelector('.canvas');
let ctx=canvas.getContext('2d');
let gridSize=20;
let snakeColor="green";
let foodColor="red";
let snake=[{x:13, y:8}];
let food={x:2,y:1};
let dx=-1, dy=0;
var h3=document.getElementsByTagName('h3')[0];
var CountPlus=0;
// draw snake
function drawSnake(snakeEl){
	snakeEl.forEach(
		segment => {
			ctx.fillStyle=snakeColor;
			ctx.fillRect(segment.x*gridSize, segment.y*gridSize, gridSize, gridSize);
		}
	)
}
// draw food
function drawFood(){
	ctx.fillStyle=foodColor;
	ctx.fillRect(food.x*gridSize, food.y*gridSize, gridSize, gridSize);
}
// move snake
function moveSnake(){
	let head ={x:snake[0].x+dx, y:snake[0].y+dy};
	// unshift() -> massive deer utga nemne;
	snake.unshift(head);
	if(head.x==food.x && head.y==food.y){
		random=Math.floor(Math.random()*20);
		random2=Math.floor(Math.random()*20);
		food={x:random,y:random2};
		CountPlus++;
		h3.innerText="Point:"+CountPlus;
	}else{
		snake.pop();
	}
	if(head.x<0 || head.x>19 || head.y<0 || head.y>19){
		alert("Game over");
		random=Math.floor(Math.random()*20);
		random2=Math.floor(Math.random()*20);
		food={x:random,y:random2};
		snake=[{x:Math.floor(Math.random()*18)+1,y:Math.floor(Math.random()*18)+1}];
		CountPlus=0;
		h3.innerText="Point:"+CountPlus;
	}
	// .pop() -> massivaas egnii utgiig hasna
	console.log(snake);
	ctx.clearRect(0,0,canvas.width,canvas.height)
	drawSnake(snake);
	drawFood();
}
if(CountPlus==5){
	setInterval(moveSnake,250);
}else if(CountPlus==10){
	setInterval(moveSnake,200);
}else if(CountPlus==15){
	setInterval(moveSnake,150);
}else if(CountPlus==20){
	setInterval(moveSnake,100);
}
setInterval(moveSnake,300);
document.addEventListener('keydown',(e)=>{
	console.log(e.key);
	if(e.key=="ArrowLeft"){
		if(dx!==1){
			dx=-1;
			dy=0;
		}
	}else if(e.key=="ArrowUp"){
		if(dy!==1){
			dx=0;
			dy=-1;
		}
	}else if(e.key=="ArrowDown"){
		if(dy!==-1){
			dx=0;
			dy=1;
		}
	}else if(e.key=="ArrowRight"){
		if(dx!==-1){
			dx=1;
			dy=0;
		}
	}
})
function restart(){
	CountPlus=0;
	h3.innerText="Point:"+CountPlus;
	random=Math.floor(Math.random()*20);
	random2=Math.floor(Math.random()*20);
	food={x:random,y:random2};
	snake=[{x:Math.floor(Math.random()*18)+1,y:Math.floor(Math.random()*18)+1}];
}