function open(){
    window.open("index.html");
}
angular.module('myApp', [])
    .service('sharedProperties', function () {
        var input1;

        return {
            getProperty: function () {
                return input1;
            },
            setProperty: function(value) {
                input1= value;
            }
        };
    });
function CtrlA($scope, sharedProperties) {
       sharedProperties.setProperty($scope.input1);
}

function CtrlB($scope, sharedProperties) {
       $scope.giveninput1 = sharedProperties.getProperty();
}



 input1 = document.getElementById("inputone").value;
localStorage.setItem("inputone",input1);