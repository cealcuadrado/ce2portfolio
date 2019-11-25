(function(){
    angular
        .module('app')
        .factory('gamingFactory', gamingFactory);

    function gamingFactory(){
        var gamingObj = {};

        gamingObj.getGaming = function(){
            var gamings = [
                {
                    id:1,
                    name: 'Nintendo Switch',
                    gameId:'ID'
                }
            ];

            return gamings;
        };

        return gamingObj;
    }
})();