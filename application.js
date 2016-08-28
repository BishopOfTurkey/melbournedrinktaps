Array.prototype.printData = function (arrayLocation) {
  console.log(this[arrayLocation].name + " is located at these coords:\n" + this[arrayLocation].s + " S\n" + this[arrayLocation].e + " E\nIt has a rating of " + this[arrayLocation].rating + "/10!")
};
for (var i = 0,x = locations.length;i < x ;i++) {
   locations.printData(i);
};

//b63b3b red
//3b6bb6 blue
var image = 'Images/icon.png';
var markers = [];
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
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
  var markers = [];

  function createContextWindows (marker, infowindow, html) {
    google.maps.event.addListener(marker, 'click', function(){
      infowindow.setContent(html);
      infowindow.open(map, marker);
    });
  }
  function finalContext () {
    for (var i = 0; i < locations.length; i++) {
      var contentString = '<div id="content">' +
      '<div id="siteNotice"></div>' + locations[i].name + '</h1>' +
      '<p><b>' + locations[i].name + '</b></p><p>' + locations[i].discription + " " + locations[i].rating + '/10</p><img src="' + locations[i].image +'"/>' +
      "</div></div>";
      var infowindow = new google.maps.InfoWindow({
      content: contentString
      });
      createContextWindows(markers[i], infowindow, contentString);
    }
  }
  function createMarkers (name, timeout,position) {
    window.setTimeout(function() {
      markers.push(new google.maps.Marker({
        position: position,
        map: map,
        icon: image,
        title: name,
        animation: google.maps.Animation.DROP
      }));
    }, timeout);
  }
  function drop() {
    for (var i = 0; i < locations.length; i++) {
      var position = {lat: locations[i].s, lng: locations[i].e};
      createMarkers(locations[i].name, i * 50,position);
    }
  }
  var timeToLoad = (locations.length * 50) + 100;
  google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
      drop();
      setTimeout(function () {
        finalContext();
      }, timeToLoad );
	});

}
