/**
 * @file provides
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module provides
 */

//Expected ['Env', 'Merge', 'Passport', 'Strategy', 'Middleware', 'PreRouter']

module.exports = [
  {name: 'Env', depends: [], provides: []},
  {name: 'Merge', depends: ['Env'], provides: 'Middleware'},
  {name: 'Passport', depends: ['Merge'], provides: ['Middleware']},
  {name: 'Strategy', depends: ['Passport'], provides: ['Middleware']},
  {name: 'Middleware', depends: [], provides: []},
  {name: 'PreRouter', depends: ['Middleware'], provides: []},
  {name: 'Setup'}
]