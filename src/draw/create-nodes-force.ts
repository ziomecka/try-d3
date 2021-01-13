import * as d3 from 'd3';
import { Node, Link } from './types';

import { nodes as NODES } from '../../backend/data';

export interface GetNodesForceOptions {
  simulation: d3.Simulation<Node, Link>,
  width: number,
  height: number
}

export const createNodesForce = (
  options: GetNodesForceOptions,
) => {
  const { simulation, width, height } = options;

  const nodes = simulation
    .nodes(NODES);

  return nodes.force('charge_force', d3.forceManyBody()).force(
    'center_force',
    d3.forceCenter(width / 2, height / 2),
  );
};
