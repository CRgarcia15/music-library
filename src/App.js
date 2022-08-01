import { useEffect, useState } from 'react';
import Gallery from './components/Gallery'
import Searchbar from './components/SearchBar'
import './App.css';

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

useEffect(() => {
  const fetchData = async () => {
    document.title = `${search} Music`
    const response = await fetch('https://itunes.apple.com/search?term=the+grateful+dead')
    const resData = await response.json()
    if (resData.results.length > 0) {
      setData(resData.results)
    } else {
      setMessage('Not Found')
    }
  }
  fetchData()
}, [search])

  return (
    <div className="App">
      <Searchbar/>
      {message}
      <Gallery/>
    </div>
  );
}

export default App;
