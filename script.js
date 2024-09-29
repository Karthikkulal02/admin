function validateForm(event) {
  event.preventDefault(); 
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "admin" && password === "password") {
  
    alert("Login successful!");
    window.location.href = "main.html";
  } else {
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Invalid username or password.";
  }
}

function goToAdminPage() {
  window.location.href = "admin.html";
}