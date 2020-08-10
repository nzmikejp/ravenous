import React from 'react'
import './SearchBar.css'

const sortByOptions = {
    bestMatch:'best_match',
    highestRated:'rating',
    mostReviewed:'review_count'
}

class SearchBar extends React.Component {
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption =>{
            const sortByOptionValue = sortByOptions[sortByOption]
            
            return <li key={sortByOptionValue}>{sortByOption}</li>
        })
    } 

    render(){
        return(

        )
    }
}