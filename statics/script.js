

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


// Basic JavaScript (variables, sum, greetingFunc, etc.)
// ... (No changes needed in that part) ...

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
      let valid = true;

      // NAME Validation
      let nameInput = document.getElementById("name");
      let nameError = document.getElementById("nameError");
      if (!nameInput.value.trim()) {
          nameError.textContent = "Name is required.";
          nameError.style.display = "block"; // <-- MAKE VISIBLE
          nameInput.style.border = "1px solid red";
          valid = false;
      } else {
          nameError.textContent = "";
          nameError.style.display = "none";  // <-- HIDE WHEN FIXED
          nameInput.style.border = "";
      }

      // EMAIL Validation
      let emailInput = document.getElementById("email");
      let emailError = document.getElementById("emailError");
      if (!emailInput.value.trim() || !emailInput.checkValidity()) {
          emailError.textContent = "Valid email is required.";
          emailError.style.display = "block"; // <-- MAKE VISIBLE
          emailInput.style.border = "1px solid red";
          valid = false;
      } else {
          emailError.textContent = "";
          emailError.style.display = "none";  // <-- HIDE WHEN FIXED
          emailInput.style.border = "";
      }

      // COMMENTS Validation
      let commentsInput = document.getElementById("comments");
      let commentsError = document.getElementById("commentsError");
      if (!commentsInput.value.trim()) {
          commentsError.textContent = "Comments cannot be empty.";
          commentsError.style.display = "block"; // <-- MAKE VISIBLE
          commentsInput.style.border = "1px solid red";
          valid = false;
      } else {
          commentsError.textContent = "";
          commentsError.style.display = "none";  // <-- HIDE WHEN FIXED
          commentsInput.style.border = "";
      }

      // If any validation check failed, prevent form submission
      if (!valid) {
          event.preventDefault();
      }
  });
});
