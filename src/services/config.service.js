angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quiz-api-xyzgfjb.us-east-2.elasticbeanstalk.com/';

    return service;
}]);