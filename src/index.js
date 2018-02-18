import './styles.sass'
import firebase from 'firebase'
import mapboxgl from 'mapbox-gl'
import { pointsLayer } from './layerTemplates/pointLayer'
import originLayer from './layerTemplates/originLayer'

firebase.initializeApp({
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DB_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID
})

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/dimalakh/cjdqfvhwd1fmr2snzd0inybkr',
    center: [23.8721529, 49.8326046],
    zoom: 3,
    maxZoom: 3,
    minZoom: 3
})

async function render() {
  const loader = document.querySelector('.loader-wrapper');
  const snapshot = await firebase.database().ref().once('value')
  const data = snapshot.val()
  if (!data) {
    loader.style.display = 'block' 
  } else {
    loader.style.display = 'none'
  }
  const points = pointsLayer(data).source.data.features

  points.forEach((point, index) => {
    const route = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    data.origin.coordinates,
                    point.geometry.coordinates
                ]
            }
        }]
    }
    
    map.addSource(`route${index}`, {
        "type": "geojson",
        "data": route
    });

    map.addLayer({
        "id": `route${index}`,
        "source": `route${index}`,
        "type": "line",
        "paint": {
            "line-width": 2,
            "line-color": "#007cbf"
        }
    });
  })
  map.addLayer(originLayer)
  map.addLayer(pointsLayer(data))
}

map.on('load', () => {
  render()   
})