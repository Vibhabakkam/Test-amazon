
function register(event){
   event.preventDefault();

   var A_userName = document.getElementById("A_userName").value;
   var A_userEmail = document.getElementById("A_userEmail").value;
   var A_userPassword = document.getElementById("A_userPassword").value;
   
   var A_userData = {userName:A_userName, userEmail:A_userEmail, userPassword:A_userPassword }
   var AlocalData = JSON.parse(localStorage.getItem("A_userData")) || [];
   var flag = false; 
//    alert("hello")
   for(var i = 0; i<AlocalData.length; i++){
    if(AlocalData[i].userEmail === A_userEmail){
        flag = true;
    }
   }
   if(flag){
      alert("email already present")
   }
   else{
       AlocalData.push(A_userData);
       localStorage.setItem( "A_userData",JSON.stringify(AlocalData));
       alert("register sucessfull");
       document.getElementById("A_userName").value = "";
       document.getElementById("A_userEmail").value = "";
       document.getElementById("A_userPassword").value = "";
       window.location.href = "./login.html"
   }

}

function login(event) {
   event.preventDefault();
   var A_userData = JSON.parse(localStorage.getItem("A_userData"));
   var L_userEmail = document.getElementById("L_userEmail").value;
   var L_userPassword = document.getElementById("L_userPassword").value;
   var A_currentUser;
   var flag = false;
   for (var i = 0; i < A_userData.length; i++) {
     if (
      A_userData[i].userEmail === L_userEmail &&
      A_userData[i].userPassword === L_userPassword
     ) {
       flag = true;
       A_currentUser =  A_userData[i];
     }
   }
   if (flag) {
     localStorage.setItem("A_currentUser", JSON.stringify(A_currentUser));
     document.getElementById("L_userEmail").value = "";
     document.getElementById("L_userPassword").value = "";
     alert("login sucessfull");
     window.location.href= "./AmazonHome.html";
   } else {
     alert("enter valid inputs");
   }
 }

 function AddToLs(event){
   event.preventDefault();
    var T_productName = document.getElementById("productName").value;
    var T_productImage = document.getElementById("productImage").value;
    var T_productDiscription = document.getElementById("productDiscription").value;
    var T_productPrice = document.getElementById("productPrice").value;

    var ProductData = {productName: T_productName, productImage:T_productImage, productDiscription:T_productDiscription,  productPrice:T_productPrice};

    var storeProduct = JSON.parse(localStorage.getItem("ProductData")) || [];  

    storeProduct.push(ProductData);
    localStorage.setItem( "ProductData",JSON.stringify(storeProduct));
    alert("product add succesfull")
    document.getElementById("productName").value = "";
    document.getElementById("productImage").value = "";
    document.getElementById("productDiscription").value = "";
    document.getElementById("productPrice").value = "";
} 

 