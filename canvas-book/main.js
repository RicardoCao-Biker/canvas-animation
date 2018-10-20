var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.lineJoin='round';
context.lineWidth = 10;

context.font = '24px';
context.fillText('click1111111', 175, 40);
context.strokeRect(75,100,200,200);
context.fillRect(325,100,200,200);

context.canvas.onousedown = function(e){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

