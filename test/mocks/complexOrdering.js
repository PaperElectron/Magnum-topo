/**
 * @file complexOrdering
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module complexOrdering
 */

//Expected ['Env', 'SequelizePg', 'Models', 'Controllers', 'Passport', 'PreMiddleware', 'Router', 'PostMiddleware']

module.exports = [
  {name: 'Env', depends: []},
  {name: 'SequelizePg', depends: 'Env'},
  {name: 'Passport', depends: ['Controllers'], provides: ['PreMiddleware']},
  {name: 'Models', depends: ['SequelizePg']},
  {name: 'Controllers', depends: ['Models']},
  {name: 'Router', depends: ['Controllers', 'PreMiddleware']},
  {name: 'PreMiddleware', depends: ['Controllers']},
  {name: 'PostMiddleware', depends: ['Router']}
]