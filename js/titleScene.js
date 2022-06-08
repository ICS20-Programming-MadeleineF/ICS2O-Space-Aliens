/* global Phaser */

// Copyright (c) 2020 Mr. Coxall all rights reserved
//
// Created by: Mr. Coxall
// modified by: Madeleine Forgeron
// Created on: May 2022
// This is the Title Scene

// define variables
class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center'}
  }

  // background colour
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  //images and sound
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', "assets/park_screen.jpg")
  }

  // image position
  create (data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Protect the Dog', this.titleSceneTextStyle).setOrigin(0.5)
  }

  // time on screen
  update (time, delta){ 
    if (time > 6000) {
    this.scene.switch('menuScene')
    }
  }
}

export default TitleScene
  