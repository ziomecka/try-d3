import { Link } from './types';
import { NODES_COUNT } from './consts';
import { getRandom } from './get-random';

export const links: Link[] = (function (cnt) {
  return new Array(cnt).fill(null).reduce((arr, _, index) => {
    arr.push({
      source: `node-${index}`,
      target: `node-${getRandom(NODES_COUNT - 1, undefined, true)}`,
      id: `link-${index}`,
    });

    return arr;
  }, []);
})(NODES_COUNT);
