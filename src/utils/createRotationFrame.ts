export const createRotationFrame = (width: number, height: number, index: number) => {
  const frame = figma.createFrame();
  frame.resize(width, height);
  frame.y = index * height + height / 2;
  frame.x = width / 2;
  frame.clipsContent = false;
  const fills = JSON.parse(JSON.stringify(frame.fills));
  fills[0].opacity = 0;
  frame.fills = fills;

  return frame;
}
  