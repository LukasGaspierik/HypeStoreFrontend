import React, { useEffect, useState } from 'react';
import EmptyView from '../../EmptyView';
import SearchBar from '../../components/Home/SearchBar';
import './styles.css';
import ListShoes from '../../components/Home/List/ListShoes';

const ShoesPage = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
   
  return (
    <div className='home'>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='home_panelList-wrap'>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? <ListShoes /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default ShoesPage;