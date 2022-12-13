const livedInFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const stateLived = document.querySelector('#lived-in').value.trim();
    const statesVisited = document.querySelector('#visited').value.trim();
    const visitState = document.querySelector('#visit').value.trim();
    console.log(stateLived, statesVisited, visitState);
  
    // if (stateLived) {
    //   // Send info the to the server
    //   console.log(stateLived, "states");
      const response = await fetch('/api/userstates', {
        method: 'POST',
        body: JSON.stringify({ 
            stateLived,
            statesVisited,
            visitState
             }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        
      }
    }
//   };


  document
    .querySelector('#lived-in')
    .addEventListener('select', livedInFormHandler);
  