import { Node } from './types';

import { NODES_COUNT } from './consts';
import { getRandom } from './get-random';

const maxXY = 600;

export const nodes: Node[] = new Array(NODES_COUNT)
  .fill(null)
  .map((_, index) => {
    return {
      x: getRandom(maxXY),
      y: getRandom(maxXY),
      id: `node-${index}`,
    };
  });
