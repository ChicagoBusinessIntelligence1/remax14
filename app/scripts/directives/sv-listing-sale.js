'use strict';

angular.module('app')
  .directive('svListingSale', function ($firebase) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-sale.html',
      scope: {},
      link: function ($scope, element, attr) {
        var repo = 'https://remax14.firebaseio.com/houses/house1/rooms/kitchen';
        $scope.kitchenProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/rooms/bedrooms';
        $scope.bedroomsProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/rooms/bathrooms';
        $scope.bathroomsProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/rooms/diningroom';
        $scope.diningroomProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/rooms/otherrooms';
        $scope.otherroomsProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/rooms/livingroom';
        $scope.livingroomProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/rooms/basement';
        $scope.basementProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/rooms/parking';
        $scope.parkingProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/property-features';
        $scope.propertyFeaturesProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/building-construction';
        $scope.buildingConstructionProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/amenities-communities';
        $scope.amenitiesCommunitiesProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/appliances';
        $scope.appliancesProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/other-info';
        $scope.otherInfoProps = $firebase(new Firebase(repo)).$asArray();
        var repo = 'https://remax14.firebaseio.com/houses/house1/school-info';
        $scope.schoolInfoProps = $firebase(new Firebase(repo)).$asArray();
      }
    };
  });
