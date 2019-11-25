(function(){
    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', 'defaultConstants', 'dateFactory'];

    function homeCtrl($scope, defaultConstants, dateFactory){
        var vm = this;
        vm.title = defaultConstants.title;

        vm.currentYear = dateFactory.getFullYear();
    }
})();