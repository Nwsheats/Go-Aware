const signupFormHandler = async (event) => {
    console.log('string')
    event.preventDefault();
  
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(firstname, lastname, email, password);

    if (firstname && lastname && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ 
          first_name: firstname, 
          last_name: lastname, 
          email: email, 
          password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {

        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
document.querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
