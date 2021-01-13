import * as d3 from 'd3';

import { nodes } from '../../backend';
import { NodeDatum } from './types';
import { NODE_CLASSNAME, NODES_CLASSNAME, NODES_LABELS_CLASSNAME, NODE_LABEL_CLASSNAME, LABEL_DISTANCE } from './consts';

const svg = d3.select<d3.BaseType, NodeDatum>('svg');

export const node = svg
  .append('g')
  .attr('class', NODES_CLASSNAME)
  .selectAll('g')
  .data(nodes)
  .enter()
  .append('circle')
  .attr('r', 5)
  .attr('fill', 'red')
  .attr('cx', ({ x }) => x)
  .attr('cy', ({ y }) => y)
  .attr('class', NODE_CLASSNAME);

export const nodeLabel = svg
  .append('g')
  .attr('class', NODES_LABELS_CLASSNAME)
  .selectAll(`.${NODE_CLASSNAME}`)
  .data(nodes)
  .enter()
  .append('text')
  .attr('class', NODE_LABEL_CLASSNAME)
  .attr('text-anchor', 'middle')
  .attr('x', ({ x }: any) => x)
  .attr('y', ({ y }: any) => y)
  .attr('dx', `${LABEL_DISTANCE}`)
  .attr('dy', `${LABEL_DISTANCE}`)
  .attr('font-size', '0.8em').text(({ id }: any) => id);
