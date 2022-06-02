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
  const [score, setScore] = useState({
    currentScore: 0,
    bestScore: 0
  })

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

  const handleCardClick = (id) => {
    // checkear que haya clickado en un elemento que antes no se ha clickado, sino reseteamos puntos
    // en caso de positivo, hacemos shuffle a las cards y actualizamos score
    // sumar un punto en score y checkear que el bestScore sea más alto
    setCardsArray(prevState => {
      const newArray = prevState.map(item => {
        if (item.id === id) {
          return {...item, isClicked: !item.isClicked}
        }
        return item
      })
      return newArray
    })

    setScore(prevState => ({
      ...prevState,
      currentScore: prevState.currentScore++,
    }))

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
      currentScore={score.currentScore}
      bestScore={score.bestScore}
    />
    <ItemsContainer>
      {cardItems}
    </ItemsContainer>
    </MainContainer>
  )
}  