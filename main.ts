function tone_startup() {
    // Beep One
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    // Beep Two
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    // Beep Three 
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P0, 0)
}

function tone_transmit() {
    // Two Quick Beeps
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
}

function tone_warning() {
    // Alternate Pattern
    for (let x = 0; x < 3; x++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
}

function tone_critical() {
    // Rapid Beeps
    for (let x = 0; x < 5; x++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
}

function on_button_pressed_a() {
    tone_startup()
}

function on_button_pressed_b() {
    tone_transmit()
}

function on_button_pressed_ab() {
    tone_warning()
}

