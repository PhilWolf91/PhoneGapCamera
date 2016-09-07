'use strict';
angular
    .module("App", [])
    .controller("AppController", AppController);

function AppController($scope){
	var fileUri = "";
	var base64 = "";
    console.log("App Controller");

    $scope.buttonClicked = function(){
        console.log("LOGGING WORKS");
    }

    $scope.cameraClicked = function(){
        if(navigator.camera){
            var cameraOptions = {
                sourceType: Camera.PictureSourceType.CAMERA,
                destinationType: Camera.DestinationType.FILE_URI,
                quality: 50,
                encodingType: 1
            }
            navigator.camera.getPicture(cameraSuccess, cameraFail, cameraOptions)
        }
    }

    function cameraSuccess(data){
        fileUri = data;
		console.log(data);
		getBase64OfFileUri(fileUri);
    }
    function cameraFail(message){
        console.log(message);
    }

	
	function getBase64OfFileUri(fileUri){
		//YOU DON'T NEED ANY EXTRA LIBRARIES FOR THIS. I PROMISE.
		window.resolveLocalFileSystemURL(fileUri, resolveLocalFileSystemSuccess, resolveLocalFileSystemFailure);
	}
	
	function resolveLocalFileSystemSuccess(fileEntry){
		console.log(fileEntry);
		fileEntry.file(function(file){
			console.log(file);
			handleFileBuffer(file);
		});
	}
	
	function resolveLocalFileSystemFailure(data){
		console.log(data);
	}
	
	function handleFileBuffer (fileBuffer){
		var reader = new FileReader();
		
		reader.onloadend = function(eventData){
			var result = eventData.target.result
			result = result.replace("data:image/png;base64,", "");
			base64 = result;
		}
		
		reader.readAsDataURL(fileBuffer);
	}
	
}    
