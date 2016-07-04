/**
 * @file paramDependencies
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

var tap = require('tap');
var topo = require('../../index');
var provides = require('../mocks/paramDependencies');

/**
 *
 * @module paramDependencies
 */

tap.test('Plugins return ordered correctly by injectable param name', function(t){

  var sorted = topo(provides)
  var expected = ['ApplicationEnv', 'SequelizePg', 'Middleware','Middleware2', 'Middleware3', 'Router', 'ApplicationServer']
  t.plan(1 + expected.length)

  t.type(sorted, 'Array')
  sorted.forEach(function(v,k){
    t.same(v.configName, expected[k], v.configName + ' - Should match expected order ' + expected[k])
  })
})