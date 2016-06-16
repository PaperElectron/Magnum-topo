/**
 * @file optionalDependencies
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';



var tap = require('tap');
var topo = require('../../index');
var optional = require('../mocks/optionalDependencies');
/**
 *
 * @module optionalDependencies
 */

tap.test('Plugins return ordered correctly by their expressed dependencies', function(t){

  var sorted = topo(optional)
  var expected = ['Env', 'Merge', 'Passport', 'Strategy', 'Middleware', 'Routes', 'PreRouter', 'Setup']

  t.plan(1 + expected.length)

  t.type(sorted, 'Array')
  sorted.forEach(function(v,k){
    console.log(v.configName);
    t.same(v.configName, expected[k], v.configName + ' - Should match expected order ' + expected[k])
  })
})