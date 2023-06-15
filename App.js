import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import * as React from 'react'
import SingleCard from './components/Card';

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
  // const [deck, setDeck] = React.useState(initialDeck) /* cardImages */
  const [deck, setDeck] = React.useState(
  [{'id':'1', 'src':'../img/cloud.png'},
   {'id':'2', 'src':'../img/rain.png'},
   {'id':'3', 'src':'../img/zap.png'},
   {'id':'4', 'src':'../img/tree.png'},
   {'id':'5', 'src':'../img/cloud.png'},
   {'id':'6', 'src':'../img/rain.png'},
   {'id':'7', 'src':'../img/zap.png'},
   {'id':'8', 'src':'../img/tree.png'},]

  )
  const [shuffledCards, setShuffledCards] = React.useState([])
  const [choiceOne, setChoiceOne] = React.useState(null)
  const [choiceTwo, setChoiceTwo] = React.useState(null)

  const { containerStyle, buttonContainerStyle, gridStyle } = styles

  React.useEffect(() => {
    console.log('choiceOne: ', choiceOne);
    console.log('choiceTwo: ', choiceTwo);


  }, [deck, choiceOne, choiceTwo])

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
  
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  return (
    <View style={containerStyle}>
      <View style={buttonContainerStyle}>
        <Button title='NEW GAME!' onPress={() => shuffleCards()}/>
      </View>

      <View style={gridStyle}>
        {shuffledCards.map(card => {

          console.log('card: ', card)
          return <SingleCard  key={ card.id } card={ card } handleChoice={ handleChoice }/>
          
        })}
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  gridStyle: {
    flex: 4,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#0ff',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  buttonContainerStyle: {
    flex: 1,
    backgroundColor: '#ff0',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
