/**
 * @file cyclicDependencies
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var tap = require('tap');
var topo = require('../../index');
var cyclic = require('../mocks/cyclicDependencies')

/**
 *
 * @module cyclicDependencies
 */

tap.test('Throws on cyclic dependencies', function(t){
  t.plan(1)
  t.throws(function(){
    var s = topo(cyclic)
  })
})