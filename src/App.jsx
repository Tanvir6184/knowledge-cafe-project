import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'


function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleToBookmark = ()=>{
    console.log('adding soon')
  }

  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto gap-10'>
       <Blogs handleToBookmark = {handleToBookmark}></Blogs>
       <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
