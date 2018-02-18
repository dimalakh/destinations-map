import destination from "@turf/turf";

const generateDestinatonsPoint = destinations => destinations.map(point => ({
  type: 'Feature',
  geometry: {
    type: "Point",
    coordinates: point.coordinates
  },
  properties: {
    title: point.cityName,
    icon: "circle"
  }  
}))

export const pointsLayer = data => ({
    "id": "points",
    "type": "symbol",
    "source": {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": generateDestinatonsPoint(data.destinations)
        }
    },
    "layout": {
        "icon-image": "circle-11",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0.6, 0],
        "text-anchor": "left",
        "text-size": 10,
        "icon-allow-overlap": true,
        "icon-ignore-placement": true,
        "symbol-avoid-edges": true,
        "text-allow-overlap": true
    },
    "paint": {
        "text-color": "#fff",
        "text-halo-color": "rgba(0, 0, 0, 0.5)",
        "text-halo-width": 0.1,
        "text-halo-blur": 1
    },
})

export default pointsLayer