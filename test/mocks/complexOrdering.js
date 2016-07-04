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
  {configName: 'Env', depends: [], provides: ['Env']},
  {configName: 'SequelizePg', depends: 'Env', provides: ['SQL']},
  {configName: 'Passport', depends: ['Controllers'], provides: ['Middleware']},
  {configName: 'Models', depends: ['SequelizePg'], provides: []},
  {configName: 'Controllers', depends: ['Models'],provides: []},
  {configName: 'Router', depends: ['Controllers', 'PreMiddleware'], provides: []},
  {configName: 'PreMiddleware', depends: ['Controllers'],provides: []},
  {configName: 'PostMiddleware', depends: ['Router'],provides: []}
]