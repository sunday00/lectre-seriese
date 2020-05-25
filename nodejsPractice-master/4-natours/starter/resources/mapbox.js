/* eslint-disable */

export const displayMap = (locations) => {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic3VuZGF5MDAiLCJhIjoiY2s4ZDBrbTg3MDU5ZzNlcm5rN2g3MTQ5NyJ9.lyJ1agFuWD1eicddyB3ejg';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sunday00/ck8d19y7k2hnb1jr0cxxetffh',
      scrollZoom: false
    });

    var bounds = new mapboxgl.LngLatBounds();

    locations.forEach(loc => {
      var marker = document.createElement('div');
      marker.className = 'marker';

      new mapboxgl.Marker({
        element: marker,
        anchor: 'bottom'
      }).setLngLat(loc.coordinates).addTo(map);

      new mapboxgl.Popup({
        offset: 30
      }).setLngLat(loc.coordinates)
        .addTo(map)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`);

      bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
      }
    });

};