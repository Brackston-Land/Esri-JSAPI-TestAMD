
var loc = location.pathname.replace(/\/[^/]+$/, '');
require({
packages: [
    { name: "modules", location: loc + "/modules"}
]
},["esri/Map", "esri/views/MapView","modules/module1"], (Map, MapView, module1) => {
    const map = new Map({
      basemap: "topo-vector"
    });

    const view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 4,
      center: [15, 65] // longitude, latitude
    });


            
    var add_module = module1.add(5, 5)
    var subtract_module = module1.subtract(5, 5)




    alert(add_module)
    alert(subtract_module)
 
    
  });

