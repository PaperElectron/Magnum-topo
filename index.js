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

  var keyedParams = _.chain(pluginArray).map(function(plugin) {
    if(plugin.paramName){
      return {paramName: plugin.paramName, configName: plugin.configName}
    }
    return false
  }).filter(Boolean).keyBy('paramName').value()


  _.each(pluginArray, function(o) {
    var deps = _.isArray(o.depends) ? o.depends : _.isUndefined(o.depends) ? [] : [o.depends]
    var pluginsRequiredDependencies = _.map(deps, function(d) {
      if(_.isObject(keyedParams[d])){
        return keyedParams[d].configName
      }
      return d
    })

    var opts = _.isArray(o.optional) ? o.optional : _.isUndefined(o.optional) ? [] : [o.optional]
    var pluginsOptionalDependencies = _.map(opts, function(d) {
      if(_.isObject(keyedParams[d])){
        return keyedParams[d].configName
      }
      return d
    })


    Sort.add(o.configName, pluginsRequiredDependencies)
    Sort.add(o.configName, pluginsOptionalDependencies)


    if(o.provides) {
      var provides = _.isArray(o.provides) ? o.provides : [o.provides]
      _.each(provides, function(p) {
        if(p !== o.configName){
          Sort.add(p, o.configName)
        }
      })
    }
  })

  var Sorted = Sort.sort().reverse()
  var KeyedPlugins = _.keyBy(pluginArray, 'configName')
  return _.chain(Sorted).map(function(key){
    var byPluginName = KeyedPlugins[key]
    return byPluginName
  })
    .filter(_.isObject)
    .value()

}
