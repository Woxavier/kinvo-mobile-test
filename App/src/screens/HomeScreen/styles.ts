import styled from 'styled-components/native'
import colors from '../../shared/styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.gray};
  align-items: center;
`
export const Header = styled.View`
  height: 120px;
  background-color: #fff;
  width: 100%;
  padding: 30px;
  justify-content: center;
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.purple};
  font-size: 25px;
`
