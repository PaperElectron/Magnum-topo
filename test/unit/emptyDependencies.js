/**
 * @file emptyDependencies
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

var tap = require('tap');
var topo = require('../../index');
var emptyDeps = [
  {configName: 'test-A', depends: ['Data']},
  {configName: 'test-B', depends: ['Data', 'Controllers']},
  {configName: 'test-C', depends: ['Middleware']}
]
/**
 *
 * @module emptyDependencies
 */

tap.test('Filters undefined plugins.', function(t){
  t.plan(2)
  var sorted = topo(emptyDeps)
  t.type(sorted, 'Array')
  t.equal(sorted.length, 3, 'Only returns plugins')
})