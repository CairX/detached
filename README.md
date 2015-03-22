detached
==================

Collection of JavaScript snippets.

Documentation
-------------

### Colors
Exporeted methods.


#### rgb.round
Round the RGB value. Limited to 0-255.

* **number** *Integer* The number to round.

**Return** *Integer* Value from 0 to 255.


#### rgb.extract
Extract RGB values from string based on the following format: rgb(xxx, xxx, xxx)

* **string** *String* Color string.

**Return** *Array* Integer color values. Red = 0 Green = 1 Blue = 2


#### rgb.string
Convert array of color values into string.

* **colors** *Array* List of colors with an expected order of red(0), green(1) and blue(2).

**Return** *string* Colors in string format: rgb(xxx, xxx, xxx)


#### rgb.transition
Create list of colors that transist from given start value to end.

* **start** *String* Color, rgb(xxx, xxx, xxx).
* **end** *String* Color, rgb(xxx, xxx, xxx).
* **steps** *Integer* Number of transition steps.

**Return** *Array* List of color strings.


#### rgb.transitions
Transition between multiple colors in the number of given steps.

* **colors** *Array* List of colors as string in format, rgb(xxx, xxx, xxx).
* **steps** *Integer* Number of transition steps.

**Return** *Array* List of color strings.


#### rgb.loop
Create list of colors that transist from given first and second color. Where if looped will create a continuous transition from one color to the other, much like a pulse.

* **first** *String* Color, rgb(xxx, xxx, xxx).
* **second** *String* Color, rgb(xxx, xxx, xxx).
* **steps** *Integer* Number of transition steps.

**Return** *Array* List of color strings.
