import { Node as NodeType } from '../../backend';
import * as d3 from 'd3';

export type Node = d3.SimulationNodeDatum & NodeType;
export type Link = d3.SimulationLinkDatum<Node>;
export type NodeLabelDatum = any
export type LinkLabelDatum = any

export type NodeSelection = d3.Selection<any, NodeDatum, any, any>;
export type LinkSelection = d3.Selection<any, LinkDatum, any, any>;
export type NodeLabelSelection = d3.Selection<any, NodeLabelDatum, any, any>;
export type LinkLabelSelection = d3.Selection<any, LinkLabelDatum, any, any>;

export type NodeDatum = Node;
export type LinkDatum = {
  source: { x: number; y: number };
  target: { x: number; y: number };
 };
