// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Perform form validation here
  
    // Send form data to the server
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Example: Log form data to the console
    console.log(data);
  
    // Clear form fields
    form.reset();
  
    // Show success message or redirect to a thank-you page
    // Replace the following alert with your desired action
    alert('Thank you! Your message has been submitted.');
  });