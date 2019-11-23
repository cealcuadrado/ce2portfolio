(function(){
    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope'];

    function homeCtrl($scope){
        var vm = this;
        vm.title = 'CeAlCuadrado Networks';

        vm.currentDate = new Date();
    }
})();