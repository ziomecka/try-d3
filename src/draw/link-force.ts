import * as d3 from 'd3';
import { Node, Link } from './types';
import { links } from '../../backend/data';

export const linkForce = d3
  .forceLink<Node, Link>(links)
  .id(({ id }) => `${id}`)
  .distance(() => 200);
