import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchBar = () =>{
    const [term, setTerm] = useState('python')
    const [debauncedTerm, setDebauncedTerm] = useState(term)
    const [results, setResults] = useState([])

    useEffect(()=>{
        const timeId = setTimeout(()=>{
            setDebauncedTerm(term);
        }, 1000)

        return () => {
            clearTimeout(timeId)
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
              params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: debauncedTerm,
              },
            });
            setResults(data.query.search);
          };
            
          search()
    },[debauncedTerm])
    
    const renderedTerms = results.map((result)=>{

        return (
            <div key={result.pageid} className= "item">
                <div className="right floated content">
                    <a  target='_blank'
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go!
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                        <span dangerouslySetInnerHTML ={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Search on wikipedia</label>
                    <input 
                        className="input"
                        onChange = {e =>{setTerm(e.target.value)}}
                        value={term}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedTerms}
            </div>
        </div>
    )
}
export default SearchBar