/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved
//
// Created by: Mr. Coxall
// modified by: Madeleine Forgeron
// Created on: May 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }
  
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  preload () {
    console.log('Splash Scene')
  }

  create (data) {
  }

  updata (time, delta){ 
  }
}

export default SplashScene
  