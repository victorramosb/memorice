import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import * as React from 'react'

/*
const deck = [
   '0',  '1',  '2',  '3',  '4',  '5',  '6',  '7',  '8',  '9',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
]

// const [shuffledCards, setshuffledCards] = React.useState([])
// console.log(Math.floor(Math.random() * len))
*/

const cardImages = [ // pngtree.com
  {'id':'1', 'src':'./img/back.png'},
  {'id':'2', 'src':'./img/rain.png'},
  {'id':'3', 'src':'./img/zap.png'},
];

const initialHand = [];
const initialDeck = [
  {'n':'0'},{'n':'1'},{'n':'2'},{'n':'3'},{'n':'4'},
  {'n':'5'},{'n':'6'},{'n':'7'},{'n':'8'},{'n':'9'}
];

export default function App() {
  const [turn, setTurn] = React.useState()
  // const [deck, setDeck] = React.useState(initialDeck)
  const [deck, setDeck] = React.useState(/* cardImages */
  [{'id':'1', 'src':'./img/cloud.png'},
   {'id':'2', 'src':'./img/rain.png'},
   {'id':'3', 'src':'./img/zap.png'},]
  )
  const [hand, setHand] = React.useState(initialHand)
  const [shuffledCards, setShuffledCards] = React.useState([])

  const {containerStyle,gridStyle,cardStyle, imageStyle} = styles

  React.useEffect(() => {
    console.log('deck: ', deck);
  }, deck)

  const shuffleCards = () => {
    console.log('/////////////////////////////////////////////////////////')
    setShuffledCards([])
    const sCards  = []
    const nsCards = []
    nsCards.push(...deck)
    // nsCards.push(...deck, ...deck)
    // console.log('nsCards: ', nsCards)    
    // console.log(' sCards: ',  sCards)
    // console.log('shuffle!!!')

    while (nsCards.length > 0) {
      const num = Math.floor(Math.random() * nsCards.length)
      sCards.push( nsCards.splice(num,1)[0] )
    }

    // console.log('        nsCards: ', nsCards)    
    console.log('shuffledCards: ', shuffledCards)
    setShuffledCards(sCards)
    console.log('shuffledCards: ', shuffledCards)
  }
  
  return (
    <View style={containerStyle}>

      <Button title='SHUFFLE!'
        onPress={() => shuffleCards()}/>

      <View /* style={gridStyle} */>
        {shuffledCards.map(card => { 
          console.log('card: ', card)
          return(
          <View key={card.id}>
            {/* <Image style={imageStyle} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} /> */}

            {/* <Image style={imageStyle} source={require('./img/back.png')}/> */}
            {/* <Image style={imageStyle} source={{ uri: './img/back.png' }} /> */}

            {/* <Image style={imageStyle} source={{ uri: card.src }} alt={card.src}/> */}
            {/* <Image style={imageStyle} src={card.src} alt={card.src}/> */}
            <Text>{card.src}</Text>


          </View>
        )})}
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle:{},
  gridStyle:{},
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 75,
    alignSelf: 'flex-end',
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
