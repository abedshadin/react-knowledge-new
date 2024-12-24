
import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {

const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);
const handleBookmark = blog => {
  setBookmarks([...bookmarks,blog])

}
const handleReadingTime = time => { 
  const intTime = parseInt(time)
  setReadingTime(readingTime + intTime)

}
console.log(readingTime)
  return (
    <>
     <Header />
     <div className='md:flex justify-between max-w-7xl mx-auto'>
     <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} ></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
     </div>
     
    </>
  )
}

export default App
