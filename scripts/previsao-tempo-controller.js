angular.module('aplicacao').controller('PrevisaoTempoController', function ($scope, $resource) {
    var weatherChannel = $resource('https://api.openweathermap.org/data/2.5/weather?id=3445831&units=metric&APPID=cb736063c590f2abe550a94e94645939');
    var getWeather = function () {
        weatherChannel.get().$promise.then(function (response) {
            $scope.tempo = response;
            console.log(response);
        }, function () {
            alert("Erro ao requisitar o clima!");
        })
    }
    getWeather();
})