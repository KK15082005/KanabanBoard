import React from 'react';

function SearchBar({ search, setSearch }) {
    return (
        <div className='searchbar'>
            <div className='row g-3 '>

                <div className='col-12 col-md-4'>
                    <div className='input-group'>
                        <span className='input-group-text'><i className="bi bi-search"></i></span>
                        <input type='search' className='form-control' placeholder='Search Tasks...' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                    </div>
                </div>

                <div className='col-12 col-md-4'>
                    <select className="form-select" aria-label="Default select example" placeholder="filter : All Tasks">
                        <option value="1">High Priority</option>
                        <option value="2">Medium Priority</option>
                        <option value="3">Low Priority</option>
                        <option value="3">Due Today</option>
                        <option value="3">Completed</option>
                    </select>
                    
                </div>

                <div className='col-12 col-md-4'>
                    <select className="form-select" aria-label="Default select example" placeholder="sort : Newest">
                        <option >Newest</option>
                        <option value="1">Oldest</option>
                        <option value="2">Highest priotity</option>
                        <option value="3">Due Date</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;