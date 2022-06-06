/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved
//
// Created by: Mr. Coxall
// modified by: Madeleine Forgeron
// Created on: May 2022
// This file is the phaser3 configuration file

import SplashScene from './splashScene.js'

// Our game scene
const splashScene = new SplashScene()

// const

// background const
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade' ,
    arcade: {
      debug: true
    }
  },
// background colour
  backgroundColor: 0x5f6e7a ,
// center background
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scene
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)

// start title
game.scene.start('splashScene')
