import React from 'react';

export const Search = (props) => {
    return <input type="text" onChange={ props.change } name="searchBar"></input>
}

export const Submit = (props) => {
    return <button type="submit" onClick={ props.click }>Ready to be sad?</button>
}