
/*******************************
     #cname# animation
********************************/

.#cname#.ng-enter,
.#cname#.ng-hide-add,
.#cname#.ng-hide-remove,
.#cname#.ng-leave
  position relative
  transition(1s)

.#cname#.ng-enter,
.#cname#.ng-hide-remove,
.#cname#.ng-hide-add.ng-hide-add-active,
.#cname#.ng-leave.ng-leave-active
  opacity 0
  left 200px

.#cname#.ng-enter.ng-enter-active,
.#cname#.ng-hide-add,
.#cname#.ng-hide-remove.ng-hide-remove-active,
.#cname#.ng-leave
  opacity 1
  left 0px

//********************************


