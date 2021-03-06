import React, { Component } from 'react'
import './SearchBar.css'

const sortByOptions = {
    'Best Match':'best_match',
    'Highest Rated':'rating',
    'Most Reviewed':'review_count'
}

class SearchBar extends Component {
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(item =>{
            const sortByOptionValue = sortByOptions[item]
            
            return <li key={sortByOptionValue}>{item}</li>
        })
    } 

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar