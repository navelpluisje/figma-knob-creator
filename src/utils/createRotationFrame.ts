export const createRotationFrame = (width: number, height: number, index: number, direction: 'vertical' | 'horizontal') => {
  const isHorizontal = direction === 'horizontal';
  const frame = figma.createFrame();
  frame.resize(width, height);
  frame.x = isHorizontal ? index * width + width / 2 : width / 2;
  frame.y = isHorizontal ? height / 2 : index * height + height / 2;
  frame.clipsContent = false;
  const fills = JSON.parse(JSON.stringify(frame.fills));
  fills[0].opacity = 0;
  frame.fills = fills;

  return frame;
}
