/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Topological
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
var _ = require('lodash')
/**
 *
 * @module index
 */

var topo = require('./lib/topo')

/**
 * Topological sorting function
 *
 * @param {Array} edges
 * @returns {Array}
 */

module.exports = function magnumTopo(pluginArray){
  var Sort = new topo()

  _.each(pluginArray, function(o) {

    Sort.add(o.name, o.depends)

    if(o.provides) {
      var provides = _.isArray(o.provides) ? o.provides : [o.provides]
      _.each(provides, function(p) {
        Sort.add(p, o.name)
      })
    }
  })

  return Sort.sort().reverse()
}
