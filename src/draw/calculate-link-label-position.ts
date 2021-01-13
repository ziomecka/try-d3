export function calculateLinkLabelPosition (prop: 'x' | 'y') {
  return (link: any) => {
    const { source = {}, target = {} } = link;

    const sourceProp = Number(source[prop]);
    const targetProp = Number(target[prop]);

    const distance = Math.abs(((sourceProp) - (targetProp)));
    const startPosition = Math.min(sourceProp, targetProp);

    return startPosition + distance / 2;
  };
}
