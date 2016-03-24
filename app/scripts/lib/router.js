/**
 * router
 * @description Run callbacks when a route pattern matches current pathname
 */
(function($) {
  function Router() {
    this.route = null;
    this.routes = [];
  };
  $.extend(Router.prototype, {
    addRoutes: function(routes) {
      (this.routes.length > 0) ? this.routes.concat(routes): this.routes = routes;
    },
    doRoute: function() {
      // Call optional destroy methods on current route
      this.callRouteDestroy();
      // Identify current route based on pathname
      this.findRoute();
      // Call route callback methods
      this.callRouteCallbacks();
    },
    findRoute: function() {
      this.route = this.routes.filter(function(n, i, arr) {
        return RegExp('^' + n.path + '$', 'gi')
          .exec(window.location.pathname);
      })[0];
    },
    callRouteDestroy: function() {
      if(this.route && this.route.hasOwnProperty('destroy')) {
        this.route.destroy.forEach(function(n, i, a) {
          if(typeof n === 'function') n.call();
        });
      };
    },
    callRouteCallbacks: function() {
      if(this.route && this.route.hasOwnProperty('cnl')) {
        this.route.cnl.forEach(function(n, i, a) {
          if(typeof n === 'function') n.call();
        });
      }
    }
  });
  if (typeof module === 'object' && module.exports) {
    module.exports = Router;
  } else {
    window.Router = Router;
  }
}(jQuery));
