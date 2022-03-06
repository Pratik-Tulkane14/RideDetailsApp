import React from 'react'
import './Filter.css';
function Filter() {
  return (
    <div>
        <div className="main-container-filter">
            <h5>Filters</h5>
            <select name='state'>
                <option value="state">state</option>
                <option value="UP">UP</option>
                <option value="MP">MP</option>
                <option value="CG">CG</option>
            </select>
            <select name= 'district'>
                <option value="Chandrapur">Chandrapur</option>
                <option value="Nagpur">Nagpur</option>
            </select>
        </div>
    </div>
  )
}

export default Filter