import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity} from 'react-native';
import * as React from 'react'

export default function SingleCard({ card, handleChoice, block }) {
  const { cardStyle, frontStyle, backStyle, flippedStyle, noStyle } = styles
  const { matched, src, flipped, index } = card

  const handleTouch = () => {
    // console.log('CARD: ', card)
    handleChoice({ matched, src, index })
  }

  if (flipped) {
    return <View style={ cardStyle }>
      <Image style={ frontStyle } source={ src } />
    </View>
  } else if (block) {
    return <View style={ cardStyle }>
      <Image style={ backStyle  } source={ require('../img/back.png')  }/>
    </View>    
  } else {
    return <View style={ cardStyle }>
      <TouchableOpacity onPress={() => { handleTouch() }}>
        <Image style={ backStyle  } source={ require('../img/back.png')  }/>
      </TouchableOpacity>
    </View>
  }
  
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#0f0',
    alignSelf: 'center',
    position: 'relative',
  },
  flippedStyle: {
    transform: [{rotateY: '0deg'}],
  },
  noStyle: {
    position: 'absolute',
    transform: [{rotateY: '90deg'}],
  },
  frontStyle: {
    width: 70,
    height: 70,
    backgroundColor: '#f00',
  },
  backStyle: {
    width: 70,
    height: 70,
    backgroundColor: '#f00',
  },
});

    // borderRadius: 75,