/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved
//
// Created by: Mr. Coxall
// modified by: Madeleine Forgeron
// Created on: May 2022
// This is the Game Scene

// define variables
class GameScene extends Phaser.Scene {

  // create an alien
  createAlien() {
    const alienXLocation = Math.floor(Math.random() * 1920) + 1
    let alienXVelocity = Math.floor(Math.random() * 50) + 1
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien')
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }

  // this is this preload part
  constructor () {
    super({ key: 'gameScene' })

    this.background = null
    this.ship = null
    this.fireMissile = false
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }

    this.gameOverText = null
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center'}
  }

  // background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  //image and sound
  preload () {
    console.log('GameScene')

    // images
    this.load.image('park_game_background', 'assets/park_game_background.png')
    this.load.image('ship', 'assets/man_walking_dog.png')
    this.load.image('missile', 'assets/tennis_ball.png')
    this.load.image('alien', 'assets/baby_sprite.v3.png')
    this.load.image('dog', 'assets/dead_dog.webp')
    // sounds
    this.load.audio('laser', 'assets/laser1.wav')
    this.load.audio('explosion', 'assets/barrelExploding.wav')
    this.load.audio('bomb', 'assets/bomb.wav')
  }

  // image position
  create (data) {
    // background
    this.background = this.add.image(0, 0, 'park_game_background').setScale(4.5)
    this.background.setOrigin(0, 0)

    // score
    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)

    //ship
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    //missle
    this.missileGroup = this.physics.add.group()

    //alien
    this.alienGroup = this.add.group()
    this.createAlien()

    // colllisions between missiles and aliens
    this.physics.add.collider(this.missileGroup, this.alienGroup, function (missileCollide, alienCollide) {
      alienCollide.destroy()
      missileCollide.destroy()
      this.sound.play('explosion')
      this.score = this.score + 2
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createAlien()
      this.createAlien()
    }.bind(this))

    // colllisions between ship and aliens
    this.physics.add.collider(this.ship, this.alienGroup, function (shipCollide, alienCollide) {
      this.sound.play('bomb')
      this.physics.pause()
      alienCollide.destroy()
      shipCollide.destroy()
      this.score = 0
      this.background = this.add.image(1920 / 2, 1080 / 2, 'dog')
      this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Game Over... you have killed your dog\n HOW COULD YOU DO THIS YOU MONSTER!!!!!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)
      this.gameOverText.setInteractive({ useHandCursor: true})
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
    }.bind(this))
  }

  // time on screen and movement
  update (time, delta){ 

    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')

    // left key movement
    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }

    // right key movement
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    // space key movement
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile w/sound
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
        this.missileGroup.add(aNewMissile)
        this.sound.play('laser')
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 0)
        item.destroy()
    })
    // alien loop
     this.alienGroup.children.each(function (item) {
      if (item.y > 1080) {
        item.y = -10
        item.x = Math.floor(Math.random() * 1920 + 1)
      }
    })
  }
}

export default GameScene
  