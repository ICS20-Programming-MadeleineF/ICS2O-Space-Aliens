/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved
//
// Created by: Mr. Coxall
// modified by: Madeleine Forgeron
// Created on: May 2022
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
  }
  
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  preload () {
    console.log('Game Scene')
  }

  create (data) {
  }

  update (time, delta){ 
  }
}

export default GameScene
  