(function(){
    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = [
        '$scope', 
        'defaultConstants', 
        'dateFactory', 
        'blogsFactory',
        'socialFactory',
        'gamingFactory'
    ];

    function homeCtrl(
        $scope, 
        defaultConstants, 
        dateFactory, 
        blogsFactory,
        socialFactory,
        gamingFactory
    ){
        var vm = this;

        vm.title = defaultConstants.title;
        vm.currentYear = dateFactory.getFullYear();
        vm.name = defaultConstants.name;
        vm.email = defaultConstants.email;
        vm.mainImg = defaultConstants.imgSrc;

        vm.blogs = blogsFactory.getBlogs();
        vm.socials = socialFactory.getSocial();
        vm.gaming = gamingFactory.getGaming();
    }
})();