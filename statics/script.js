

let x = 5;
let y = 7;

let z = x + y;

console.log(z);

let A = "Hello ";
let B = "world!";

let C = A + B;

console.log(C);

function SumNPrint(x1,x2) {
    let x3 = x1+x2;
    console.log(x3);
}

SumNPrint(x,y);

SumNPrint(A,B);

if (C.length > z) {
    console.log(C); 
  } else if (C.length < z) {
    console.log(z);           
  } else {
    console.log("good job!");
  }
  
let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "Banana") {
        alert(`found the Banana in ${i}!`);
      }
    }
  }

// findTheBanana(L1);
// findTheBanana(L2);

function findTheBananaForEach(arrays) {
    arrays.forEach((singleArray, arrayIndex) => {
      for (let i = 0; i < singleArray.length; i++) {
        if (singleArray[i] === "Banana") {
          if (arrayIndex === 0) {
            alert("We found a banana in the first array!");
          } else if (arrayIndex === 1) {
            alert("We found a banana in the second array!");
          } else {
            alert(`We found a banana in array #${arrayIndex + 1}!`);
          }

        }
      }
    });
  }

// findTheBananaForEach([L1,L2]);

function greetingFunc() {
  let d = new Date();
  let h = d.getHours();

  let greeting = "";

  if (h >= 5 && h < 12) {
      greeting = "Good morning";
  } else if (h >= 12 && h < 18) {
      greeting = "Good afternoon";
  } else if (h >= 18 && h < 22) { 
      greeting = "Good evening";
  } else {
      greeting = "Good night";
  }

  console.log(greeting); 

  let E = document.getElementById("greetingH2");
  if (E) {
      E.innerHTML = `${greeting}! My name is Michelle Guo`;
  }
}

if (window.location.href.indexOf("index.html") > -1 || window.location.href.endsWith('/')) {
  greetingFunc();
}

function addYear() {
  let currentYear = new Date().getFullYear();
  document.getElementById("copyYear").textContent = `© ${currentYear}`;
}

function showList() {
    document.getElementById("funList").style.display = "block";
    document.getElementById("showListBtn").style.display = "none";
}

$(document).ready(function() {
  $("#readMoreBtn").click(function() {
      $("#shortBio").hide();
      $("#fullBio").show();
  });

  $("#readLessBtn").click(function() {
      $("#fullBio").hide();
      $("#shortBio").show();
  });
});

function validateForm() {
  var nameField = document.getElementById("name");
  var emailField = document.getElementById("email");
  var commentField = document.getElementById("comments");
  var validationMessage = document.getElementById("validationMessage");
  var formMessage = document.getElementById("formMessage");

  if (!nameField.checkValidity()) {
      formMessage.innerHTML = "Invalid Name";
  }
  else if (!emailField.checkValidity()) {
      formMessage.innerHTML = "Invalid Email";
  }
  else if (!commentField.checkValidity()) {
      formMessage.innerHTML = "Please Comment";
  }
  else {
      validationMessage.innerHTML = "";
  }
}