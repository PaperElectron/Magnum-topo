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
    Sort.add(o.configName, o.depends)
    Sort.add(o.configName, o.optional)
    if(o.provides) {
      var provides = _.isArray(o.provides) ? o.provides : [o.provides]
      _.each(provides, function(p) {
        Sort.add(p, o.configName)
      })
    }
  })

  var Sorted = Sort.sort().reverse()
  var KeyedPlugins = _.keyBy(pluginArray, 'configName')
  return _.chain(Sorted).map(function(key){
    return KeyedPlugins[key]
  })
    .filter(_.isObject)
    .value()

}
