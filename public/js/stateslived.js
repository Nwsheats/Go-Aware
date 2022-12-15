// the JS function that takes the userstates input on dashboard, sends them to the database via fetch, and pulls them back out to be appended

const livedInFormHandler = async (event) => {
    event.preventDefault();

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
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }  
        const data = await response.json();
        console.log("data", data);
        const livedData = data.states_lived;
        const visitedData = data.states_visited;
        const toVisitData = data.states_tovisit;
        
        const livedList = $('#lived-list');
        const visitedList = $('#visited-list');
        const tovisitList = $('#tovisit-list');

        livedList.append('<br> <h4>' + livedData + '</h4>');
        visitedList.append('<br> <h4>' + visitedData + '</h4>');
        tovisitList.append('<br> <h4>' + toVisitData + '</h4>');

      stateLived.selectedIndex = 0
      statesVisited.selectedIndex = 0
      visitState.selectedIndex = 0
    }

// enables the search button again 
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

// disables the search button
  document.getElementById("visit-search").disabled = true;

  document
    .querySelector('#visit-search')
    .addEventListener('click', livedInFormHandler);

