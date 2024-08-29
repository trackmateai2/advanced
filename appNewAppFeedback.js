
function feedBack(){

             
    
    var username= document.getElementById("email").value;
    
    var myLoginLay = document.getElementById("LoginLay");
    var myMainLay = document.getElementById("MainLay");
    var myInfoLay = document.getElementById("InfoLay");

            myMainLay.style.display=("none");
            myLoginLay.style.display=("none");
            myInfoLay.style.display=("block");
    
    var mainInfo = document.getElementById("mainInfo");
    var moreInfo = document.getElementById("moreInfo");

    
                phoneImageLay= document.getElementById("imageLay")
                phoneImage= document.getElementById("phoneImage")
      
   

 if (username=="rogermphafe@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a13.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 351073568491486</font><br/>  Model: Galaxy A13 5G(SM-A137F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana  ");
        moreInfo.innerHTML=("  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }

 
 if (username=="facethebushman@yahoo.com"){
            window.location.href=("resultsGabriel3551.html");
   }
  
    
 if (username=="flockie2002@gmail.com"){
          window.location.href=("resultsFlockie35749.html");
   }
  

}










