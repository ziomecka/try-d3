import { calculateLinkLabelPosition } from './calculate-link-label-position';
import { NodeSelection, LinkSelection, NodeLabelSelection, LinkLabelSelection } from './types';

export function getTickActions (
  node: NodeSelection,
  link: LinkSelection,
  nodeLabel: NodeLabelSelection,
  linkLabel: LinkLabelSelection) {
  return () => {
    node
      .attr('cx', ({ x }) => `${x}`)
      .attr('cy', ({ y }) => `${y}`);
    nodeLabel
      .attr('x', ({ x }) => `${x}`)
      .attr('y', ({ y }) => `${y}`);

    link
      .attr('x1', ({ source: { x } }) => `${x}`)
      .attr('y1', ({ source: { y } }) => `${y}`)
      .attr('x2', ({ target: { x } }) => `${x}`)
      .attr('y2', ({ target: { y } }) => `${y}`);

    linkLabel
      .attr('x', calculateLinkLabelPosition('x'))
      .attr('y', calculateLinkLabelPosition('y'));
  };
}
