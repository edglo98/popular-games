import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { useHistory, useLocation } from 'react-router-dom';
import queryString from "query-string";
import images from '../../assets/images'
import "./styles.css"


    
export default function InputSearch ({ setSearchValue, placeholder }) {
  const _placeholder = placeholder ? placeholder : "search...";
  const history = useHistory()

  const [first, setfirst ] = useState(true)
  
  const { search } = useLocation();
  const query = queryString.parse(search).username

  const delayedSetState = debounce(q => setSearchValue(q), 500)
  
  const stateSearch = useCallback((e) => {

    let val = e.target.value
    delayedSetState(val)

    if(!!val){
      history.push(`?username=${ val }`)
    }else{
      history.push("?") 
    }
  
  },[delayedSetState, history])

  useEffect(()=>{
    if(query && first){
      const e = {
        target: {
          value: query
        }
      }
      setfirst(false)
      return stateSearch(e)
    }
  },[setfirst, first, query, stateSearch])


  return (
      <div style={{position: "relative"}}>
        <input
            style={{width: "100%", maxWidth: 350,minWidth: 225, borderRadius: 15, border: "1px solid grey", padding: "5px 15px 5px 60px"}}
            onChange={stateSearch}
            placeholder={_placeholder}
            defaultValue={query && query}
            className='form__input'
        />
        <div style={{position: "absolute", left: 0, top: -2}}>
          <span
            style={{
                mask: `url(${images.Loupe})`,
                maskSize: "cover",
                WebkitMaskImage: `url(${images.Loupe})`,
                WebkitMaskSize: "cover",
                backgroundColor: "#000"
            }}
            className="searchingIcon-component"
          />
        </div>
      </div>
  );
};