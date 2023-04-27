import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faChartPie, faSearch ,faTags, faCalendarWeek, faCircleUser ,faGear, faBell,  faUser, faMoneyBillTransfer, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'
import LineChart from './LineChart';


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
  color: ${props=>props.black?'black':'white'};
  font-weight: ${props=>props.weight?'600':700};
  font-family: 'Montserrat';
  display: flex;
  flex: 1;
  font-size: ${props=>props.size?'1.5rem':'2.25rem'};

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

const Nav=styled.div`
  height: 8vh;
  width: 100%;
 // border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 7;
  border-radius: 29px;
`

const NavTit=styled.div`
 
`
const Creds=styled.div`
 //background-color: green;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const SearchContainer=styled.div`
//border: 1px solid red;
display: flex;
  align-items: center;
 padding: 2px;
 background-color: white;
 border-radius: 8px;
 border: none;
`
const Input=styled.input`
  border: none;
  padding: 5px;
  margin-right: 10px;
  border-radius: 8px;
`

const StatCard=styled.div`
  width: 100%;
 // border: 1px solid red;
  height: 120px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`

const Card=styled.div`
width: 140px;
height: 55px;
background-color: ${props=>props.color};
border-radius: 20px;
padding: 30px;
display: flex;
flex-direction: column;
`

const CardTitle=styled.div`
display: flex;
align-items: start;
float: left;
font-family: ${props=>props.font};
font-size: ${props=>props.size};
font-weight: ${props=>props.weight};
`

const LineGraph=styled.div`
width: 100%;
height: 359px;
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
        <Nav>
          <NavTit><Title black size weight>Dashboard</Title></NavTit>
          <Creds>
          <SearchContainer>
         <Input placeholder='Search...'/>
         <FontAwesomeIcon icon={faSearch} style={{color:'grey'}} />
        </SearchContainer>
        <FontAwesomeIcon icon={faBell} style={{marginLeft:'20px'}} />
        <FontAwesomeIcon icon={faUser} style={{marginLeft:'20px'}} />
          </Creds>
        </Nav>

        <StatCard>

          <Card color={'#DDEFE0'}>
          <div><FontAwesomeIcon icon={faMoneyBillTransfer} style={{float:'right', width:'26px', height:'26px'}} /></div>
          <CardTitle font='lato' size='14px' weight='400'>Total Revenues</CardTitle>
          <CardTitle font='open sans' size='24px' weight='700'>$2,129,430</CardTitle>
          </Card>

          <Card color={'#F4ECDD'}>
          <div><FontAwesomeIcon icon={faTags} style={{float:'right', width:'26px', height:'26px'}} /></div>
          <CardTitle font='lato' size='14px' weight='400'>Total Transactions</CardTitle>
          <CardTitle font='open sans' size='24px' weight='700'>1,520</CardTitle>
          </Card>

          <Card color={'#EFDADA'}>
          <div><FontAwesomeIcon icon={faThumbsUp} style={{float:'right', width:'26px', height:'26px'}} /></div>
          <CardTitle font='lato' size='14px' weight='400'>Total Likes</CardTitle>
          <CardTitle font='open sans' size='24px' weight='700'>9,721</CardTitle>
          </Card>

          <Card color={'#DEE0EF'}>
          <div><FontAwesomeIcon icon={faUsers} style={{float:'right', width:'26px', height:'26px'}} /></div>
          <CardTitle font='lato' size='14px' weight='400'>Total Users</CardTitle>
          <CardTitle font='open sans' size='24px' weight='700'>892</CardTitle>
          </Card>

        </StatCard>
        <LineGraph>
        <LineChart />
        </LineGraph>
      </Right>

    </Container>
  )
}

export default Dashboard