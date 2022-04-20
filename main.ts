/**
 * Sert à déterminer l'intensité lumineuse ambiante, on ajuste alors le 120 du code ci-dessous.
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
/**
 * Le del allumé ne fait qu'indiquer que le Microbit travaille
 */
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
/**
 * Le 120 doit être trouvé en appuyant sur le bouton A (voir code ci-haut)
 * 
 * On envoie le nombre 0 pour signaler aux autres Microbit de commencer à compter le temps.
 * 
 * Le sourire averti que tout va bien
 * 
 * On change de groupe de communication pour être certain que le Microbit de départ n'envoie plus de signal. On choisi un groupe parmi les 255 possibles.
 */
basic.forever(function () {
    // Modifier la valeur de l'intensité lumineuse en fonction  de vos tests.
    if (input.lightLevel() < 120) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.Happy)
        radio.setGroup(40)
    }
})
