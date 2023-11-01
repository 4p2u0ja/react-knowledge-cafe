

import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/blogs/blogs'
import Header from './components/header/header'

function App() {
const [bookmarks,setBookmarks] = useState([]);
const handleAddToBookmark= blog => {
const newBookmark = [...bookmarks, blog]
setBookmarks(newBookmark);



}
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto' > 
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks ={bookmarks}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
