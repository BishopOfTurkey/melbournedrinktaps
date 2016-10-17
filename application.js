//b63b3b red
//4764a7 blue
var image = 'Images/icon.png';
var markers = [];
var map;
var mapClick,openMarker,clickedMarker;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
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
    ],
    mapTypeControl: false,
    streetViewControl: false
  });
  var image = 'images/icon.png';
  var markers = [];
  function createMarkers (name, description, rating, img, timeout, position) {
    window.setTimeout(function() {
      markers.push(new google.maps.Marker({
        position: position,
        map: map,
        icon: image,
        title: name,
        animation: google.maps.Animation.DROP
      }));
      var currentMarker = markers[markers.length-1];
      currentMarker.addListener('click', function() {
        if (openMarker !== currentMarker) {
          openTapInfo(name, description, rating, img, currentMarker);
        } else {
          closeTapInfo();
        }
      });
    }, timeout);
  }
  function drop() {
    for (var i = 0; i < locations.length; i++) {
      var position = {lat: locations[i].s, lng: locations[i].e};
      createMarkers(locations[i].name,locations[i].description, locations[i].rating, locations[i].image, i * 25,position);
    }
  }
  google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
      drop();
	});
}
function openTapInfo(title, description, rating, img, marker) {
  removeListeners();
  openMarker = marker;
  $('.drinkTapInfo').find('h1').text(title);
  $('.drinkTapInfo').find('h2').text(rating);
  $('.drinkTapInfo').find('p').text(description);
  $('.drinkTapInfo').find('img').attr('src',img);
  $('.drinkTapInfo').animate({
    opacity: "1",
    left: "0"
  });
  mapClick = google.maps.event.addListenerOnce(map, 'click', function(){
    closeTapInfo();
  });
  map.panTo(marker.getPosition());
}
$('#closeTap').click(function(){
  closeTapInfo();
})
function closeTapInfo() {
  $('.drinkTapInfo').animate({
    opacity: "0",
    left: "-31%"
  });
  openMarker = null;
}
function removeListeners() {
  if (mapClick) {
    mapClick.remove();
  }
}
