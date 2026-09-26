input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Happy)
    music.play(music.stringPlayable("C5 C5 B B A F E E ", 500), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        . # # # #
        . # . . .
        . . # . .
        `)
    music.play(music.stringPlayable("C5 A E C5 F F C5 B ", 500), music.PlaybackMode.UntilDone)
})
radio.onReceivedString(function (receivedString) {
    Alarm()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Theif")
    Alarm()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # .
        . . . # .
        . . # . .
        `)
    music.play(music.stringPlayable("C5 F G G A F B C5 ", 500), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Sad)
    music.play(music.stringPlayable("C5 C5 E C5 A F C5 E ", 500), music.PlaybackMode.UntilDone)
})
function Alarm () {
    basic.showIcon(IconNames.Heart)
    music.play(music.stringPlayable("C5 C5 C5 B A F B A ", 500), music.PlaybackMode.UntilDone)
}
radio.setGroup(1)
