input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(wappsto.signalQuality())
    basic.pause(1000)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
    wappsto.sendNumberToWappsto(input.temperature(), 1)
    wappsto.sendNumberToWappsto(wappsto.signalQuality(), 2)
    wappsto.sendNumberToWappsto(wappsto.uptime(), 3)
})
wappsto.configureApn("iot.nb")
basic.showIcon(IconNames.Chessboard)
basic.pause(500)
wappsto.configureName("Trailer Monitor")
wappsto.configureValue(1, "Temperature", WappstoValueTemplate.Number)
wappsto.configureValue(2, "Signal", WappstoValueTemplate.Number)
wappsto.configureValue(3, "Uptime", WappstoValueTemplate.Number)
wappsto.sendNumberToWappsto(input.temperature(), 1)
wappsto.sendNumberToWappsto(wappsto.signalQuality(), 2)
wappsto.sendNumberToWappsto(wappsto.uptime(), 3)
basic.forever(function () {
    if (wappsto.connected()) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(1000)
})
basic.forever(function () {
    wappsto.sendNumberToWappsto(input.temperature(), 1, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(wappsto.signalQuality(), 2, WappstoTransmit.OnChange)
    wappsto.sendNumberToWappsto(wappsto.uptime(), 3, WappstoTransmit.OnChange)
    basic.pause(300000)
})
