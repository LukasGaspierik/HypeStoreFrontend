import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import {BsFilterSquare} from 'react-icons/bs'
import SearchBar from '../../components/Home/SearchBar';
import './styles.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { DragHandle } from '@material-ui/icons';

const ShoesPage = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [item, setItem] = useState([]);
  const url = localStorage.getItem("url");
  const [checkedLowest, setCheckedLowest ] = useState(false);
  const [checkedHighest, setCheckedHighest ] = useState(false);
  const [size, setSize] = useState('');


  useEffect(() => {
    axios.get(url + "/item/getAllShoes").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);


	const handleChnangeLowest = () =>{
		setCheckedLowest(!checkedLowest);
		if(!checkedLowest){
			axios.get(url + "/item/getByPriceAsc").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
		}
    else{
      axios.get(url + "/item/getAllShoes").then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
	}

  const handleChnangeHighest = () =>{
		setCheckedHighest(!checkedHighest);
		if(!checkedHighest){
			axios.get(url + "/item/getByPriceDesc").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
		}
    else{
      axios.get(url + "/item/getAllShoes").then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
	}

  const handleChangeSize = (event) =>{
    const value = event.target.value;
    setSize(value);

    if (value != null){
      axios.get(url + "/item/getBySize/" + value).then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
    else{
      axios.get(url + "/item/getAllShoes").then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
  }
   
  return (
    <div className='home'>
      <div className='asd'>
        {/* Search Bar */}
        <SearchBar
          value={searchInput}
          changeInput={(e) => setSearchInput(e.target.value)}
        />

      <div className='filter-main'>
        <div className='filter-icon'>
          <BsFilterSquare></BsFilterSquare>
        </div>
        <div className='cd-filter'>
          <div className='filter-block'>
            <h4>Search</h4>
            <div class="content-filter1">
              <span className='icon'><BiSearch></BiSearch></span>
              <input type="search" placeholder="Search product"/>
            </div>
          </div>
          <div class="filter-block">
            <h4>Select Size</h4>					
            <div class="content-filter2">
              <div class="select filters">
                <select class="filter" name="selectThis" id="selectThis" onChange={handleChangeSize}>
                  <optgroup label="Veľkost topanok">
                    <option value="">Choose size</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                  </optgroup>
                  <optgroup label="Veľkost veci">
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </optgroup>
                </select>
              </div> 
            </div> 
          </div> 
          <div class="filter-block">
            <h4>Select Town</h4>					
            <div class="content-filter3">
              <div class="select filters">
                <select class="filter" name="selectThis" id="selectThis">
                  <option value="">Choose town</option>
                  <option value=".option1">Žilinský kraj</option>
                  <option value=".option2">Bratislavský kraj</option>
                  <option value=".option3">Banskobystrický kraj</option>
                  <option value=".option5">Košičský kraj</option>
                  <option value=".option6">Trenčiansky kraj</option>
                  <option value=".option7">Nitriansky kraj</option>
                  <option value=".option8">Prešovkský kraj</option>
                  <option value=".option9">Trnavský kraj</option>
                </select>
              </div> 
            </div> 
          </div>
          <div class="filter-block">
            <h4>Sort by:</h4>
            <ul class="filter-content4 filters list">
              <li>
                <input class="filter" data-filter=".check1" type="checkbox" id="checkbox1" onChange={handleChnangeLowest}></input>
                <label class="checkbox-label" for="checkbox3" >Lowest Price</label>
              </li>
              <li>
                <input class="filter" data-filter=".check2" type="checkbox" id="checkbox2" onChange={handleChnangeHighest}></input>
                <label class="checkbox-label" for="checkbox3">Highest Price</label>
              </li>
            </ul> 
            </div>
          </div>
        </div>
      </div>

      <div className='list-wrap'>
        {item? (item.map((data) =>
          {return (
            <div className='listItem-wrap' key={data.id}>
              <Link to={`/shoes/${data.id}`}>
                <img className='img-box' src={data.imageNames ? url + "/item/getImage/" + data.imageNames[0] : null} alt=''/>
              </Link>
              <h4>{data.title}</h4>
              <b>${data.price}</b>
            </div>
          )})) : (<h3>No data yet</h3>)}
      </div>
    </div>
  );
};

export default ShoesPage;