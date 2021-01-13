import * as d3 from 'd3';
import { Node, Link } from './types';

export interface MakeNodesDraggable {
  simulation: d3.Simulation<Node, Link>;
  nodesSelector?: string;
  start?(): void;
  end?(): void;
  drag?(): void;
}

export function makeNodesDraggable (
  options: MakeNodesDraggable,
) {
  const {
    nodesSelector = 'circle',
    simulation,
    start = defaultStart(simulation),
    end = defaultEnd(simulation),
    drag = defaultDrag(simulation),
  } = options;
  const draghandlerr = d3
    .drag()
    .on('start', start)
    .on('drag', drag)
    .on('end', end);

  draghandlerr(d3.selectAll(nodesSelector));
}

function defaultStart (
  simulation: d3.Simulation<Node, Link>,
) {
  return (e: any) => {
    if (!e.active) simulation.alphaTarget(0.3).restart();
  };
}

// @ts-ignore
function defaultDrag (
  simulation: d3.Simulation<Node, Link>,
) {
  return (e: any) => {
    e.subject.fx = e.x;
    e.subject.fy = e.y;
  };
}

function defaultEnd (simulation: d3.Simulation<Node, Link>) {
  return (e: any) => {
    if (!e.active) simulation.alphaTarget(0);
    e.subject.fx = e.x;
    e.subject.fy = e.y;
  };
}
