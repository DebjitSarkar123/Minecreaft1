
var canvas= new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

playerx=10;
playery=10;

var playerobject="";
var block_image_object="";

function playerupdate()
{
fabric.Image.fromURL("player.png", function(Img)

{
playerobject=Img;

playerobject.scaleToWidth(150);
playerobject.scaleToHeight(140);
playerobject.set({
    top:playery,
    left:playerx
});

canvas.add(playerobject);

});
}
function new_image(get_image) 
{ fabric.Image.fromURL(get_image, function(Img) 
{ block_image_object = Img;
block_image_object.scaleToWidth(block_image_width); 
block_image_object.scaleToHeight(block_image_height); 
block_image_object.set({ top:playery, left:playerx });
canvas.add(block_image_object); });

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keypress=e.keycode;
console.log(keypress);
if(e.shiftKey==true && keypress=="80")

{
    console.log("p and shift oressed together");
    block_image_width= block_image_width + 10;
    block_image_height= block_image_height + 10;
    document.getElementById("current_whidth").innerHTML=block_image_width;
    document.getElementById("current_heigth").innerHTML=block_image_height;
}

if(e.shiftKey && keypress =='77')

{
    if (keypressed=='38')
    {
       up();
       console.log("up");
    }


    if (keypressed=='40')
    {
       down();
       console.log("down");
    }



    if (keypressed=='37')
    {
       left();
       console.log("left");
    }



    if (keypressed=='39')
    {
       right();
       console.log("right");
    }


    if (keypressed=='87')
    {
       new_image("wall.jpg");
       console.log("w");
    }



    if (keypressed=='71')
    {
       new_image("ground.png");
       console.log("g");
    }


    if (keypressed=='76')
    {
       new_image("light_green.png");
       console.log("l");
    }


    if (keypressed=='84')
    {
       new_image("trunk.jpg");
       console.log("t");
    }


    if (keypressed=='82')
    {
       new_image("roof.jpg");
       console.log("r");
    }


    if (keypressed=='89')
    {
       new_image("yellow_wall.png");
       console.log("y");
    }

    if (keypressed=='68')
    {
       new_image("dark_green.png");
       console.log("d");
    }

    
    if (keypressed=='67')
    {
       new_image("cloud.jpg");
       console.log("c");
    }
}
}
