/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  'GET /' : 'UserController.home',

  'GET /user/login': 'UserController.login',

  'POST /user/login': 'UserController.login',

  'POST /user/logout': 'UserController.logout',

  'GET /user/p1': 'UserController.p1',
  'GET /user/p2': 'UserController.p2',
  'GET /user/p3': 'UserController.p3',
  'GET /user/p4': 'UserController.p4',
  'GET /user/p5': 'UserController.p5',
  'GET /user/p6': 'UserController.p6',
  'GET /user/p7': 'UserController.p7',
  'GET /user/p8': 'UserController.p8',
  'GET /user/p9': 'UserController.p9',
  'GET /user/p10': 'UserController.p10',
  'GET /user/p11': 'UserController.p11',


  'GET /user/dev': 'UserController.dev',
  'GET /user/pt1': 'UserController.pt1',
  'GET /user/pt11': 'UserController.pt11',
  'GET /user/pt12': 'UserController.pt12',
  'GET /user/pt13': 'UserController.pt13',
  'GET /user/pt14': 'UserController.pt14',
  'GET /user/pt15': 'UserController.pt15',
  'GET /user/pt16': 'UserController.pt16',
  'GET /user/pt17': 'UserController.pt17',
  'GET /user/pt18': 'UserController.pt18',
  'GET /user/pt19': 'UserController.pt19',
  'GET /user/pt110': 'UserController.pt110',


  'GET /user/pt2': 'UserController.pt2',
  'GET /user/pt21': 'UserController.pt21',
  'GET /user/pt22': 'UserController.pt22',
  'GET /user/pt23': 'UserController.pt23',
  'GET /user/pt24': 'UserController.pt24',
  'GET /user/pt25': 'UserController.pt25',
  'GET /user/pt26': 'UserController.pt26',
  'GET /user/pt27': 'UserController.pt27',
  'GET /user/old': 'UserController.old',

  'POST /customer/create': 'CustomerController.create',
  'GET /customer/list': 'CustomerController.list',
  'POST /customer/delete/:id': 'CustomerController.delete',


};
