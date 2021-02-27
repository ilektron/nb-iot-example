input.onButtonPressed(Button.A, function () {
    wappsto.sendNumberToWappsto(input.temperature(), 1, WappstoTransmit.OnChange)
    basic.showIcon(IconNames.Yes)
})
wappsto.configureApn("iot.nb")
basic.showIcon(IconNames.Chessboard)
basic.pause(500)
basic.showIcon(IconNames.Square)
basic.pause(500)
wappsto.configureName("Test Application")
wappsto.configureValue(1, "Temperature", WappstoValueTemplate.Number)
basic.forever(function () {
    if (wappsto.connected()) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(2000)
})
