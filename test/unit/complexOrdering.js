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
  var expected = ['Env', 'SequelizePg', 'Models', 'Controllers', 'Passport', 'PreMiddleware', 'Router', 'PostMiddleware']

  t.plan(1 + expected.length)

  t.type(sorted, 'Array')

  sorted.forEach(function(v,k){
    t.same(v.configName, expected[k], v.configName + ' - Should match expected order ' + expected[k])
  })

})