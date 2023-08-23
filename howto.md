## How to use the plugin

### Install

* In your favorite browser visit: [Knob Creator](https://www.figma.com/community/plugin/1030842037042371583/Knob-Creator)
* Or, search in your App for `Knob Creator` in the Community area
* Click the install button

Congrats, that's step 1.

### Usage

#### intro

Knob Creator uses a frame or group as a base node. If you want a group to be a knob stack, the plugin will move it into a newly created frame.
Within the group you can have your separate layers to build your knob out of. Deciding which layer to rotate is managed by naming. There are 3 keywords to start your layer name with:

#### Nodes

* `rotate`: When the layer name start with `rotate` the whole layer rotates around the center of the frame. Keep in mind that this needs to be in 12-o-clock position.
* `range`: When the layer starts with range, it will set the arc to the rotation range. *This Node must be an Arc*
* `value`: When starting the `value` keyword, the arc will be set to the value. *This Node must be an Arc*
    * `value-center`: The fill for the value will be left and right from the center

There is no need to use them all in every knob off course. I hope this image will give you a better understanding of the above:

![knob settings](/assets/knob-keywords.png)

And the structure would look like:

![knob settings](/assets/knob-structure.png)

#### Using the plugin

* Select the Group with the knob, or a frame where the button group is it's first child.
* Right click the selection
* Select plugins and then select `Knob Creator`

> The next modal pops up:
>
> ![knob settings](/assets/modal.jpg)

* Fill in the amount of steps the stack should have. When using an odd number, there will be a 100% centered step.
* Give the number of degrees from the start till the end. Just play with the number. Something like 270 is a nice start.
* Set a name for the step frames. Defaults to `step`
* Set the direction of the steps. Defaults to vertical
* Click submit and the magic happens

The end result (steps: 5, degrees: 270) wll look like this:

![knob settings](/assets/stack.png)

