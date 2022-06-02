import styled from 'styled-components'

export default function Score ({currentScore, bestScore}) {
  return (
    <ScoreContainer>
      <div>Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
    </ScoreContainer>
  )
}

const ScoreContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: space-around;
  border-radius: 5px;
  padding: 15px 30px;
  margin-bottom: 20px;
  background-color: #333;
  color: #fff;

`