import React, { useState } from 'react'
import Score from './Score'
import { ItemsContainer } from './Styles/ItemsContainer.style'
import styled from 'styled-components'
import Card from './Card'
import uniqid from 'uniqid'
import victor from '../assets/victor.jpg'
import Willy from '../assets/willy.jpg'
import Auron from '../assets/auron.jpg'
import Ibai from '../assets/ibai.png'
import Rubius from '../assets/rubius.jpg'
import Trump from '../assets/trump.jpeg'
import Nassim from '../assets/nassim.jpg'
import Elon from '../assets/elon.jpeg'
import Tarantino from '../assets/tarantino.jpeg'
import Leonardo from '../assets/leonardo.jpg'
import Brad from '../assets/brad.jpg'
import Edward from '../assets/edward.jpg'

export default function Main (props) {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [cardsArray, setCardsArray] = useState([
    {
      name: 'Invicthor',
      image: victor,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Willy',
      image: Willy,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Auron',
      image: Auron,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Ibai',
      image: Ibai,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Rubius',
      image: Rubius,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Trump',
      image: Trump,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Leonardo Di Caprio',
      image: Leonardo,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Tarantino',
      image: Tarantino,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Nassim Taleb',
      image: Nassim,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Elon Musk',
      image: Elon,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Edward Norton',
      image: Edward,
      isClicked: false,
      id: uniqid()
    },
    {
      name: 'Brad Pitt',
      image: Brad,
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
    setCardsArray((prevState) => {
      for (let i = prevState.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[prevState[i], prevState[j]] = [prevState[j], prevState[i]]
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
    setCardsArray((prevState) => {
      const newArray = prevState.map((item) => {
        return {
          ...item,
          isClicked: false
        }
      })
      return newArray
    })
  }

  const handleCardClick = (id) => {
    setCardsArray((prevState) => {
      const newArray = prevState.map((item) => {
        if (item.id === id) {
          if (item.isClicked) {
            resetGame()
            return item
          } else {
            addOneToScore()
            return { ...item, isClicked: true }
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
      <Score currentScore={currentScore} bestScore={bestScore} />
      <ItemsContainer>{cardItems}</ItemsContainer>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  min-height: calc(100vh - 120px);
  padding: 20px;
`
