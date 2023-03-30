import React from 'react'
import { Icon } from 'Icons'
import { useNavigate } from "react-router-dom";

/*
React Router Hook larından useNavigate() hookunu kullanmalıyım
v6 öncesi sürümlerde useHistory olarak geçmekteydi değişti
navigate(1) kaç sayfa ileri gitmek istediğimizi,
navigate(-1) kaç sayfa geri gitmek istediğimizi belirler.
*/

function Navigation() {

    const navigate = useNavigate()

  return (
    <nav className='flex items-center gap-x-4'>
        <button onClick={()=>navigate(-1)} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon name={"prev"} size={22}/>
        </button>
        <button onClick={()=>navigate(1)} className='w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon name={"next"} size={22}/>
        </button>
    </nav>
  )
}

export default Navigation