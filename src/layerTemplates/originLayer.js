const layer = {
    "id": "origins",
    "type": "symbol",
    "source": {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": 'Feature',
                "geometry": {
                  "type": "Point",
                  "coordinates": [23.9296019, 49.829493]
                },
                "properties": {
                  "title": "Lviv",
                  "icon": "circle"
                }  
              }]
        }
    },
    "layout": {
        "icon-image": "circle-stroked-11",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top",
        "text-size": 14,
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
}

export default layer