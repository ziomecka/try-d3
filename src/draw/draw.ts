import * as d3 from 'd3';
import { Node, Link } from './types';

import { link } from './link';
import { node } from './node';
import { linkForce } from './link-force';

import { getTickActions } from './get-tick-actions';
import { getNodesForce } from './get-nodes-force';
import { makeNodesDraggable } from './make-nodes-draggable';

export function draw () {
  const simulation = d3.forceSimulation<Node, Link>();

  getNodesForce({simulation, width: 900, height: 600});

  simulation.force('links', linkForce);

  simulation.on('tick', getTickActions(node, link));

  makeNodesDraggable({ simulation });

}
