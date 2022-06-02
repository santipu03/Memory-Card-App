import styled from 'styled-components'

export default function Card (props) {
  return (
    <CardContainer onClick={() => props.onCardClicked(props.id)}>
      <div>
        <ImgContainer src={props.img} alt='cardPhoto'></ImgContainer>
      </div>
      <span>{props.name}</span>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  background-color: #ccc;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  & > div {

  }
`

const ImgContainer = styled.img`
  object-fit: cover;
  height: 100px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #000;
`