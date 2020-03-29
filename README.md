# ServoInterface

## Programming Systems Mid Term Project

![servo](https://i.ytimg.com/vi/CA1U2yCq8EI/maxresdefault.jpg)

- To move an SG90 servo using an interface from a computer. 
- Yes. That's it.

## Usage

- Clone, install, run.

```bash
git clone https://github.com/jorgecontrerasostos/servointerface.git
cd servointerface
npm install
##idk, wait
```

## Dependencies

### Arduino Uno Board:

As stated in the [Getting Started wiki](https://github.com/rwaldron/johnny-five/wiki/Getting-Started), you must flash this firmware to the board.

> **Packaged**
> - Install `arduino` package on your operating system ).
> - Make a `firmware` folder and save [this firmware.ino](https://github.com/firmata/arduino/blob/master/examples/StandardFirmataPlus/StandardFirmataPlus.ino) into it. if the link is dead again and not appearing in the Arduino IDE, use [this gist backup](https://gist.github.com/cookiengineer/4f292c952209e0f74d4c18b995dac855).
> - Install arduino libraries via `arduino --install-library "Firmata,Servo"` in the Terminal.
> - Flash the arduino board via `arduino --board "arduino:avr:uno" --upload ./path/to/firmware/firmware.ino`. Remember to change your board according to what you use. See below on how to figure out that identifier.
> - If the upload was successful, the board is now prepared for johnny-five usage.

- About node, these are the modules.

```bash
npm install johnny-five --save 
npm install express --save 
```

