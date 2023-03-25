var canvas=new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);      
player_object.set({
 top:player_y,
 left:player_x
});
canvas.add(player_object);
});
}
function new_image (get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);      
block_image_object.set({
 top:player_y,
 left:player_x
});
canvas.add(block_image_object);
});

}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){

    teclapresionada = e.keyCode;
    console.log("La tecla presionada es:"+teclapresionada)

   if(e.shiftKey== true && teclapresionada == "80"){
        console.log("Se presiona p y SHIFT al mismo tiempo");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;

        document.getElementById("current_width").innerHTML =  block_image_width;
        document.getElementById("current_height").innerHTML =  block_image_height;

        
    }
    if(e.shiftKey== true && teclapresionada == "77"){
        console.log("Se presiona m y SHIFT al mismo tiempo");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;

        document.getElementById("current_width").innerHTML =  block_image_width;
        document.getElementById("current_height").innerHTML =  block_image_height;
        
    }

    
    if(teclapresionada == '84'){
        console.log("t");
        new_image("trunk.jpg");

    

    }
    if(teclapresionada == '68'){
        console.log("d");
        new_image("dark_green.png");
    }
    if(teclapresionada == '76'){
    console.log("l");
    new_image("light_green.png");

    }
    if(teclapresionada == '71'){
        console.log("g");
        new_image("ground.png");
    }
    if(teclapresionada == '87'){
         console.log("w");
        new_image("wall.jpg");
        
     }
     if(teclapresionada == '89'){
        console.log("y");
        new_image("yellow_wall.png");
    }
    if(teclapresionada == '85'){
        console.log("u");
        new_image("unique.png");
    }
    if(teclapresionada == '82'){
        console.log("r");
        new_image("roof.jpg");
    }
    if(teclapresionada == '67'){
        console.log("c");
        new_image("cloud.jpg");
    }

    if(teclapresionada == '38'){
        console.log("Ariba");
        arriba();
    }
    if(teclapresionada == '40'){
        console.log("Abajo");
        abajo();
    }
    if(teclapresionada == '37'){
        console.log("izquierda");
        izquierda();
    }
    if(teclapresionada == '39'){
        console.log("Derecha");
        Derecha();

    }
    function arriba(){
        if(player_y >=0){
            player_y=player_y-block_image_height;
            console.log("posicion x =" +player_x +"posicion y= "+player_y );
            canvas.remove(player_object);
            player_update();
        }

        
    }
    function abajo(){
        if(player_y <=600){
            player_y=player_y+block_image_height;
            console.log("posicion x =" +player_x +"posicion y= "+player_y );
            canvas.remove(player_object);
            player_update();
        }

        
    }
    function Derecha(){
        if(player_x <=1000){
            player_x=player_x+block_image_height;
            console.log("posicion x =" +player_x +"posicion y= "+player_y );
            canvas.remove(player_object);
            player_update();
        }

        
    }
    function izquierda(){
        if(player_x >=0){
            player_x=player_x-block_image_height;
            console.log("posicion x =" +player_x +"posicion y= "+player_y );
            canvas.remove(player_object);
            player_update();
        }

        
    }



}
