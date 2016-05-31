/**
 * @file cyclicDependencies
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module cyclicDependencies
 */

module.exports = [
  {name: 'Env', depends: []},
  {name: 'SequelizePg', depends: ['Env']},
  {name: 'Models', depends: ['SequelizePg']},
  {name: 'Controllers', depends: ['Redis']},
  {name: 'Redis', depends: ['Middleware']},
  {name: 'Middleware', depends: ['Controllers']}
]