type Action ='value'|'range'|'rotate';

const hasRotate = (name: string): boolean => {
  return /^rotate/i.test(name)
}

export const hasRange = (name: string): boolean => {
  return /^range/i.test(name)
}

export const hasValue = (name: string): boolean => {
  return /^value/i.test(name)
}

export const hasCenter = (name: string): boolean => {
  return /^value-center/i.test(name)
}


export const getAction = (name): Action|null => {
  const action = /^(value|range|rotate)/i.exec(name);
  return action ? action[0].toLocaleLowerCase() as Action : null;
}

export const hasRotatingNodes = (nodes: readonly SceneNode[]) => (
  nodes.find(node => hasRotate(node.name))
);
