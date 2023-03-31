import React from 'react'

function Playlist() {
    const list = ["Deep Diving","Deep Diving","Deep Diving","Deep Diving","Deep Diving","Deep Diving","Deep Diving","Deep Diving"]

  return (
    <nav className='mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto'>
    <ul>
    {list.map(listItem=> (
        <li key={listItem}>
            <a href="/" className='text-sm text-link hover:text-white flex h-8 items-center'>{listItem}</a>
        </li>
        ))}
    </ul>
    </nav>
  )
}

export default Playlist