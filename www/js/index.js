
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		var appDiv = document.getElementById('app');
		//ES6 AKA ES2015 Supports back tick templates for Multi-Line HTML.
		appDiv.innerHTML = '<div ng-controller="AppController"><button ng-click="buttonClicked()">Click me</button><button ng-click="cameraClicked()">Camera</button></div>'
        angular.bootstrap(appDiv, ["App"]);
    },

    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
