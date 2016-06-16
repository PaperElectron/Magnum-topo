/**
 * @file toposort
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project magnum-topo
 * @license MIT {@link http://opensource.org/licenses/MIT}
 *
 * Adapted from https://github.com/gustavohenke/toposort
 */

'use strict';
var _ = require('lodash');
/**
 *
 * @module topo
 */

module.exports = Topo

function Topo() {
  this.edges = []
}

Topo.prototype.add = function(name, dependencies) {
  var self = this;
  if(!_.isString(name) || !name) {
    throw new Error('Name Cannot be empty.')
  }

  dependencies = _.isArray(dependencies) ? dependencies : _.isUndefined(dependencies) ? [] : [dependencies]

  if(dependencies.length > 0) {
    _.each(dependencies, function(d) {
      self.edges.push([name, d])
    })
  }
  else {
    this.edges.push([name])
  }

  return this
}

Topo.prototype.sort = function() {
  var self = this
  var nodes = []

  _.each(this.edges, function(edge) {
    _.each(edge, function(node) {
      if(_.indexOf(nodes, node) === -1) {
        nodes.push(node)
      }
    })
  })

  var initial = nodes.length
  var sorted = new Array(initial)
  var visit = function(node, pred) {
    if(pred.length && _.indexOf(pred, node) !== -1) {
      throw new Error('Cyclic Dependency. ' + node + ' Is dependent on itself.' +
        '\n\t Dependency Chain: ' + pred.join(' -> ') + ' => ' + node)
    }

    var index = _.indexOf(nodes, node)
    if(index !== -1) {
      var copy = false

      //mark the node as false to exclude it from future iterations
      nodes[index] = false

      //loop through all edges and follow dependencies of the current node
      _.each(self.edges, function(edge) {
        if(edge[0] === node) {
          //lazily create a copy of predecessors with the current node concatenated onto it
          copy = copy || pred.concat([node]);

          //recurse to node dependencies
          visit(edge[1], copy);
        }
      })
      sorted[--initial] = node;
    }
  }

  for(var i = 0; i < nodes.length; i++){
    var node = nodes[i]
    if(node !== false){
      nodes[i] = false

      _.each(this.edges, function(edge){
        if(edge[0] === node){
          visit(edge[1], [node])
        }
      })

      sorted[--initial] = node
    }
  }

  return sorted
}