import * as d3 from 'd3';
import { Node, Link } from './types';

import { link, createLinkLabel } from './link';
import { node, nodeLabel } from './node';
import { createLinkForce } from './create-link-force';

import { getTickActions } from './get-tick-actions';
import { createNodesForce } from './create-nodes-force';
import { makeNodesDraggable } from './make-nodes-draggable';

export function draw () {
  const simulation = d3.forceSimulation<Node, Link>();

  const { width, height } = getSvgSize();

  createNodesForce({ simulation, width, height });

  const linkForce = createLinkForce({ simulation });
  const linkLabel = createLinkLabel(linkForce);

  simulation.on('tick', getTickActions(node, link, nodeLabel, linkLabel));

  makeNodesDraggable({ simulation });
}

function getSvgSize (w = 900, h = 600) {
  const svg = d3.select('svg');
  const width = svg.attr('width');
  const height = svg.attr('height');

  return {
    width: Number.isNaN(Number(width)) ? w : Number(width),
    height: Number.isNaN(Number(height)) ? h : Number(height),
  };
}
