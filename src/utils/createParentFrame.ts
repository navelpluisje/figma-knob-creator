export const createParentFrame = () => {
  const knobGroup = figma.currentPage.selection[0];
  const parentFrame = figma.createFrame();
  parentFrame.name = 'New Knob';
  if (knobGroup.parent.type === 'FRAME' || knobGroup.parent.type === 'GROUP') {
    const index = knobGroup.parent.children.indexOf(knobGroup);
    knobGroup.parent.insertChild(index, parentFrame);
    figma.notify('If you do not see the knobs, try to resize the parent Node');
  }
  // set the new Frame at the group position
  parentFrame.x = knobGroup.x;
  parentFrame.y = knobGroup.y;
  parentFrame.resize(knobGroup.width, knobGroup.height);
  parentFrame.appendChild(knobGroup);

  // Popsition the group proper in the new parent
  knobGroup.x = 0;
  knobGroup.y = 0;

  // Give thge parent a transparent background
  const fills = JSON.parse(JSON.stringify(parentFrame.fills));
  fills[0].opacity = 0;
  parentFrame.fills = fills;

  // Select the new Frame
  figma.currentPage.selection = [parentFrame];
}
