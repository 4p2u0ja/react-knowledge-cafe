

import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/blogs/blogs'
import Header from './components/header/header'

function App() {
const [bookmarks,setBookmarks] = useState([]);

const [readingTime, setReadingTime] = useState(0)
const handleAddToBookmark= blog => {
const newBookmark = [...bookmarks, blog]
setBookmarks(newBookmark);

}
const handleMarkAsRead = time =>{
setReadingTime(readingTime + time );
}
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto' > 
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
      <Bookmarks bookmarks ={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
