import * as d3 from 'd3';
import { Node, Link } from './types';

import { nodes } from '../../backend/data';

export interface GetNodesForceOptions {
  simulation: d3.Simulation<Node, Link>,
  width: number,
  height: number
}

export const getNodesForce = (
  options: GetNodesForceOptions
) => {
  const {simulation, width, height} = options;

  return simulation
    .nodes(nodes)
    .force('charge_force', d3.forceManyBody())
    .force(
      'center_force',
      d3.forceCenter(width, height),
    );

}
