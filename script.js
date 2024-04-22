// Function to open the modal
function openModal() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "none";
  }
  
  // Close the modal if the user clicks outside of it
  window.onclick = function(event) {
    var modal = document.getElementById("loginModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  function getUserData() {
    validateForm();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    // Storing data in LocalStorage
    const retrievedUsername = localStorage.getItem('username', username);
    const retrieveEmail = localStorage.getItem('email', email);
    
    console.log("username: ", retrievedUsername )
    console.log("email: ", retrieveEmail )

  }


  function saveFormData() {
    validateForm();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    // Storing data in LocalStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    
    alert('Data saved in Local Storage');
  }

  function validateForm() {
    if(document.getElementById("usernameInput").value.length <= 0) {
      alert("please fill username")
    }
  }