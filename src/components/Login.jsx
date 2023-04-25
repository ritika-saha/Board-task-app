import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
align-items: center;
height: 100vh;
overflow: hidden;
object-fit: contain;
`
const Left=styled.div`
display: flex;
flex: 40.83%;
height: 100vh;
background-color: black;
`
const Right=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 59.17%;
height: 100%;
background-color: #F5F5F5;
`

const Title=styled.div`
  color: white;
  font-weight: 72;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex: 1;
  font-size: 3.7rem;
  position: absolute;
  top: 50%;
  margin-left: 10%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    position: static;
    font-size: 2.5rem;
    margin: 20px;
  }
`

const Login = () => {
  return (
    <Container>
        <Left>
            <Title>Board.</Title>
        </Left>
        <Right>
          <CardContain>
          <Signin>Sign In</Signin>
          <SignText>Sign in to your account</SignText>
          <Account>
            <Google></Google>
            <Apple></Apple>
          </Account>
          <Card>

          </Card>
          <Register></Register>
          </CardContain>
        </Right>
    </Container>
  )
}

export default Login