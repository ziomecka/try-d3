import { Node as NodeType } from "../../backend";
import * as d3 from "d3";

export type Node = d3.SimulationNodeDatum & NodeType;
export type Link = d3.SimulationLinkDatum<Node>;

export type NodeSelection = d3.Selection<any, any, any, any>;
export type LinkSelection = d3.Selection<any, any, any, any>;
