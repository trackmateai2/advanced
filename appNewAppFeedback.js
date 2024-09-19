
function feedBack(){

             
        var username= document.getElementById("email").value;
        var myLoginLay = document.getElementById("LoginLay");
        var myMainLay = document.getElementById("MainLay");
        var myInfoLay = document.getElementById("InfoLay");
            myMainLay.style.display=("none");
            myLoginLay.style.display=("none");
            myInfoLay.style.display=("block");
               var imei = document.getElementById("imeiCont");
               var model = document.getElementById("modelCont");
                   phoneImageLay= document.getElementById("imageLay");
                   phoneImage= document.getElementById("phoneImage");
      
   
 if (username=="ogaatlale@gmail.com"){
            phoneImageLay.style.display=("block");
            document.getElementById("unlockBtn").innerHTML = "UnLock Full Intel(P250)";
            
            imei.innerHTML=("353102450743569");
            model.innerHTML=("Tecno Spark 10");
            phoneImage.src = "data:image/jpeg;base64,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";
   }
 if (username=="ebbie@temp.com"){
            window.location.href=("resultsEbbie.html");
   }
  if (username=="karabotumi@gmail.com"){
            phoneImageLay.style.display=("block");
            document.getElementById("unlockBtn").innerHTML = "UnLock Full Intel(P250)";
            
            imei.innerHTML=("861453053224159");
            model.innerHTML=("Huawei Y6 Prime 2019");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/huawei-y6-2019-.jpg";
   }
  
  if (username=="mosigeponego@gmail.com"){
            phoneImageLay.style.display=("block");
            document.getElementById("unlockBtn").innerHTML = "UnLock Full Intel(P250)";
            
            imei.innerHTML=("868008051940363");
            model.innerHTML=("Oppo Reno7 Z 5G");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7-z-5g.jpg";
   }
  if (username=="pearlkenosi4@gmail.com"){
            phoneImageLay.style.display=("block");
            document.getElementById("unlockBtn").innerHTML = "UnLock Full Intel(P250)";
            
            imei.innerHTML=("354860824738008");
            model.innerHTML=("SAMSUNG Galaxy A03(SM-A035F)");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a03.jpg";
   }
  if (username=="kidyok09@gmail.com"){
            window.location.href=("resultsKidyo.html");
  }
if (username=="lecoaube@gmail.com"){
            phoneImageLay.style.display=("block");
            document.getElementById("unlockBtn").innerHTML = "UnLock Full Intel(P250)";
            
            imei.innerHTML=("350644373320416");
            model.innerHTML=("TECNO Spark 7");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-7.jpg";
  }

  
  if (username=="thuto2018th@gmail.com"){
            window.location.href=("resultsThuto35415.html");
   }
if (username=="nkuramosweu@gmail.com"){
            phoneImageLay.style.display=("block");
            document.getElementById("unlockBtn").innerHTML = "UnLock Full Intel(P250)";
            
            imei.innerHTML=("356545108161419");
            model.innerHTML=("APPLE iPhone 11(A2111)");
            phoneImage.src = "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg";
    
        
   }
 
 if (username=="obuisanyang@gmail.com"){
           window.location.href=("resultsThabololo.html");   
   }
 
 
 
 
 
 if (username=="certified@tempmail.com"){
            window.location.href=("resultsCertified.html");
        
   }
if (username=="selokotinabo@gmail.com"){
            window.location.href=("resultsTinabo.html");
   }

  if (username=="pikatievidence@gmail.com"){
            window.location.href=("resultsEvidence.html");
   }

 if (username=="76984847@temp.com"){
            window.location.href=("results76984.html");
   }
  
 if (username=="kopanotill@yahoo.com"){
            window.location.href=("resultsKopanotill.html");
   }
if (username=="74331061@temp.com"){
            window.location.href=("results74331.html");
   }
  if (username=="kizzysekai@temp.com"){
            window.location.href=("resultsKopanotill.html");
   }
   if (username=="shaunmosige0@gmail.com"){
            window.location.href=("resultsShaun2.html");
   }
   if (username=="72988464@tempmail.com"){
            window.location.href=("results729884.html");
   }
   if (username=="kellzjnr@live.com"){
            window.location.href=("resultsKellz.html");
   }
 if (username=="tempclient52@gmail.com"){
            window.location.href=("resultsAlvaro.html");
   }
if (username=="facethebushman@yahoo.com"){
            window.location.href=("resultsGabriel3551.html");
   }
  
    
 if (username=="flockie2002@gmail.com"){
          window.location.href=("resultsFlockie35749.html");
   }
   
   
   
 
}










