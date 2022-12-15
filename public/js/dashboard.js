var coords = [37.69, -94.23]; // the geographic center of our map
var zoomLevel = 4; // the map scale. See: http://wiki.openstreetmap.org/wiki/Zoom_levels




// we need to provide the map with some base map tiles. There are few free options.
// we'll use Stamen Acetate, a muted base map good for overlaying data.
// if you'd like to explore other base maps, see: http://developer.mapquest.com/web/products/open/map
// if you use different tiles, be sure to update the attribution :)


var undermap = new L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png");


var map = L.map('map', {
    center: coords,
    zoom: zoomLevel
}).addLayer(undermap);

var statesLayer = L.geoJSON(null, {
    style: function (feature) {
        var stateName = feature.properties.name;
        console.log(stateName);
        if (visitedStates.includes(stateName)) {
            return { color: "red" };
        } else if (statesToVisit.includes(stateName)) {
            return { color: "blue" };
        } else if (statesLivedIn.includes(stateName)) {
            return { color: "green" };
        }
        return { color: null };
    }
}).bindPopup(function (layer) {
    return layer.feature.properties.name;
}).addTo(map);


var visitedStates = [];
console.log(visitedStates);
var statesToVisit = [];
var statesLivedIn = [];

const livedInElement = document.getElementById('lived-in');
livedInElement.addEventListener('change', (event) => {
    var values = $(event.target).val();
    statesLivedIn = values;
    statesLayer.clearLayers();
    statesLayer.addData(statesData);
});

const visitedElement = document.getElementById('visited');
visitedElement.addEventListener('change', (event) => {
    var values = $(event.target).val();
    visitedStates = values;
    statesLayer.clearLayers();
    statesLayer.addData(statesData);
    console.log();
});

const visitElement = document.getElementById('visit');
visitElement.addEventListener('change', (event) => {
    var values = $(event.target).val();
    statesToVisit = values;
    statesLayer.clearLayers();
    statesLayer.addData(statesData);
});