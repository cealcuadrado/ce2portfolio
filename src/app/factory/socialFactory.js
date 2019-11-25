(function(){
    angular
        .module('app')
        .factory('socialFactory', socialFactory);

    function socialFactory(){
        var socialObj = {};

        socialObj.getSocial = function(){
            var socials = [
                {
                    id:1,
                    name:'Twitter',
                    icon:'fa-twitter'
                }
            ];

            return socials;
        };

        return socialObj;
    }
})();