function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
};

function onDeviceReady() {
	watchLocation(); 
};

function showAlert(message, title) {
        navigator.notification.alert(
            message,  // message
            0,         // callback
            title,            // title
            'Done'                  // buttonName
        );
    };

function vibratePhone() {
    navigator.notification.vibrate(1000);
};

function watchLocation() {
	navigator.geolocation.watchPosition(onSuccess, onError, {enableHighAccuracy: true});
};

function onSuccess(position) {
     var message = 
     	  'Latitude: ' 			+ position.coords.latitude          + '<br />' +
          'Longitude: '         + position.coords.longitude         + '<br />' +
          'Altitude: '          + position.coords.altitude          + '<br />' +
          'Accuracy: '          + position.coords.accuracy          + '<br />' +
          'Heading: '           + position.coords.heading           + '<br />' +
          'Speed: '             + position.coords.speed             + '<br />' +
          'Timestamp: '         + position.timestamp                + '<br />';
          
	var element = document.getElementById('location');
	element.innerHTML = message;
};

function onError(error) {
     showAlert(error.message, 'Location error');
};