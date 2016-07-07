(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'templates/list.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));