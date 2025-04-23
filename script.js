const map = new maplibregl.Map({
    container:"map",
    style:"https://api.baato.io/api/v1/styles/breeze?key=bpk.uWPbkYCjaY8gjZKKEfRso662pxB4VbIuTHa0eH2ODkZW",
    zoom:6,
    center:[84.1240,28.3949]
})
const mapData=
    {
        "type": "FeatureCollection",
        "name": "ForestFire_Nepal",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Date": "04/07/2025",
              "Province": "Sudurpashchim",
              "District": "Kanchanpur",
              "Ga.Pa/Na.Pa.": "Shuklaphanta National Park",
              "Ward": "99",
              "Protected Area": "Shuklaphanta National Park",
              "Confidence": 25,
              "Lat": 28.89636,
              "Lon": 80.29068
            },
            "geometry": { "type": "Point", "coordinates": [80.29068, 28.89636] }
          },
          {
            "type": "Feature",
            "properties": {
              "Date": "04/07/2025",
              "Province": "Sudurpashchim",
              "District": "Kanchanpur",
              "Ga.Pa/Na.Pa.": "Shuklaphanta National Park",
              "Ward": "99",
              "Protected Area": "Shuklaphanta National Park",
              "Confidence": 49,
              "Lat": 28.88651,
              "Lon": 80.28373
            },
            "geometry": { "type": "Point", "coordinates": [80.28373, 28.88651] }
          },
          {
            "type": "Feature",
            "properties": {
              "Date": "04/07/2025",
              "Province": "Lumbini",
              "District": "Dang",
              "Ga.Pa/Na.Pa.": "Rajpur",
              "Ward": "1",
              "Protected Area": "",
              "Confidence": 64,
              "Lat": 27.70447,
              "Lon": 82.45616
            },
            "geometry": { "type": "Point", "coordinates": [82.45616, 27.70447] }
          },
          {
            "type": "Feature",
            "properties": {
              "Date": "04/08/2025",
              "Province": "Madhesh",
              "District": "Saptari",
              "Ga.Pa/Na.Pa.": "Koshi Tappu",
              "Ward": "99",
              "Protected Area": "Koshi Tappu Wildlife Reserve",
              "Confidence": 60,
              "Lat": 26.68315,
              "Lon": 86.9978
            },
            "geometry": { "type": "Point", "coordinates": [86.9978, 26.68315] }
          },
          {
            "type": "Feature",
            "properties": {
              "Date": "04/08/2025",
              "Province": "Koshi",
              "District": "Morang",
              "Ga.Pa/Na.Pa.": "Letang",
              "Ward": "7",
              "Protected Area": "",
              "Confidence": 76,
              "Lat": 26.82812,
              "Lon": 87.54578
            },
            "geometry": { "type": "Point", "coordinates": [87.54578, 26.82812] }
          },
          {
            "type": "Feature",
            "properties": {
              "Date": "04/08/2025",
              "Province": "Bagmati",
              "District": "Sindhuli",
              "Ga.Pa/Na.Pa.": "Dudhouli",
              "Ward": "7",
              "Protected Area": "",
              "Confidence": 46,
              "Lat": 26.98519,
              "Lon": 86.33772
            },
            "geometry": { "type": "Point", "coordinates": [86.33772, 26.98519] }
          },
          {
            "type": "Feature",
            "properties": {
              "Date": "04/08/2025",
              "Province": "Madhesh",
              "District": "Rautahat",
              "Ga.Pa/Na.Pa.": "Chandrapur",
              "Ward": "6",
              "Protected Area": "",
              "Confidence": 79,
              "Lat": 27.11165,
              "Lon": 85.30246
            },
            "geometry": { "type": "Point", "coordinates": [85.30246, 27.11165] }
          },
          {
            "type": "Feature",
            "properties": {
              "Date": "04/08/2025",
              "Province": "Madhesh",
              "District": "Rautahat",
              "Ga.Pa/Na.Pa.": "Chandrapur",
              "Ward": "4",
              "Protected Area": "",
              "Confidence": 67,
              "Lat": 27.13607,
              "Lon": 85.34013
            },
            "geometry": { "type": "Point", "coordinates": [85.34013, 27.13607] }
          },
          {
            "type": "Feature",
            "properties": {
              "Date": "04/08/2025",
              "Province": "Madhesh",
              "District": "Rautahat",
              "Ga.Pa/Na.Pa.": "Chandrapur",
              "Ward": "3",
              "Protected Area": "",
              "Confidence": 79,
              "Lat": 27.1434,
              "Lon": 85.32805
            },
            "geometry": { "type": "Point", "coordinates": [85.32805, 27.1434] }
          },
          {
            "type": "Feature",
            "properties": {
              "Date": "04/08/2025",
              "Province": "Bagmati",
              "District": "Sindhuli",
              "Ga.Pa/Na.Pa.": "Kamalamai",
              "Ward": "1",
              "Protected Area": "",
              "Confidence": 27,
              "Lat": 27.22798,
              "Lon": 85.81395
            },
            "geometry": { "type": "Point", "coordinates": [85.81395, 27.22798] }
          }

        ]
      }
      

console.log("Initial")
map.once("load",()=>{
    map.addSource("forestfire",{
        type:"geojson",
        data:mapData

        }
    );

    map.addLayer({
        id:"forestfire-layer",
        type:"circle",
        source:"forestfire",
        paint:{
            'circle-color':{property: 'Confidence', 
                stops: [
                    [0, 'white'], 
                    [50, 'yellow'], 
                    [70, 'red'] 
                ]},
            'circle-radius':{
                property:'Confidence',
                stops: [
                    [0, 2],
                    [50, 7], 
                    [70, 10] 
                ]
            }
        }
    })
    console.log("loaded")
})
