## How to use the plugin

### Install

* In your favorite browser visit: [Knob Creator](https://www.figma.com/community/plugin/1021426556483489394/Knob-Creator)
* Or, search in your App for `Knob Creator` in the Community area
* Click the install button

Congrats, that's step 1.

### Usage

Knob Creator uses a frame or group as a base node. If you want a group to be a knob stack, the plugin will move it into a newly created frame.
Within the group you can have your separate layers to build your knob out of. Deciding which layer to rotate is managed by nameing. There are 3 keywords to start your layer name with:

* `rotate`: When the layer name start with `rotate` the whole layer rotates around the center of the frame. Keep in mind that this neeeds to be in 12-o-clock position.
* `range`: When the layer starts with range, it will set the arc to the rotation range. *This Node must be an Arc*
* `value`: When starting the `value` keyword, the arc will be set to the value. *This Node must be an Arc*
    * `value-center`: The fill for the value will be left and right from the center

I hope this image will give you a better undestanding of the above:

![knob settings](/assets/kno-keywords.png)

#### Node types