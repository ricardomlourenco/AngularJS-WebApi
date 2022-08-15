angular.module("phoneList").component("phoneList", {
  // This name is what AngularJS uses to match to the `<phone-list>` element.
  templateUrl: "js/phone-list/phone-list.component.html",
  controller: function PhoneListController() {
    this.orderProp = "age";

    this.phones = [
      {
        name: "Nexus S",
        snippet: "Fast just got faster with Nexus S.",
        age: 1,
      },
      {
        name: "Motorola XOOM™ with Wi-Fi",
        snippet: "The Next, Next Generation tablet.",
        age: 2,
      },
      {
        name: "MOTOROLA XOOM™",
        snippet: "The Next, Next Generation tablet.",
        age: 3,
      },
    ];
  },
});
