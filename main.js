 // 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
// (function () {

// 'use strict';

// Your Code Goes Here


var newList = document.querySelector('.customers');

function callAPI() {
  "use strict";
  fetch("https://randomuser.me/api/?results=12")
.then(function(results) {name
  return results.json();
})
.then(function(data) {
    let customer=data.results;
    console.log (customer)
               
    for (var i=0; i< customer.length; i++){
      
           populate(customer[i]);

 }
})
};

   callAPI()
   function populate(data){
    function createPopulate(){
      var faceBook = document.createElement('div');
      faceBook.classList.add("faceBook");
      newList.appendChild(faceBook);

      var pic = document.createElement("img");
      pic.src = data.picture.large;
      pic.classList.add("pic");
      faceBook.appendChild(pic);

      var fullName = document.createElement("h2");
      fullName.classList.add("fullName");
      fullName.textContent = data.name.first + " " + data.name.last;
      faceBook.appendChild(fullName)

      var greenBorder = document.createElement("h2");
      greenBorder.classList.add("secondName");
      greenBorder.textContent = data.name.first + " " + data.name.last;
      faceBook.appendChild(greenBorder);

      var email = document.createElement("h4");
      email.classList.add("email");
      email.textContent = data.email;
      faceBook.appendChild(email);

      var streetAddress = document.createElement("p");
      streetAddress.classList.add("streetAddress");
      streetAddress.textContent = data.location.street;
      faceBook.appendChild(streetAddress);

      var cityAndState = document.createElement("p");
      cityAndState.classList.add("cityAndState");
      cityAndState.textContent = data.location.city + ", "+data.location.state +
      data.location.postcode;
      faceBook.appendChild(cityAndState);

      var phoneNum = document.createElement("p");
      phoneNum.classList.add("phoneNumber");
      phoneNum.textContent = data.phone;
      faceBook.appendChild(phoneNum);
}
createPopulate();
}

      
 




 

  