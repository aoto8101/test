basic.show_icon(IconNames.YES)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P8) == 1:
        basic.show_leds("""
            # . . . #
            # # . # #
            # . # . #
            # . # . #
            # . . . #
            """)
    else:
        basic.show_icon(IconNames.YES)
basic.forever(on_forever)
