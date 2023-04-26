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
const CardContain=styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  float: left;
  
  justify-content: space-between;
  background-color: #F5F5F5;
`
const Signin=styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 151.88%;
  font-weight: 700;
  margin-bottom: 4px;
`
const SignText=styled.div`
  font-family: 'Lato', sans-serif;
  margin-bottom: 15px;
  color: ${props=>props.yes?'#346BD4':'black'};
  color: ${prop=>prop.grey?'#858585':'black'};
`
const Account=styled.div`
margin-bottom: 15px;
display: flex;
justify-content: space-between;
width: 100%;
`
const Google=styled.button`
font-family: 'Montserrat', sans-serif;
font-size: 12px;
width: 180px;
height: 30px;
background-color: #ffffff;
display: flex;
align-items: center;
text-align: center;
color: #858585;
padding: 6px;
border: none;
border-radius: 8px;
cursor: pointer;
`
const Apple=styled.button`
cursor: pointer;
font-family: 'Montserrat', sans-serif;
font-size: 12px;
width: 180px;
height: 30px;
background-color: #ffffff;
display: flex;
align-items: center;
text-align: center;
color: #858585;
padding: 6px;
border: none;
border-radius: 8px;
justify-content: space-around;
`

const Image=styled.img`
width: 56px;
height: 40px;
margin-left: -10px;
`
const Image2=styled.img`
  width: 20px;
height: 20px;
margin-left: -10px;

`

const Card=styled.div`
width: 355px ;


display: flex;
flex-direction: column;
align-items: start;
float: left;
padding: 20px;
background-color: #ffffff;
border-radius: 8px;

`

const InputCred=styled.input`
width: 95%;
height: 40px;
border-radius: 8px;
border: none;
background-color: #EAEAEA;
margin-bottom: 15px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
padding-left: 10px;
`

const SignInButton=styled.button`
width: 98%;
height: 40px;
align-items: center;
border-radius: 8px;
color: white;
background-color: black;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
cursor: pointer;
`
const Register=styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 1px solid red;
width: 100%;
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
            <Google> <Image src="https://s4827.pcdn.co/wp-content/uploads/2018/04/Google-logo-2015-G-icon.png"/>Sign in with Google </Google>
            <Apple><Image2 src="apple 1.png" width={"21.5px"} height={"24px"} />Sign in with Apple</Apple>
          </Account>
          <Card>
              <SignText>Email address</SignText>
              <InputCred type='email' ></InputCred>
              <SignText>Password</SignText>
              <InputCred type='password'></InputCred>
              <SignText yes>Forgot password?</SignText>
              <SignInButton>Sign In</SignInButton>
          </Card>
          <Register>
            <SignText grey>Don't have an account ? </SignText>
            <SignText yes> Register here</SignText>
          </Register>
          </CardContain>
        </Right>
    </Container>
  )
}

export default Login