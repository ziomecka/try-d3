import * as d3 from 'd3';

import { links } from '../../backend';

import {LINK_CLASSNAME} from './consts'

export type Link = {source: {x: number, y: number},  target: { x: number, y: number}};

const svg = d3.select('svg');

export const link = svg
  .append('g')
  .attr('class', 'link')
  .selectAll('line')
  .data(links)
  .enter()
  .append('line')
  .attr('stroke-width', 2)
  .attr('x1', ({ source: { x } }: any) => x)
  .attr('y1', ({ source: { y } }: any) => y)
  .attr('x2', ({ target: { x } }: any) => x)
  .attr('x2', ({ target: { y } }: any) => y)
  .attr('class', LINK_CLASSNAME);
