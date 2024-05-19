
  function getUserData() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value; // Correct ID
    
    // Retrieve data from LocalStorage
    const retrievedUsername = localStorage.getItem('username');
    const retrievedEmail = localStorage.getItem('password');

    if(retrievedUsername && retrievedEmail) {
      window.location.href = "home.html";

    } else {
      alert ("there is not valid user, try again")
      // show error
    }
    
    console.log("username: ", retrievedUsername );
    console.log("email: ", retrievedEmail );
}

function saveFormData() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value; // Correct ID
    
    // Storing data in LocalStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    
    alert('Data saved in Local Storage');
}

function validateForm() {
    if (document.getElementById("usernameInput").value.length <= 0) {
        alert("Please fill username");
    }
}

// Función para abrir modales
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Función para cerrar modales
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Obtener el modal de About Us
var aboutUsModal = document.getElementById("aboutUsModal");

// Obtener el enlace que abre el modal de About Us
var aboutLink = document.getElementById("about");

// Cuando el usuario hace clic en el enlace de About Us, abre el modal
aboutLink.onclick = function(event) {
  event.preventDefault(); // Evita que el enlace navegue a otra página
  openModal('aboutUsModal');
}

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function(event) {
  if (event.target == loginModal) {
      closeModal('loginModal');
  } else if (event.target == signinModal) {
      closeModal('signinModal');
  } else if (event.target == aboutUsModal) {
      closeModal('aboutUsModal');
  }
}

