import {Link} from 'react-router-dom'


function Teaser({title, summary, fakeId}) {
  return ( 
    <div>
      <Link to={`/articles/${fakeId}`}>{title}</Link>
      <p>{summary}</p>
    </div>
   );
}

export default Teaser;