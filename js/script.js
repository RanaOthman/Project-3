// Login Form

// 1. Variable Initialization
const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");
const closeBtn = document.getElementById("closeBtn");
const btn2 = document.querySelector(".btn2");
// 2. Function to toggle the login form
function toggleLoginForm() {
  if (loginForm.style.display === "none" || loginForm.style.display === "") {
    loginForm.style.display = "block";
  } else {
    loginForm.style.display = "none";
  }
}
// 3. Event Listener for the login button
loginBtn.addEventListener("click", toggleLoginForm);
// 4. Event Listener for the close button
closeBtn.addEventListener("click", function() {
  loginForm.style.display = "none";
});
btn2.addEventListener("click", function() {
  loginForm.style.display = "none";
});
// /////////////
// modal for customized perfume ,story and recommendation
const modalBtn1 = document.getElementById("customBtn");
const modalBtn2 = document.getElementById("storyBtn");
const modalBtn3 = document.getElementById("recommendationBtn");
const modalForm= document.getElementById("modal");
const colseBtn1= document.querySelector(".btn-ok");
// NOTE:          // function showAlertForm(e) {
          //   alertForm.style.display = "block";
            
          //   if (e.target.id === "customBtn") {
          //     alertForm.innerText = "We’re crafting your signature scent!";
          //   } else if (e.target.id === "storyBtn") {
          //     alertForm.innerText = "Fragrance meets memory — thank you for sharing!";
          //   } else if (e.target.id === "recommendationBtn") {
          //     alertForm.innerText = "Finding the perfect match for you!";
          //   }
          //   setTimeout(() => {
          //     alertForm.style.display = "none";
          //   }, 3000);
          // }
function showModalForm() {
  modalForm.style.display = "block";
  if (this.id === "customBtn") {
    modalForm.querySelector(".modal-body").innerText = "We’re crafting your signature scent!";
  } else if (this.id === "storyBtn") {
    modalForm.querySelector(".modal-body").innerText = "Fragrance meets memory — thank you for sharing!";
  } else if (this.id === "recommendationBtn") {
    modalForm.querySelector(".modal-body").innerText = "Finding the perfect match for you!";
  }
}
modalBtn1.addEventListener("click", showModalForm);
modalBtn2.addEventListener("click", showModalForm);
modalBtn3.addEventListener("click", showModalForm);
colseBtn1.addEventListener("click", function() {
  modalForm.style.display = "none";
});
// /////////////


