controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)
    music.knock.play()
    animation.runImageAnimation(
    myHammer,
    assets.animation`hammerAnimation`,
    50,
    false
    )
})
let myHammer: Sprite = null
let myMole: Sprite = null
game.showLongText("Jugador 1: Usa las flechas para mover el martillo. Jugador 2: Presiona A para mover el topo", DialogLayout.Center)
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Med)
carnival.startCountdownGame(30, carnival.WinTypes.Multi)
carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom)
game.onUpdateInterval(500, function () {
    simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)
})
