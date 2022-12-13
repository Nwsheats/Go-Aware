const livedInFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const stateLived = document.querySelector('#lived-in')
    const statesVisited = document.querySelector('#visited')
    const visitState = document.querySelector('#visit')
    console.log(stateLived.value.trim(), statesVisited.value.trim(), visitState.value.trim(), "lived");

    

    const response = await fetch('/api/userstates', {
        method: 'POST',
        body: JSON.stringify({ 
            stateLived: stateLived.value.trim(),
            statesVisited: statesVisited.value.trim(),
            visitState: visitState.value.trim()
             }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // insert Leaflet function
      }

      stateLived.selectedIndex = 0
      statesVisited.selectedIndex = 0
      visitState.selectedIndex = 0
    }
//   };

document
    .querySelector('.info')
    .addEventListener('change', function() {
      const stateLived = document.querySelector('#lived-in').value.trim();
      const statesVisited = document.querySelector('#visited').value.trim();
      const visitState = document.querySelector('#visit').value.trim();
      if (stateLived !== "" || statesVisited !== "" || visitState !== "") {
        document.getElementById("visit-search").disabled = false;
      }
    });


  document.getElementById("visit-search").disabled = true;

  document
    .querySelector('#visit-search')
    .addEventListener('click', livedInFormHandler);

