Array.prototype.printData = function (arrayLocation) {
  console.log(this[arrayLocation].name + " is located at these coords:\n" + this[arrayLocation].s + " S\n" + this[arrayLocation].e + " E\nIt has a rating of " + this[arrayLocation].rating + "/10!")
};
for (var i = 0,x = locations.length;i < x ;i++) {
    locations.printData(i);
};

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
//b63b3b red
//3b6bb6 blue
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: -37.8116238, lng: 144.9629808},
    styles: [
      {
        "featureType": "water",
        "stylers": [
          { "hue": "#3b6bb6" },
          { "saturation": 60 },
          { "lightness": -20 },
          { "gamma": 1.51 }
        ]
      },{
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ]
  });

  var image = 'Images/icon.png';
  for (var i = 0, x = locations.length;i<x;i++) {
    var markerPosition = {lat: locations[i].s, lng: locations[i].e};

    var contentString = '<div id="content">' +
    '<div id="siteNotice"></div>' + locations[i].name + '</h1>' +
    '<p><b>' + locations[i].name + '</b></p><p>' + locations[i].discription + " " + locations[i].rating + '/10</p><img src="Images/Melbourne.jpg"/>' +
    "</div></div>"

    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });

    var waterMarker = new google.maps.Marker({
          position: markerPosition,
          map: map,
          icon: image,
          title: locations[i].name
    });
    function bindInfoWindow(marker, map, infowindow, html) {
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(html);
        infowindow.open(map, this);
      });
    }
    bindInfoWindow(waterMarker, map, infowindow, contentString);
  }
}
