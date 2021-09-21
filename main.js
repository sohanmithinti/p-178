let latitude = 22.7868542,
longitude = 88.3643296;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 16,
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionsOpitions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

map.addController(
    new MapBoxDirection({
        accessToken: mapbox1.mapboxgl.accessToken
    }),
    "top-left"
)