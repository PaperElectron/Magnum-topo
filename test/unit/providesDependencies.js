/**
 * @file providesDependencies
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

var tap = require('tap');
var topo = require('../../index');
var provides = require('../mocks/providesDependencies');
/**
 *
 * @module providesDependencies
 */

tap.test('Plugins return ordered correctly by their expressed dependencies', function(t){
  var sorted = topo(provides)
  t.plan(2)
  t.type(sorted, 'Array')
  t.same(sorted, ['Env', 'Merge', 'Passport', 'Strategy', 'Middleware', 'PreRouter', 'Setup'])
})