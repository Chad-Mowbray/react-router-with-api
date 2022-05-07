import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

function Detailview() {

  const params = useParams()
  // console.log(params.id)

  const [article, setArticle] = useState()

  useEffect( () => {
    const getArticle = async () => {
      const res = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
      const body = await res.json()
      const myArticle = body.articles[params.id]
      setArticle(myArticle)
    }
    getArticle()
  }, [params])

  if(article) {
    return ( 
      <div>
        <h3>Detailview</h3>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <p>{article.content}</p>
      </div>
     );
  }
  else {
    return (<h2>loading...</h2>)
  }
}

export default Detailview;