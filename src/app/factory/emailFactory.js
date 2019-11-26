(function(){
    angular
        .module('app')
        .factory('emailFactory', emailFactory);

    function emailFactory(){
        var emailObj = {};

        emailObj.getEmail = function(){
            var email = 'cealcuadrado@outlook.com';
            return email;
        };

        return emailObj;
    }
})();