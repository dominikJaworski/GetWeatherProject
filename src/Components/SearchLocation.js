import React from 'react';
import 'tachyons';

const SearchLocation = ({ LocationField }) => {
    return(
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Locations'
                onChange={LocationField}
            />
        </div>
    )

}

export default SearchLocation;