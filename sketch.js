var database;
var link;
var GetLink
var widthWin;
var count1 = 0;
function setup(){
   database = firebase.database();
   var num = database.ref('/count/count');
          num.on("value",(data)=>{
            count1 = data.val();
             })
   GetLink = new getLink();
}
function draw(){
   GetLink.display();
}
