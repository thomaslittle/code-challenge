/**
 * app
 * @description Main app file
 */
var Router = require('./lib/router');
var app = {
    home: require('./controllers/home'),
    bootstrap: function() {
        $(document).ready(app.docready);
    },
    docready: function() {
        app.router = new Router();
        // Add routes
        app.router.addRoutes([
            {   // home page
                path: '/',
                ally: [app.home.init],
                destroy: [app.home.destroy]
            }
        ]);

        app.router.doRoute();
    }
};
global.app = app;
app.bootstrap();
