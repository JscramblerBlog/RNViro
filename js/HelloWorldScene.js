"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroScene,
  ViroText,
  ViroImage,
  Viro360Image,
  ViroAnimations
} from "react-viro";

ViroAnimations.registerAnimations({
  animateImage: {
    properties: { scaleX: 2, scaleY: 0.8 },
    easing: "EaseIn",
    duration: 3000
  }
});

export default class HelloWorldScene extends Component {
  constructor() {
    super();

    this.state = {
      runAnimateImage: false
    }; // Set initial state here
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ runAnimateImage: true });
    }, 5000);
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require("./res/360_park.jpg")} />
        <ViroImage
          height={1}
          width={1}
          position={[0, 3, -4]}
          source={require("./res/logo-jscrambler.jpeg")}
          animation={{ name: "animateImage", run: this.state.runAnimateImage }}
        />
        <ViroText
          text="Protect the client side!"
          width={6}
          height={5}
          position={[0, 1, -2]}
          style={styles.helloWorldTextStyle}
          outerStroke={{ type: "Outline", width: 8, color: "#333" }}
        />
      </ViroScene>
    );
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

module.exports = HelloWorldScene;
