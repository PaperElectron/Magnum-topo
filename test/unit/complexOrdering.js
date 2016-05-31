/**
 * @file correctOrder
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var tap = require('tap');
var topo = require('../../index');
var complex = require('../mocks/complexOrdering')
/**
 *
 * @module correctOrder
 */

tap.test('Plugins return ordered correctly by their expressed dependencies', function(t){
  var sorted = topo(complex)
  t.plan(2)
  t.type(sorted, 'Array')
  t.same(sorted, ['Env', 'SequelizePg', 'Models', 'Controllers', 'Passport', 'PreMiddleware', 'Router', 'PostMiddleware'])
})