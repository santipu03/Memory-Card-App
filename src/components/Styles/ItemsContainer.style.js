import styled from 'styled-components'

export const ItemsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: 350px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;

  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`
