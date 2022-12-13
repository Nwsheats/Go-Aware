const toVisitFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const stateLived = document.querySelector('#lived-in').value.trim();
    const statesVisited = document.querySelector('#visited').value.trim();
    const visitState = document.querySelector('#visit').value.trim();
    console.log(stateLived, statesVisited, visitState, "visit");
  
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
        // insert Leaflet function
      }
    }
//   };


  document
    .querySelector('#visit')
    .addEventListener('change', livedInFormHandler);
  