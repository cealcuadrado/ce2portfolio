(function(){
    angular
        .module('app')
        .factory('socialFactory', socialFactory);

    function socialFactory(){
        var socialObj = {};

        socialObj.getSocial = function(){
            var socials = [
                {
                    title: 'Twitter', 
                    url: 'https://twitter.com/CeAlCuadrado_', 
                    icon:'fa-twitter'
                },
                {
                    title: 'YouTube', 
                    url: 'https://www.youtube.com/c/CeAlCuadrado', 
                    icon: 'fa-youtube'
                },
                {
                    title: 'SoundCloud', 
                    url: 'https://soundcloud.com/cealcuadrado', 
                    icon: 'fa-soundcloud'
                },
                {
                    title: 'GitHub', 
                    url:'https://github.com/cealcuadrado', 
                    icon:'fa-github'
                }
            ];

            return socials;
        };

        return socialObj;
    }
})();