import { useEffect, useState } from 'react'
import Teaser from './Teaser'

function Listview() {

  const [articles, setArticles] = useState([])

  useEffect( () => {
    const getArticles = async () => {
      const res = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
      const body = await res.json()
      setArticles(body.articles)
    }
    getArticles()
  }, [])

  const createTeasers = () => {
    return articles.map( (a, i) => <Teaser title={a.title} summary={a.description} fakeId={i}/>)
  }

  return ( 
    <div>
      <h2>Listview</h2>
      {createTeasers()}
    </div>
   );
}

export default Listview;