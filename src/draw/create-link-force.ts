import * as d3 from 'd3';
import { Node, Link } from './types';
import { links } from '../../backend/data';

const DISTANCE = 200;

export interface LinkForceOptions {
  simulation: d3.Simulation<Node, Link>
}

export function createLinkForce ({ simulation }: LinkForceOptions) {
  const force = d3
    .forceLink<Node, Link>(links)
    .id(({ id }) => id)
    .distance(() => DISTANCE);

  simulation.force('links', force);

  return force;
}
