import { NodeSelection, LinkSelection } from './types';

export function getTickActions(node: NodeSelection, link: LinkSelection) {
  return () => {
    // update circle positions each tick of the simulation
    node
      .attr('cx', function (d: any) {
        return Math.max(0, d.x);
      })
      .attr('cy', function (d: any) {
        return Math.max(0, d.y);
      });

    // update link positions
    // simply tells one end of the line to follow one node around
    // and the other end of the line to follow the other node around
    link
      .attr('x1', function (d: any) { return d.source.x })
      .attr('y1', function (d: any) { return d.source.y })
      .attr('x2', function (d: any) { return d.target.x })
      .attr('y2', function (d: any) { return d.target.y })
  };
}
