import * as d3 from 'd3';

import { links } from '../../backend';

import { LINK_CLASSNAME, LINKS_CLASSNAME, LINKS_LABELS_CLASSNAME, LINK_LABEL_CLASSNAME, LABEL_DISTANCE } from './consts';
import { LinkDatum } from './types';
import { calculateLinkLabelPosition } from './calculate-link-label-position';

const svg = d3.select<d3.BaseType, LinkDatum>('svg');

const STROKE_WIDTH = 2;

export const link = svg
  .append('g')
  .attr('class', LINKS_CLASSNAME)
  .selectAll('line')
  .data(links as unknown as Iterable<LinkDatum>)
  .enter()
  .append('line')
  .attr('stroke-width', STROKE_WIDTH)
  .attr('x1', ({ source: { x } }) => `${x}`)
  .attr('y1', ({ source: { y } }) => `${y}`)
  .attr('x2', ({ target: { x } }) => `${x}`)
  .attr('x2', ({ target: { y } }) => `${y}`)
  .attr('class', LINK_CLASSNAME);

export function createLinkLabel (linksForce: any) {
  return svg
    .append('g')
    .attr('class', LINKS_LABELS_CLASSNAME)
    .selectAll(`.${LINK_CLASSNAME}`)
    .data(linksForce.links())
    .enter()
    .append('text')
    .attr('class', LINK_LABEL_CLASSNAME)
    .attr('text-anchor', 'middle')
    .attr('x', calculateLinkLabelPosition('x'))
    .attr('y', calculateLinkLabelPosition('y'))
    .attr('dx', `${LABEL_DISTANCE}`)
    .attr('dy', `${LABEL_DISTANCE}`)
    .attr('font-size', '0.8em')
    .text(({ id }: any) => id);
}
