/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved
//
// Created by: Mr. Coxall
// modified by: Madeleine Forgeron
// Created on: May 2022
// This file is the phaser3 configuration file

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'
import GameScene from './gameScene.js'

// Our splash scene
const splashScene = new SplashScene()

// Our tital scene
const titleScene = new TitleScene()

// Our menu scene
const menuScene = new MenuScene()

//Our game scene
const gameScene = new GameScene()


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
  backgroundColor: 0xffffff,
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
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)
game.scene.add('gameScene', gameScene)


// start title
game.scene.start('splashScene')
