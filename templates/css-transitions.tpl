/*******************************
     #class-name# animation
********************************/

.#class-name#.ng-enter,
.#class-name#.ng-hide-add,
.#class-name#.ng-hide-remove,
.#class-name#.ng-leave
  position relative
  transition(1s)

.#class-name#.ng-enter,
.#class-name#.ng-hide-remove,
.#class-name#.ng-hide-add.ng-hide-add-active,
.#class-name#.ng-leave.ng-leave-active
  opacity 0
  left 200px

.#class-name#.ng-enter.ng-enter-active,
.#class-name#.ng-hide-add,
.#class-name#.ng-hide-remove.ng-hide-remove-active,
.#class-name#.ng-leave
  opacity 1
  left 0px

//********************************


