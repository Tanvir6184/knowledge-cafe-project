import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTIme] = useState(0);

  const handleToBookmark = (blog)=>{
     const newBookmarks = [...bookmarks, blog];
     setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time) =>{
    const newReadingTime = readingTime + time;
    setReadingTIme(newReadingTime)
  }


  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto gap-10'>
       <Blogs handleToBookmark = {handleToBookmark} handleMarkAsRead = {handleMarkAsRead} ></Blogs>
       <Bookmarks bookmarks = {bookmarks}readingTime = {readingTime} ></Bookmarks>
      </div>
      
    </>
  )
}

export default App
