if (window.location.pathname.includes("fun.html")) {
  // Only define or call getAdvice here if needed
}

if (window.location.pathname.includes("contact.html")) {
  // Any map-related scripts, if needed
}

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

// Add Year to Footer
function addYear() {
  let currentYear = new Date().getFullYear();
  document.getElementById("copyYear").textContent = `${currentYear}`;
}

// Greeting
function greetingFunc() {
  let d = new Date();
  let h = d.getHours();
  let greeting = "";

  if (h >= 5 && h < 12) greeting = "Good morning";
  else if (h >= 12 && h < 18) greeting = "Good afternoon";
  else if (h >= 18 && h < 22) greeting = "Good evening";
  else greeting = "Good night";

  console.log(greeting);

  let E = document.getElementById("greetingH2");
  if (E) E.innerHTML = `${greeting}! My name is Michelle Guo`;
}

// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }

  // Highlight active page in nav
  const currentPath = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href").includes(currentPath)) {
      link.classList.add("active");
    }
  });

  // Greeting only on index
  if (window.location.href.includes("index.html") || window.location.pathname === "/") {
    greetingFunc();
  }

  // Read More / Read Less
  const readMoreBtn = document.getElementById("readMoreBtn");
  const readLessBtn = document.getElementById("readLessBtn");
  const shortBio = document.getElementById("shortBio");
  const fullBio = document.getElementById("fullBio");

  if (readMoreBtn && readLessBtn && shortBio && fullBio) {
    readMoreBtn.addEventListener("click", function () {
      shortBio.style.display = "none";
      fullBio.style.display = "block";
    });

    readLessBtn.addEventListener("click", function () {
      fullBio.style.display = "none";
      shortBio.style.display = "block";
    });
  }
});
