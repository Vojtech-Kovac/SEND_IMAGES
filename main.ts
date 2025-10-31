input.onButtonPressed(Button.A, function () {
    radio.sendString("01010")
    basic.pause(50)
    radio.sendString("11111")
    basic.pause(50)
    radio.sendString("00000")
    basic.pause(50)
    radio.sendString("11111")
    basic.pause(50)
    radio.sendString("01010")
    basic.showString("S")
})
radio.onReceivedString(function (receivedString) {
    if (y < 5) {
        for (let x = 0; x <= 4; x++) {
            if (x < receivedString.length && receivedString.substr(x, 1) == "1") {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
        }
        y += 1
    }
    if (y == 5) {
        // po vykreslení reset
        y = 0
    }
})
let y = 0
radio.setGroup(7)
