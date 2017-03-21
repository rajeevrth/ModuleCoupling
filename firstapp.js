var first_app = angular.module('firstapp', []);

first_app.service('firstappService', function () {
    this.name = function () {
        console.log("Module Injected, Hi.");
    }
});

//emit down to up, braodacst - up to down
//In the given example if we emit on rootscope level from second controller and listen to rootscope in the first controller - Works fine
// $rootScope.$emit only lets other $rootScope listeners catch it. 
// This is good when you don't want every $scope to get it. Mostly a high level communication. 
// Think of it as adults talking to each other in a room so the kids can't hear them.

// $rootScope.$broadcast is a method that lets pretty much everything hear it. 
// This would be the equivalent of parents yelling that dinner is ready so everyone in the house hears it.

// $scope.$emit is when you want that $scope and all its parents and $rootScope to hear the event. 
// This is a child whining to their parents at home (but not at a grocery store where other kids can hear).

// $scope.$broadcast is for the $scope itself and its children. 
// This is a child whispering to its stuffed animals so their parents can't hear.
first_app.controller('firstappController', function ($rootScope, $scope, firstappService) {
    firstappService.name();
    SecondHighest();
    $rootScope.$on('myObject', function (event, args) {
        alert("hii");
    });

    function SecondHighest() {
        var arr = [1, 3, 9, 2, 5, 10, 3, 7, 3, 9, 12, 15, 3, 6, 0, 11, 88, 2, 3, 77, 22, 14];
        let finalHighestNumber = 0;
        let nextHighest = 0;
        // Find the second highest element in this array
        for (let i = 0; i < arr.length; i++) {
            let highestNumber = arr[i];
            if (arr[i] >= finalHighestNumber) {
                nextHighest = finalHighestNumber;
                finalHighestNumber = arr[i];
            }
            else if (arr[i] < finalHighestNumber && arr[i] > nextHighest) {
                nextHighest = arr[i];
            }
        }
        console.log("Second Highest Number is :" + nextHighest);
    }
});

first_app.controller('testController', function ($rootScope, $scope) {
    $scope.$emit('myObject', {name : 'Rajeev'});
    
});

