import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity} from 'react-native';
import * as React from 'react'

export default function SingleCard({ card, handleChoice }) {
  const { cardStyle, imageStyle } = styles
  const { id, src } = card

  const handleTouch = () => {
    // console.log('CARD: ', card)
    handleChoice(card)
  }

  return (
    <TouchableOpacity
      onPress={() => { handleTouch() }}
      style={ cardStyle }
    >

      {/* <Image style={ imageStyle} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} /> */}
      {/* <Image style={ imageStyle} source={ require('./img/back.png') }/> */}
      {/* <Image style={ imageStyle} source={{ uri: './img/back.png' }} /> */}
      {/* <Image style={ imageStyle} src={ card.src} /> */}
      {/* <Image style={ imageStyle} source={ require('./img/zap.png') }/> */}

      <Image style={ imageStyle } source={{ uri: src }}/>
      <Image style={ imageStyle } source={ require('../img/back.png')  }/>
      {/* <Text>{src}</Text> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#0f0',
    alignSelf: 'center',
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 75,
    backgroundColor: '#f00',
  },
});