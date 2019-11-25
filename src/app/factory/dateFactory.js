(function(){
    angular
        .module('app')
        .factory('dateFactory', dateFactory);

    function dateFactory(){
        var dateObj = {};

        dateObj.getDate = function(){
            return (new Date());
        };

        dateObj.getFullYear = function(){
            var date = new Date();
            return (date.getFullYear());
        };

        return dateObj;
    }
})();