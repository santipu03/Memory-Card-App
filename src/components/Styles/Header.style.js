import styled from 'styled-components'

export const Header = styled.header`
  height: 80px;
  background-color: ${({ theme }) => theme.colors.headerFooter};
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  align-items: center;
`
