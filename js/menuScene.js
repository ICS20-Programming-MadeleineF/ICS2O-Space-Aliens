/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved
//
// Created by: Mr. Coxall
// modified by: Madeleine Forgeron
// Created on: May 2022
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  }
  
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  preload () {
    console.log('Menu Scene')
  }

  create (data) {
  }

  update (time, delta){ 
  }
}

export default MenuScene
  