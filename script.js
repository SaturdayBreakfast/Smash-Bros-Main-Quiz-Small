$("#Maybe").click(function(){
    
    
    var groundAirInput = $(".groundAir").val();
    var lightHeavyInput = $(".lightHeavy").val();
    
    
    
     if (groundAirInput==="ground" && lightHeavyInput >0 && lightHeavyInput <70) {
    $("#answer").html("Someone like Pikachu or Pichu, who is pretty light, but is good on the ground. They can also be good in the air, if you get a grab on your opponent. <img src=\"https://d1lss44hh2trtw.cloudfront.net/assets/article/2018/11/11/super-smash-bros-ultimate-pikachu-2_feature.jpg\">"); }
    
    if (groundAirInput==="ground" && lightHeavyInput >= 70) {
    $("#answer").html("Someone like Donkey Kong or Ganondorf, who are better at close up battles, or King K. Rool, who can play both close AND far. Although being heavier means they're harder to knock off the stage, it also means it can can be hard to get back to the stage when you ARE off.<img src=\"https://www.geek.com/wp-content/uploads/2018/11/king-k-rool-smash-ultimate-625x352.png\">"); }
    
     

});
    