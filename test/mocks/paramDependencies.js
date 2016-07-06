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
  {paramName: 'Test'   ,configName: 'TestParam', depends: ['Middleware'], provides: ['Test']},
  {paramName: 'Env'   ,configName: 'ApplicationEnv', depends: [], provides: ['Env']},
  {paramName: 'Server',configName: 'ApplicationServer', optional: ['Routes'], provides: ['Server']},
  {paramName: 'Routes',configName: 'Router', depends: ['SQL', 'Middleware'], provides: ['Routes']},
  {paramName: 'SQL'   ,configName: 'SequelizePg', depends: ['Env'], provides: ['SQL']},
  {paramName: 'Middleware', configName: 'Middleware', depends: ['Env'], provides: []},
  {paramName: 'Middleware', configName: 'Middleware2', depends: ['Env'], provides: []},
  {paramName: 'Middleware', configName: 'Middleware3', depends: ['Env'], provides: []}
]