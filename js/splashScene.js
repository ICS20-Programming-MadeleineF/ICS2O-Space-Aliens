/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved
//
// Created by: Mr. Coxall
// modified by: Madeleine Forgeron
// Created on: May 2022
// This is the Splash Scene

// define variables
class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  // background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  //images and sound
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }

  // image position
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  // time on screen
  update (time, delta){ 
    if (time > 5000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene
  