import React from 'react'
import OurMission from '../../components/about-us/OurMission'
import MeetMyTeam from '../../components/about-us/MeetMyTeam'
import CommonHero from '../../components/common/CommonHero'

const About = () => {
  return (
    <>
    <CommonHero heading={'About Us'}/>
    <OurMission/>
    <MeetMyTeam/>
    </>
  )
}

export default About