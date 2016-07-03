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
  {configName: 'Env', depends: [], provides: []},
  {configName: 'Merge', depends: ['Env'], provides: ['Middleware', 'Merge']},
  {configName: 'Passport', depends: ['Merge'], provides: ['Middleware']},
  {configName: 'Strategy', depends: ['Passport'], provides: ['Middleware']},
  {configName: 'Middleware', depends: [], provides: []},
  {configName: 'PreRouter', depends: ['Middleware'], provides: []},
  {configName: 'Setup'}
]