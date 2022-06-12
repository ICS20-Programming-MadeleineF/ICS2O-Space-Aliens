/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved
//
// Created by: Mr. Coxall
// modified by: Madeleine Forgeron
// Created on: May 2022
// This is the Game Scene

// define variables
class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })

    this.background = null
    this.ship = null
    this.fireMissile = false
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
    // sounds
    this.load.audio('laser', 'assets/laser1.wav')
  }

  // image position
  create (data) {
    // background
    this.background = this.add.image(0, 0, 'park_game_background').setScale(4.5)
    this.background.setOrigin(0, 0)

    //ship
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    //missle
    this.missileGroup = this.physics.add.group()
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
  }
}

export default GameScene
  