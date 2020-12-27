input.onButtonPressed(Button.A, function () {
    if (Ship > 0) {
        led.unplot(Ship, 4)
        Ship += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Ship < 4) {
        led.unplot(Ship, 4)
        Ship += 1
    }
})
let Ship = 0
let Level_0 = 5
let Level_1 = 5
let Level_2 = 5
let Level_3 = 5
let Level_4 = 5
let Score = 0
let Crash = false
Ship = 2
let Speed = 500
while (Crash == false) {
    led.plot(Level_4, 0)
    led.plot(Level_3, 1)
    led.plot(Level_2, 2)
    led.plot(Level_1, 3)
    led.plot(Level_0, 4)
    led.plotBrightness(Ship, 4, 125)
    basic.pause(Speed)
    led.unplot(Level_4, 0)
    led.unplot(Level_3, 1)
    led.unplot(Level_2, 2)
    led.unplot(Level_1, 3)
    led.unplot(Level_0, 4)
    Level_0 = Level_1
    Level_1 = Level_2
    Level_2 = Level_3
    Level_3 = Level_4
    Level_4 = randint(0, 9)
    if (Ship == Level_0) {
        Crash = true
    }
    Speed += -2
    Score += 1
}
basic.showString("Crash! Score")
basic.showNumber(Score)
