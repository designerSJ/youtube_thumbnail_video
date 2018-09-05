$(document).ready(function(){

    $('#action').click(function(){
     var video_URL = $("#videoURL").val();
     
      if(!$("#videoURL").val()){
        alert('Please Enter Video URL');
      } 

      else {

      $(".images").removeClass("display-none");

      if(video_URL.indexOf('youtube.com') !== -1){
        
      if(video_URL.indexOf('?t=') !== -1){
        var video_ID = video_URL.split("/");
        var ID_mid = video_ID[3].split("?t=");       
        var ID = ID_mid[0];
      }
      
      else if (video_URL.indexOf('?v=') !== -1){
              var video_ID = video_URL.split("/");
              var ID_mid = video_ID[3].split("?v="); 
              var ID_last = ID_mid[1].split("&t=");
              var ID = ID_last[0];
              }
      
      else{
        var video_ID = video_URL.split("=");
        var ID = video_ID[1];
      }
      
    
    }
     
    if(video_URL.indexOf('youtu.be') !== -1){
        
      if(video_URL.indexOf('?t=') !== -1){
        var video_ID = video_URL.split("/");
        var ID_mid = video_ID[3].split("?t=");       
        var ID = ID_mid[0];
      } else {
        var video_ID = video_URL.split("/");
        var ID = video_ID[3];  
      }
    
    }
     
     var base = "http://img.youtube.com/vi/" + ID + "/";

     var medium = base + "mqdefault.jpg";
     var standard = base + "hqdefault.jpg";
     var high = base + "sddefault.jpg";
     var max = base + "maxresdefault.jpg";

     $('#btn-med').attr("href", medium);
     $('#btn-standard').attr("href", standard);
     $('#btn-high').attr("href", high);
     $('#btn-max').attr("href", max);

     $('#display-url-medium').attr("src", medium);
     $('#display-url-standard').attr("src", standard);
     $('#display-url-high').attr("src", high);
     $('#display-url-max').attr("src", max);

    }
    
   });
  
});
