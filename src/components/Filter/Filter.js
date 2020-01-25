
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from '@material-ui/core';
import { setHotelsAction, searchHotels } from '../../redux/actions';
import './Filter.css'
const Filter = ({searchHotels, clearFilter}) => {
    const [state, setState] = useState({name: '', city: '', price:null});
    const searchHotel = (e) => {
            searchHotels(state);
    }
    return (
        <form>
            <div className="search-input">
                <div>
                    <label className="input-label">Name</label>
                    <Input placeholder="Search hotel names" onChange={(e) => setState({name: e.target.value.toLowerCase()})}/>
                </div>
                <div>
                    <label className="input-label">City</label>
                    <Input placeholder="Search hotels by city" onChange={(e) => setState({city: e.target.value.toLowerCase()})}/>
                </div>
            </div>
            <div>
                <Button onClick={() => {searchHotel()}}>Search</Button>
                <Button onClick={() => {clearFilter()}}>Clear</Button>
            </div>
        </form>
    )
}
const mapDispatchToProps = (dispatch) => ({
    searchHotels: (key) => dispatch(searchHotels(key)),
    clearFilter: () => dispatch(setHotelsAction())
})
export default connect(null,mapDispatchToProps)(Filter);
