const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Fetch form inputs
  const emailInput = document.getElementById('email_id');
  const nameInput = document.getElementById('name');
  const messageInput = document.getElementById('message');

  // Check if any field is empty
  if (!emailInput.value || !nameInput.value || !messageInput.value) {
    alert('All fields are mandatory.');
    // Optionally clear fields after showing the alert
    emailInput.value = '';
    nameInput.value = '';
    messageInput.value = '';
    return;
  }

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_2a4ystt';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      // Clear the form fields after successful submission
      document.getElementById('form').reset();
    })
    .catch((err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
