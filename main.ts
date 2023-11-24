basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.analogWritePin(AnalogPin.P1, 794)
    } else if (input.buttonIsPressed(Button.B)) {
        pins.analogWritePin(AnalogPin.P1, 0)
    } else {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
