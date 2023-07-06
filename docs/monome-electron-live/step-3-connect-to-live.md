# Step 3: Connect the Electron App to the Ableton Live

In step 3, the next piece of plumbing will involve establishing the first connection between the Electron app and Ableton Live, specifically receiving a MIDI clock signal from Live. To do this we will need to install a MIDI package:

```
$ npm install easymidi
```

This involves a onetime configuration of the MIDI port that will be establsihed. Do the following steps in order:

1. Update the code for the AbletonLive class to the version below.
1. Start the Electron app with `npm start`
1. Launch Live and open its MIDI preferences
1. Find the entry named "monome in" that is established in the code below, check its box for Sync

Now, while the Electron app is running in development mode via `npm start` you should see the current transport state logging to your terminal console:

```
$ npm start

> monome-electron-live@0.1.0 start
> electron .

Connected to monome 128 m123456789 on localhost:10706
Bar: 1 Beat: 1 16th Note: 1
Bar: 1 Beat: 1 16th Note: 2
Bar: 1 Beat: 1 16th Note: 3
Bar: 1 Beat: 1 16th Note: 4
Bar: 1 Beat: 2 16th Note: 1
...
```

## Code Updates for Step 3

### `./main.js`

There is only a single line addition. Add the `daw.follow();` statement below to the post-grid connection handler.

```js
  daw.connectToGrid().then((msg) => {
    console.log(msg);
    daw.follow();
  });
```

### `./app/model/ableton_live.js`

This allows Live to send a MIDI clock to the Electron app. In the code below, the MIDI connection is established in the `AbletonLive` class's constructor. The `follow()` method will then process MIDI clock ticks.

The sequencer controller will have a 16th note resolution, therefore it only needs to process every 6th MIDI tick.

```js
const easymidi   = require("easymidi");
const MonomeGrid = require("./monome_grid");


/**
 * The super measure is defined as the number of measures to use before all active sequences resynchronize.
 */
const SUPER_MEASURE = 4;


class AbletonLive {
  // 16n step count
  step = 0;


  constructor() {
    this.controller = new MonomeGrid(this);
    this.midiIn     = new easymidi.Input("monome in", true);
  }


  async connectToGrid() {
    const msg = await this.controller.connect();
    return msg;
  }


  async follow() {
    this.midiIn.on("clock", () => {
      this.ticks++;
      // 6 MIDI clock ticks equals a 16th note.
      if (this.ticks % 6 != 0) return;

      console.log(
        "Bar: " + (Math.floor(this.step / 16) + 1) +
        " Beat: " + (Math.floor(this.step / 4) % 4 + 1) +
        " 16th Note: " + (this.step % SUPER_MEASURE + 1)
      );

      this.step = this.step == SUPER_MEASURE * 16 - 1 ? 0 : this.step + 1;
    });

    this.midiIn.on("start", () => {
    });

    this.midiIn.on("position", (data) => {
      if (data.value != 0) return;

      this.ticks = 0;
      this.step  = 0;
    });
  }
}


module.exports = AbletonLive;
```
