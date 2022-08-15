angular.module("phoneList").component("phoneList", {
  // This name is what AngularJS uses to match to the `<phone-list>` element.
  templateUrl: "js/phone-list/phone-list.component.html",
  controller: function PhoneListController($http) {
    var self = this;
    self.orderProp = "age";

    $http.get("js/phones.json").then(function (response) {
      self.phones = response.data.slice(0, 5);
    });
  },
});
