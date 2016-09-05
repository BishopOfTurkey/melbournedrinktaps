Array.prototype.printData = function (arrayLocation) {
  console.log(this[arrayLocation].name + " is located at these coords:\n" + this[arrayLocation].s + " S\n" + this[arrayLocation].e + " E\nIt has a rating of " + this[arrayLocation].rating + "/10!\n" + "It is tap No. " + (arrayLocation + 1));
};
for (var i = 0,x = locations.length;i < x ;i++) {
   locations.printData(i);
};

//b63b3b red
//4764a7 blue
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
          { "color": "#4764a7" },
          { "weight": 1 },
        ]
      },{
        "featureType": "transit.line",
        "elementType": "labels",
        "stylers": [
          { visibility: 'off' },
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
  var image = 'images/icon.png';
  var markers = [];

  function createContextWindows (marker, infowindow, html) {
    google.maps.event.addListener(marker, 'click', function(){
      infowindow.setContent(html);
      infowindow.open(map, marker);
    });
  }
  function finalContext () {
    for (var i = 0; i < locations.length; i++) {
      var contentString = '<div id="content" class="content">' +
      '<div id="siteNotice"></div>' +
      '<h1>' + locations[i].name + '</h1><p>' + locations[i].discription + " " + locations[i].rating + '/10</p><div class="tapImage" ><img src="' + locations[i].image +'" width="250px"></div>' +
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
