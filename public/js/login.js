// JS function to handle login events

const loginFormHandler = async (event) => {
    console.log("string")
    event.preventDefault();
    console.log("string")
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);