angular
    .module('onlineReciprocityApp')
    .controller('LoginCtrl',function ($scope) {
        $scope.loginError = false;
        $scope.signinCredentials = {
            email:'',
            password: ''
        };
        $scope.registerCredentials = {
            name: '',
            email: '',
            password: '',
            avatar: 'default-user-avatar-0.png'
        };

        $scope.signIn = function () {
            var proceed = true;
            if($scope.signinCredentials.email === '' || angular.isUndefined($scope.signinCredentials.email) ){
                proceed = false;
            }
            if($scope.signinCredentials.password === '' || angular.isUndefined($scope.signinCredentials.password) ){
                proceed = false;
            }
            if(!proceed){
                $scope.loginError = true;
            }
            else{
                $scope.loginError = false;
            }

        };

        $scope.register = function () {


        };



    });