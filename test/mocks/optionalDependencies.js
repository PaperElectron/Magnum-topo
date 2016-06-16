/**
 * @file optionalDependencies
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module optionalDependencies
 */

//Expected ['Env', 'Merge', 'Passport', 'Strategy', 'Middleware', 'Routes', 'PreRouter']

module.exports = [
  {configName: 'Env', depends: [], provides: []},
  {configName: 'Merge', depends: ['Env'], provides: 'Middleware'},
  {configName: 'Passport', depends: ['Merge'], provides: ['Middleware']},
  {configName: 'Strategy', depends: ['Passport'], provides: ['Middleware']},
  {configName: 'Middleware', depends: [], provides: []},
  {configName: 'PreRouter', depends: ['Middleware'], provides: [], optional: ['Routes']},
  {configName: 'Routes', depends: [], provides: []},
  {configName: 'Setup'}
]