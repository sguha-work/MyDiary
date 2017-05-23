angular.module('app.controllers', [])

.controller('indexCtrl', ['$scope', '$stateParams', 'CommonService',
    function($scope, $stateParams, CommonService) {
        var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        $scope.resetPasswordPanel = (function() {
            var index,
                shuffledArray;
            shuffledArray = CommonService.shuffleArray(numberArray);
            numberArray = shuffledArray;
            for (index = 1; index <= 9; index++) {
                $("#button" + index).html(shuffledArray[index - 1]);
            }
        });

    }
])