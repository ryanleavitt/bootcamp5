angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
    /**TODO 
    *Save the article using the Listings factory. If the object is successfully 
    saved redirect back to the list page. Otherwise, display the error
   */
      var newListing={
        name:$scope.newListing.name,
        code:$scope.newListing.code,
        address:$scope.newListing.address
      }

      Listings.create(newListing);
      $scope.newListing={};
      Listings.getAll().then(function(response){
        $scope.listings=response.data;
      }, function(error){console.log('Cant retrieve listings:',error);});
    };

    $scope.deleteListing = function(id) {
     /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
    navigate back to 'listing.list'. Otherwise, display the error. 
       */
       Listings.delete(id._id).then(function(error){
        console.log('error');
       });
       $scope.listings.splice($scope.listings.indexOf(id),1);
       $scope.detailedInfo=undefined;
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
