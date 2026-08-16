import React from 'react';

function SearchBar({ search, setSearch ,  priority , setPriority , sort , setSort}) {
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
                    <select className="form-select" aria-label="Priority filter" value={priority} onChange={(e)=>setPriority(e.target.value)}>
                        <option value="All">All Tasks</option>
                        <option value="High">High Priority</option>
                        <option value="Medium">Medium Priority</option>
                        <option value="Low">Low Priority</option>
                    </select>
                    
                </div>

                <div className='col-12 col-md-4'>
                    <select className="form-select" aria-label="Sort options" value={sort} onChange={(e)=>setSort(e.target.value)}>
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                        <option value="Highest">Highest Priority</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;