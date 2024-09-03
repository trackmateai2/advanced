
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
      
   
 if (username=="tempclient52@gmail.com"){
            window.location.href=("resultsAlvaro.html");
   }

 if (username=="thuto2018th@gmail.com"){
            phoneImageLay.style.display=("block");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a21s-.jpg";
    
        mainInfo.innerHTML=(" STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 351236862570533</font><br/>  Model: Galaxy A21s(SM-A217F)<br/>Brand: Samsung<br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=(" Model Info: MOBILE SM-A217F/DS WHITE XSG<br/>Search Term: 351236862570533<br/>IMEI 1: 351236862570533<br/>IMEI 2: 357207732570536<br/>Serial Number: R58R62ZC3YL<br/>Model Desc: Galaxy A21s<br/>Model Name: SM-A217F/DS<br/>Model Number: SM-A217FZWGXSG<br/>Warranty Status: Out of Warranty<br/>Estimated Warranty End Date: 25-06-2023<br/>Production location: Korea SEC<br/>Production Date: 25-06-2021<br/>Country: Botswana<br/>Carrier: Factory Unlocked  ");
        
        mainInfo.style.display=("block");
        moreInfo.style.display=("block");
   }
 if (username=="gmasele15@gmail.com"){
             phoneImageLay.style.display=("block");
            phoneImage.src = "https://imei.net/phone-images/t/gsm-cache/1/A/yhSJaD-d.jpg";
    
        mainInfo.innerHTML=("STATUS: <font color=#00ee00>Found</font><br/>IMEI: <font color=#00ee00> 354158222696823</font><br/>  Model: Spark 20<br/>Brand: TECNO <br/>DeviceType:  Smartphone<br/>  Location: <font color=#ff0000>  Hidden(Payment Required)</font><br/>  Country Code: BW<br/>  Country Name: Botswana ");
        moreInfo.innerHTML=("Operating System	Android 13<br/>Chipset	Mediatek MT6769Z Helio G85<br/>Number of CPU Cores	2<br/>RAM	8 GB<br/>Width	75.59 mm<br/>Height	163.59 mm<br/>Thickness	8.45 mm<br/>Weight	190.0 g<br/> DisplayType	LCD_IPS<br/>Diagonal	6.56 inches<br/>Resolution	720x1612 px<br/>Screen-to-body ratio	84.2 %<br/>Pixel density	267 ppi<br/>Colors	16M<br/>Other display Features	, Display refresh rate: 90 Hz ");
        
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










