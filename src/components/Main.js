import React, { useState } from "react"
import Score from "./Score"
import { ItemsContainer } from "./Styles/ItemsContainer.style"
import { MainContainer } from "./Styles/MainContainer.style"
import Card from "./Card"
import uniqid from 'uniqid'
import victor from '../assets/victor.png'
import Willy from '../assets/willyrex.png'
import Auron from '../assets/auron.jpg'
import Ibai from '../assets/ibai.jpg'
import Rubius from '../assets/rubius.jpg'
import Trump from '../assets/trump.jpg'

export default function Main (props) {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [cardsArray, setCardsArray] = useState([
    {
      name: 'Invicthor',
      image: victor,
      isClicked: false,
      id: uniqid()
    },{
      name: 'Willy',
      image: Willy,
      isClicked: false,
      id: uniqid()
    },{
      name: 'Auron',
      image: Auron,
      isClicked: false,
      id: uniqid()
    },{
      name: 'Ibai',
      image: Ibai,
      isClicked: false,
      id: uniqid()
    },{
      name: 'Rubius',
      image: Rubius,
      isClicked: false,
      id: uniqid()
    },{
      name: 'Trump',
      image: Trump,
      isClicked: false,
      id: uniqid()
    }
  ])

  const resetGame = () => {
    console.log('reset game')

    setCurrentScore(0)
    resetClicks()
  }

  const shuffleCards = () => {
    setCardsArray(prevState => {
      for (let i = prevState.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [prevState[i], prevState[j]] = [prevState[j], prevState[i]];
      }
      return prevState
    })
    
  }

  const addOneToScore = () => {
    if (bestScore > currentScore) {
      setCurrentScore(currentScore + 1)
    } else {
      setCurrentScore(currentScore + 1)
      setBestScore(bestScore + 1)
    }
  }

  const resetClicks = () => {
    setCardsArray(prevState => {
      const newArray = prevState.map(item => {
        return {
          ...item, 
          isClicked: false
        }
      })
      return newArray
    })
  }
  
  const handleCardClick = (id) => {
    setCardsArray(prevState => {
      const newArray = prevState.map(item => {
        if (item.id === id) {
          if (item.isClicked){
            resetGame()
            return item
          } else {
            addOneToScore()
            return {...item, isClicked: true}
          }
        }
        return item
      })
      shuffleCards()
      return newArray
    })
  }

  const cardItems = cardsArray.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      name={item.name}
      img={item.image}
      isClicked={item.isClicked}
      onCardClicked={handleCardClick}
    />
  ))

  return (
    <MainContainer>
    <Score 
      currentScore={currentScore}
      bestScore={bestScore}
    />
    <ItemsContainer>
      {cardItems}
    </ItemsContainer>
    </MainContainer>
  )
}  