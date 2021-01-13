import * as d3 from 'd3';

import { nodes } from '../../backend';
import {Node} from './types'
import {NODE_CLASSNAME} from './consts'

const svg = d3.select('svg');

export const node = svg
  .append('g')
  .attr('class', 'nodes')
  .selectAll('circle')
  .data(nodes)
  .enter()
  .append('circle')
  .attr('r', 5)
  .attr('fill', 'red')
  .attr('cx', ({ x }: Node) => x)
  .attr('cy', ({ y }: Node) => y)
  .attr('class', NODE_CLASSNAME);
