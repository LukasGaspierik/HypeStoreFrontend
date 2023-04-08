import React, { useState } from 'react';
import './Filter.css';
import { BiSearch } from 'react-icons/bi';
import {BsFilterSquare} from 'react-icons/bs'

const Filter = () => {

  return (
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
						<select class="filter" name="selectThis" id="selectThis">
							<optgroup label="Veľkost topanok">
							<option value="">Choose size</option>
							<option value=".option1">34</option>
							<option value=".option2">35</option>
							<option value=".option3">36</option>
							<option value=".option5">37</option>
                            <option value=".option6">38</option>
                            <option value=".option7">39</option>
                            <option value=".option8">40</option>
                            <option value=".option9">41</option>
                            <option value=".option10">42</option>
                            <option value=".option11">43</option>
                            <option value=".option12">44</option>
                            <option value=".option13">45</option>
                            <option value=".option14">46</option>
                            <option value=".option15">47</option>
                            <option value=".option17">48</option>
                            <option value=".option17">49</option>
							</optgroup>
							
								<optgroup label="Veľkost veci">
									<option value=".option18">XS</option>
									<option value=".option18">S</option>
									<option value=".option18">M</option>
									<option value=".option18">L</option>
									<option value=".option18">XL</option>
									<option value=".option18">XXL</option>
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
							<input class="filter" data-filter=".check1" type="checkbox" id="checkbox1"></input>
							<label class="checkbox-label" for="checkbox3" onc>Lowest Price</label>
						</li>
                        <li>
							<input class="filter" data-filter=".check2" type="checkbox" id="checkbox2"></input>
							<label class="checkbox-label" for="checkbox3">Highest Price</label>
						</li>
					</ul> 
				</div>
        </div>
    </div>
  )
}

export default Filter