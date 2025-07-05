import React from 'react';

function SortTag() {
  return (
    <div id="sort-tag">

        {/* Search by Tag (show all cows or calves with that tag as their current OR previous/lost tag) */}
        <br /><br /><label htmlFor="search_tag">Search By Tag:</label>
        <input id="search_tag" type="text" />
        {/* <!-- TODO Validate this input by capitalizing any letters, as they are in the db --> */}
        <button>Go</button>
      
      </div>
  );
}

export default SortTag;