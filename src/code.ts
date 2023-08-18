import { createParentFrame } from "utils/createParentFrame";
import { createRotary } from "utils/createRotary";
import { hasRotatingNodes } from "utils/hasRotate";

// Close the plugin when there is no selection
if (!figma.currentPage.selection.length) {
  figma.notify('Create Knob needs a selection. Select a frame to create your knob from.');
  figma.notify('Or check the documentation.');
  figma.closePlugin();
}

// Show our wonderful ui
figma.showUI(__html__, {
  width: 450,
  height: 350,
  title: 'Create a knob',
})

figma.ui.onmessage = (message) => {
  // If the Node to create the knob from is a Group, we put it in a Frame first
  if (
    figma.currentPage.selection[0].type === 'GROUP'
    && hasRotatingNodes(figma.currentPage.selection[0].children)
  ) {
    createParentFrame()
  }

  if (
    figma.currentPage.selection[0].type === 'FRAME'
    && figma.currentPage.selection[0].children.length === 0
  ) {
    figma.notify('The selected Node is an empty frame. Please select a valid Node')
    figma.closePlugin();
    return;
  }

  if (
    figma.currentPage.selection[0].type === 'FRAME'
    && figma.currentPage.selection[0].children[0].type === 'GROUP'
    && hasRotatingNodes(figma.currentPage.selection[0].children[0].children)
  ) {
    console.log({ message })
    createRotary(
      parseInt(message['nb-steps'], 10),
      parseInt(message['nb-degrees'], 10),
      message['frame-name'] || 'step',
      message['step-direction'] || 'vertical',
    );
  } else {
    figma.notify('No valid Node selected for creating a Knob')
  }
  figma.closePlugin();
}
