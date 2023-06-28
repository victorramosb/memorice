import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native'
import * as React from 'react'
import SingleCard from './components/Card'

const initialDeck = [
  { matched: false, src: require('./img/cloud.png')},
  { matched: false, src: require('./img/rain.png') },
  { matched: false, src: require('./img/zap.png')  },
  { matched: false, src: require('./img/tree.png') },
  { matched: false, src: require('./img/cloud.png')},
  { matched: false, src: require('./img/rain.png') },
  { matched: false, src: require('./img/zap.png')  },
  { matched: false, src: require('./img/tree.png') },
]

export default function App() {
  const [     deck,      setDeck] = React.useState([]/* initialDeck */)
  const [     turn,      setTurn] = React.useState(0)
  const [choiceOne, setChoiceOne] = React.useState(null)
  const [choiceTwo, setChoiceTwo] = React.useState(null)
  const [   winCon,    setWinCon] = React.useState(initialDeck.length)

  const { containerStyle, buttonContainerStyle, gridStyle } = styles

  React.useEffect(() => {
    console.log('/////////////////////////////////////////////////////////')
    // console.log('turn: ', turn)
    // console.log('choiceOne: ', choiceOne)
    
    if (choiceOne && choiceTwo) {
      // console.log('choiceTwo: ', choiceTwo)
      if (choiceOne.src === choiceTwo.src) {
        console.log('MATCH!!!')
        setWinCon(winCon-2)
        // console.log('choiceOne.index: ', choiceOne.index)
        // console.log('choiceTwo.index: ', choiceTwo.index)
        // console.log('deck: ', deck)
        const auxCards = deck
        auxCards[choiceOne.index].matched = true
        auxCards[choiceTwo.index].matched = true
        setDeck(auxCards)
        resetTurn()
      } else {
        console.log('NO match :(')
        setTimeout(() => { resetTurn() }, 1000);
      }
      
    }
  }, [choiceOne, choiceTwo])

  const shuffleCards = () => {
    setTurn(0)
    setChoiceOne(null)
    setChoiceTwo(null)
    setDeck([])
    setWinCon(initialDeck.length)
    const sCards  = []
    const nsCards = []
    nsCards.push(...initialDeck)
    let index = 0
    while (nsCards.length > 0) {
      const num = Math.floor(Math.random() * nsCards.length)
      sCards.push({ ...nsCards.splice(num,1)[0] , index })
      index++
    }
    setDeck(sCards)
  }
  
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn(turn+1)
  }

  const renderWin = () => {
    console.log('winCon: ', winCon);
    if (winCon===0) return <View><Text>YOU WIN</Text></View>
  }

  return (
    <View style={containerStyle}>
      <View style={buttonContainerStyle}>
        <Button title='NEW GAME!' onPress={() => shuffleCards()}/>
      </View>

      { renderWin() }
      
      <View style={gridStyle}>
        {deck.map( (card /* , index */)=> {
          // console.log('card     : ', card)
          let flipped = false
          let block = false
          if (choiceOne) {
            if ( card.index===choiceOne.index ) {
              // console.log('flip!!!!')
              flipped = true
            }
          }
          if (choiceTwo) {
            block = true
            if ( card.index===choiceTwo.index ) {
              // console.log('flip!!!!')
              flipped = true
            }
          }
          if (card.matched) {
            // console.log('flip!!!!')
            flipped = true
          }

          return <SingleCard
            key={ card.index }
            handleChoice={ handleChoice }
            card={{ ...card, flipped }}
            block={ block }
          />
          
        })}
      </View>

      

      <StatusBar style='auto' />
    </View>
  )
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
})
