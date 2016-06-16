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
  {configName: 'Env', provides: [], depends: []},
  {configName: 'SequelizePg', provides: [], depends: ['Env']},
  {configName: 'Models', provides: [], depends: ['SequelizePg']},
  {configName: 'Controllers', provides: [], depends: ['Redis']},
  {configName: 'Redis', provides: [], depends: ['Middleware']},
  {configName: 'Middleware', provides: [], depends: ['Controllers']}
]