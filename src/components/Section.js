import React from 'react'
import SongItem from './SongItem'
import Title from './Title'

//Tailwind line clamp eklentisi (metinlerimin uzunluklarını yönetmemi kolaylaştırı istediğim uzunluktan sonrasını kırpar)

function Section({title, more=false, items}) {


  return (
    <section>

     <Title title={title} more={more} />

        <div className='grid grid-cols-5 gap-x-6'>
        
            {
                items.map(item=> <SongItem item={item} key={item.id}/>)
            }
        </div>
       
    </section>
  )
}

export default Section