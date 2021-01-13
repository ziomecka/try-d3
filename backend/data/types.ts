export interface TopologyData {
  nodes: Node[];
  links: Link[];
  nodeSets: NodeSet[];
}

export interface Node {
  id: NodeId;
  x: number;
  y: number;
  name?: string
};

export interface Link {
  source: NodeId;
  target: NodeId
};

export interface NodeSet {
  id: NodeId;
  nodes: NodeId[];
  root: NodeId
}

type NodeId = number | string;
