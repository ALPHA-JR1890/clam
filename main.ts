hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 5) {
        hummingbird.setPositionServo(FourPort.One, 90)
        basic.pause(1000)
    } else {
        hummingbird.setPositionServo(FourPort.One, 0)
    }
})
