'use strict';

angular.module('app')
  .directive('svListingSale', function ($firebase) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-sale.html',
      scope: {

      },
      link: function ($scope, element, attr) {
        $scope.mainDescription="At vero eos et accusamus et iusto odio dignissimos ducimus At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repella"


        var repo = 'https://remax14.firebaseio.com/houses/house1/property-description';
        $scope.propertyDescriptionProps = $firebase(new Firebase(repo)).$asArray();
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
