angular.
  module('main').
  component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    template:
        '<div class="card" style="width: 18rem;">' +
        '<ul class="list-group list-group-flush>' +
          '<li class="list-group-item" ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>' +
        '</div>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });