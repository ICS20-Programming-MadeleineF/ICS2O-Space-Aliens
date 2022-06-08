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
  }

  // background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  //images and sound
  preload () {
    console.log('Game Scene')

    this.load.image('park_game_background', 'assets/park_game_background.png')
    this.load.image('ship', 'assets/spaceShip.png')
  }

  // image position
  create (data) {
    this.background = this.add.image(0, 0, 'park_game_background').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')
  }

  // time on screen
  update (time, delta){ 
  }
}

export default GameScene
  