angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resouce) {
	var WeatherChannel = $resouce('http://api.openweathermap.org/data/2.5/weather?q=SaoPaulo,BR&units=metric');
	
	var getWether = function() {
		WeatherChannel.get().$promise.them(function(response) {
			$scope.tempo = response;
			console.log(response);
		}, function(promise) {}
			alert("Erro ao requisitar Recurso!");
		})
	}

	getWeather();
});