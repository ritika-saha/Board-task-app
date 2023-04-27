import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faChartPie, faTags, faCalendarWeek, faCircleUser ,faGear } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
background-color: #DDDDDD;
padding: 30px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Left=styled.div`
  width: 280px;
  height: 90vh;
  background-color: black;
  display: flex;
   flex-direction: column;
  border-radius: 29px;
justify-content: space-between;
`

const Title=styled.div`
  color: white;
  font-weight: 700;
  font-family: 'Montserrat';
  display: flex;
  flex: 1;
  font-size: 2.25rem;

  justify-content: center;
  align-items: center;
 
`

const DashboardStuff=styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`
const Stuff=styled.div`
  font-family: 'Montserrat';
font-style: normal;
font-weight: ${props=>props.yes?'700':400};
font-size: 1.125rem;
width: 100%;
height: 100%;
color: white;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
cursor: pointer;
@media (max-width: 768px) {
   font-size: 70%;
  }

`

const DashImp=styled.div`
display: flex;
flex-direction: column;
align-items: start;
float: left;
margin-bottom: 10px;
@media (max-width: 768px) {
   font-size: 70%;
  }
`

const Impstuff=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
width: 100%;
height: 100%;
color: white;
display: flex;
align-items: start;
float: left;
margin-bottom: 10px;
cursor: pointer;
margin-left: 24%;
`
const Right=styled.div`
width: 900px;
height: 90vh;
  background-color: #DDDDDD;
  border: 1px solid green;
  border-radius: 29px;
`

const Dashboard = () => {
  return (
    <Container>
      <Left>
         <Title>Board.</Title>
         <DashboardStuff>
          <Stuff yes><FontAwesomeIcon icon={faChartPie} style={{ marginRight: '20px' }} />Dashboard</Stuff>
          <Stuff><FontAwesomeIcon icon={faTags} style={{ marginRight: '10px' }} />Transactions</Stuff>
          <Stuff><FontAwesomeIcon icon={faCalendarWeek} style={{ marginRight: '33px' }}/>Schedules</Stuff>
          <Stuff><FontAwesomeIcon icon={faCircleUser} style={{ marginRight: '84px' }}/>User</Stuff>
          <Stuff><FontAwesomeIcon icon={faGear} style={{ marginRight: '51px' }}/>Settings</Stuff>
         </DashboardStuff>
         <DashImp>
          <Impstuff>Help</Impstuff>
          <Impstuff>Contact Us</Impstuff>
         </DashImp>
      </Left>

      <Right>

      </Right>

    </Container>
  )
}

export default Dashboard