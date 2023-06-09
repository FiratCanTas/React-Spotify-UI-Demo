import React from 'react'
import Section from 'components/Section'
import songs from 'data/songs'


function Home() {

  return (
    <div className='grid gap-y-8'>
        <Section title={"Recently played"} more={"/"} items={songs}/>
        
        <Section title={"Shows to try"} more={"/"} items={songs}/>

        <Section title={"Made For Firat Can Tas"} more={"/"} items={songs}/>
    
    </div>

  )
}

export default Home