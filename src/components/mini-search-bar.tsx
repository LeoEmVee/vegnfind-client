import React from 'react';

// interface IFMiniSearchBar {
//   prop: any;
// }

function MiniSearchBar() {
  return (
    <div className="mini-search-bar">
      <div>- Mini Search Bar</div>
      <select>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
        <option value="Etc.">Etc.</option>
      </select>
    </div>
  );
}

export default MiniSearchBar;
