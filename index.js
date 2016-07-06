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

  var groupedParams = _.chain(pluginArray)
    .map(function(plugin) {
      // console.log(plugin.paramName, plugin.configName);
      if(plugin.paramName){
        return {paramName: plugin.paramName, configName: plugin.configName}
      }
      return false
    })
    .filter(Boolean)
    .groupBy('paramName')
    .value()

  _.each(pluginArray, function(o) {

    // Map dependencies, if there are multiple matching, return the full array
    // and flatten at the end of the chain. This Accounts for merge plugins that
    // all export the same paramName for use.
    var deps = _.isArray(o.depends) ? o.depends : _.isUndefined(o.depends) ? [] : [o.depends]
    var pluginsRequiredDependencies = _.chain(deps).map(function(d) {

      if(_.isArray(groupedParams[d])){
        return _.map(groupedParams[d], function(p){
          return p.configName
        })
      }
      return d
    }).flatten().value()

    // Same as pluginRequiredDependencies.
    var opts = _.isArray(o.optional) ? o.optional : _.isUndefined(o.optional) ? [] : [o.optional]
    var pluginsOptionalDependencies = _.chain(opts).map(function(d) {

      if(_.isArray(groupedParams[d])){
        return _.map(groupedParams[d], function(p){
          return p.configName
        })
      }
      return d
    }).flatten().value()

    Sort.add(o.configName, pluginsRequiredDependencies)
    Sort.add(o.configName, pluginsOptionalDependencies)


    // Automatically add plugins paramName, if it differs from the
    // configName of the plugin. this allows downstream plugins to sak for dependencies
    // by configName, moduleName, or exported parameter.
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

  return _.chain(Sorted)
    .map(function(key){
      var byPluginName = KeyedPlugins[key]
      return byPluginName
    })
    .filter(_.isObject)
    .value()

}
