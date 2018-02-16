import './styles.sass'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGltYWxha2giLCJhIjoiY2o5dWRqMGNoNzVlOTMzcW15NjZ4am9xaCJ9.ZQ_GMokJ_NajxZKCKj9aDQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-96, 37.8],
    zoom: 3
});