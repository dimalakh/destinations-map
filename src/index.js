import './styles.sass'
import mapboxgl from 'mapbox-gl'
import { pointsLayer } from './layerTemplates/pointLayer'
import originLayer from './layerTemplates/originLayer'
import data from './data'

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN || 'pk.eyJ1IjoiZGltYWxha2giLCJhIjoiY2o5dWRqMGNoNzVlOTMzcW15NjZ4am9xaCJ9.ZQ_GMokJ_NajxZKCKj9aDQ'
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/dimalakh/cjdqfvhwd1fmr2snzd0inybkr',
    center: [23.8721529, 49.8326046],
    zoom: 3,
    maxZoom: 3,
    minZoom: 3
})

async function render() {
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