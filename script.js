 // Select the WhatsApp button
 const whatsappButton = document.querySelector('.whatsapp-button');

 // Add an event listener for the click event
 whatsappButton.addEventListener('click', function() {
     // Decrease the size of the button
     this.style.transform = 'scale(0.9)'; // Scale down to 90%
     
     // Optional: Reset the size after a short delay
     setTimeout(() => {
         this.style.transform = 'scale(1)'; // Reset to original size
     }, 200); // 200 milliseconds
 });