(function(){
    angular
        .module('app')
        .factory('gamingFactory', gamingFactory);

    function gamingFactory(){
        var gamingObj = {};

        gamingObj.getGaming = function(){
            var gaming = {
                name: 'Nintendo Switch',
                gamingId: 'SW-0809-3953-6196'
            };

            return gaming;
        };

        return gamingObj;
    }
})();