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
  