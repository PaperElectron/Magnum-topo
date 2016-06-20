/**
 * @file paramDependencies
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module paramDependencies
 */
//{
// Env: 'ApplicationEnv',
// Server: 'ApplicationServer',
// Routes: 'Router',
// SQL: 'SequelizePg'
// }

//Expected order = ['ApplicationEnv', 'SequelizePg','Middleware ,'Router', 'ApplicationServer']

module.exports = [
  {paramName: 'Env'   ,configName: 'ApplicationEnv', depends: [], provides: []},
  {paramName: 'Server',configName: 'ApplicationServer', optional: ['Routes'], provides: []},
  {paramName: 'Routes',configName: 'Router', depends: ['SQL', 'Middleware'], provides: []},
  {paramName: 'SQL'   ,configName: 'SequelizePg', depends: ['Env'], provides: []},
  {configName: 'Middleware', depends: ['Env'], provides: []}
]