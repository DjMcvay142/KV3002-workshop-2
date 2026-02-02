def tone_startup():
    #Beep One
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(100)

    #Beep Two
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digital_write_pin(DigitalPin.P0,  0)
    basic.pause(100)

    #Beep Three 
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(300)
    pins.digital_write_pin(DigitalPin.P0, 0)


def tone_transmit():
    #Two Quick Beeps
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P0, 0)



def tone_warning ():
    #Alternate Pattern
    for x in range(3):
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P0, 0)
    

def tone_critical():
    #Rapid Beeps
    for x in range(5):
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(50)
        pins.digital_write_pin(DigitalPin.P0, 0)

def on_button_pressed_a():
    tone_startup()

def on_button_pressed_b():
    tone_transmit()

def on_button_pressed_ab():
    tone_warning()