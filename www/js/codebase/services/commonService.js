services.service('CommonService', ['$http', function($http) {



    /**
     * @desc: This method takes the responsibility to route to a page
     */
    this.routeTo = (function(gotToUrl) {
        var presentURL = window.location.hash;

        window.location.href = gotToUrl;
    });


    this.getDeviceId = (function() {
        return window.device.uuid;
    });

    this.shuffleArray = (function(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    });

}]);