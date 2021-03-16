var mymap = L.map('mapid').setView([44.9494292, -93.100891], 8);
L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=MokWdnxan32TTgBNRWWI', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 20,
    minZoom: 7,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var bounds = ([
    [43.31837608, -89.22002838],
    [50.13208453, -100.43287819]
]);
mymap.setMaxBounds(bounds);
mymap.on('drag', function() {
    mymap.panInsideBounds(bounds, { animate: false });
});


var markerClusters = L.markerClusterGroup();
for (var i = 0; i < geojsonFeature.length - 1; ++i) {

    var popup = "Lake ID: " + geojsonFeature[i].properties.lakeID + "<br>" +
        "Name: " + geojsonFeature[i].properties.name + "<br>" +
        "County: " + geojsonFeature[i].properties.county + "<br>" +
        "<button onClick=window.open('https://www.dnr.state.mn.us/lakefind/showreport.html?downum=" +
        geojsonFeature[i].properties.lakeID + "')>Survay</button>";

    var lat = parseFloat(geojsonFeature[i].geometry.coordinates[0]);
    var lon = parseFloat(geojsonFeature[i].geometry.coordinates[1]);
    var m = L.marker([lon, lat]).bindPopup(popup);
    markerClusters.addLayer(m);
}
mymap.addLayer(markerClusters);