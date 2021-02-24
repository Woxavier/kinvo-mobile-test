import styled from 'styled-components/native'
import colors from '../../utils/colors'

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: ${colors.gray};
`

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px 20px;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const Div = styled.View`
  margin-top: 30px;
  width: 100%;
  height: 1px;
  background-color: ${colors.lightGrey};
`
