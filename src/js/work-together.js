document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];
    const overlay = document.getElementById("overlay");

  span.onclick = function() {
      modal.style.display = "none";
      overlay.style.display = "none";
    }
    
    function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
   overlay.addEventListener("click", function() {
    closeModal();
   });
    
     document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  const maxLength = 52; 
  const commentInput = document.getElementById("comment");

 
  commentInput.addEventListener("input", function() {
    if (commentInput.value.length > maxLength) {
      const trimmedText = commentInput.value.slice(0, maxLength); 
      commentInput.value = trimmedText + "...";
    }
  });
    
    
    
    
  const form = document.getElementById("form-footer");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    
    if (!email.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      showAlert("Please enter a valid email address.");
      return;
      }
      
    
    sendPostRequest(email, comment);
  });
  
  async function sendPostRequest(email, comment) {
    try {
      const data = {
        email: email,
        comment: comment
      };
      
      const jsonData = JSON.stringify(data);
      
      const response = await fetch('https://portfolio-js.b.goit.study/api/request', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: jsonData
      });
      
      if (!response.ok) {
        throw new Error("Server error");
      }
      
        const responseData = await response.json();
        console.log(response);
      showResponseModal(responseData);
      form.reset();
    } catch (error) {
      showAlert("Failed to submit your request. Please try again later.");
    }
  }

    function showResponseModal(responseData) {
      const modalTitle = document.getElementById("modal-title")
        const modalText = document.getElementById("modal-text");
        const overlay = document.getElementById("overlay");
      
    modalTitle.innerHTML = JSON.stringify(responseData.title, null, 2).replace(/^"(.*)"$/, '$1');;
    modalText.innerHTML = JSON.stringify(responseData.message, null, 2).replace(/^"(.*)"$/, '$1');;
        modal.style.display = "block";
        overlay.style.display = "block";
    
  }

  function showAlert(message) {
    alert(message);
  }
  
  const sendButton = document.querySelector(".footer-button");
  sendButton.addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    
    sendPostRequest(email, comment);
  });
});
