/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

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
     var message = 'Latitude: '          + position.coords.latitude          + '<br />' +
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