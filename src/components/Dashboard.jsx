import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faChartPie, faSearch ,faTags, faCalendarWeek, faCircleUser ,faGear, faBell,  faUser, faMoneyBillTransfer, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'
import LineChart from './LineChart';
import PieChart from './PieChart';


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
  //border: 1px solid green;
  border-radius: 29px;

`

const Nav=styled.div`
  height: 6.7vh;
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
color: ${props=>props.color?props.color:'black'};
`

const LineGraph=styled.div`
width: 100%;
height: 230px;
//border: 1px solid green;
background-color: white;
border-radius: 29px;
`

const Bottom=styled.div`
  width: 100%;
  //border: 1px solid red;
  height: 145px;
  border-radius: 29px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

  const Pie=styled.div`
    background-color: white;
    border-radius: 29px;
    width: 50%;
    margin-right: 10px;
  `

  const Schedule=styled.div`
    background-color: white;
    border-radius: 29px;
    width: 50%;
    height: 100%;
    margin-left: 10px;
  `

  const ScheduleTit=styled.div`
  //border: 1px solid green;
  height: 1%;
  width: 90.6%;
  margin-right: 0px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  `

  const ScheduleCard=styled.div`
 // border: 1px solid red;
  margin-top: 2px;
  width: 75%;
  height: 40px;
  margin-left: 10px;
  //padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  `
  const ScheduleCardLine=styled.div`
  flex: 0.13;
  //border: 1px solid green;
  height: 100%;
  background-color: ${props=>props.bgcolor};
  width: 100%;
  margin-right: 10px;
  `
  const ScheduleCardDetail=styled.div`
  flex: 9.97;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //align-items: center;
  align-items: start;
  float: left;
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
        <Bottom>
          <Pie><PieChart /></Pie>
          <Schedule>
            <ScheduleTit ><CardTitle font='Montserrat' weight='700' size='14px' color='black'>Todays Schedule</CardTitle>
            <CardTitle font='Montserrat' weight='500' size='12px' color='#858585'>See All ></CardTitle>
            </ScheduleTit>

            <ScheduleCard>
              <ScheduleCardLine bgcolor='lightgreen'></ScheduleCardLine>
              <ScheduleCardDetail>
              <CardTitle font='Lato' weight='700' size='14px' color='#666666'>Meeting with suppliers from Kuta Bali</CardTitle>
              <CardTitle font='Lato' weight='400' size='10px' color='#858585'>14.00-15.00 </CardTitle>
              <CardTitle font='Lato' weight='400' size='9px' color='#858585'>at Sunset Road, Kuta, Bali </CardTitle>
              </ScheduleCardDetail>
            </ScheduleCard>

            
            <ScheduleCard>
              <ScheduleCardLine bgcolor='#6972C3'></ScheduleCardLine>
              <ScheduleCardDetail>
              <CardTitle font='Lato' weight='700' size='14px' color='#666666'>Check operation at Giga Factory 1</CardTitle>
              <CardTitle font='Lato' weight='400' size='10px' color='#858585'>18.00-20.00</CardTitle>
              <CardTitle font='Lato' weight='400' size='9px' color='#858585'>at Central Jakarta </CardTitle>
              </ScheduleCardDetail>
            </ScheduleCard>

          </Schedule>
        </Bottom>
      </Right>

    </Container>
  )
}

export default Dashboard