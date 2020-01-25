
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Button, NativeSelect } from '@material-ui/core';
import { setHotelsAction, searchHotels } from '../../redux/actions';
import './Filter.css'
const Filter = ({searchHotels, clearFilter}) => {
    const [state, setState] = useState({name: '', city: '', rating:""});
    const searchHotel = (e) => {
            searchHotels(state);
    }
    const handleChange = name => event => {
        setState({
          ...state,
          [name]: event.target.value
        });

      };
      const clearFilters = () => {
        setState({name: '', city: '', rating: ''});
        clearFilter();
    }
    return (
        <form style={{marginTop:"5%"}}>
            <div className="search-input">
                <div>
                    <label className="input-label">Name</label>
                    <Input placeholder="Search hotel names" onChange={(e) => setState({...state,name: e.target.value.toLowerCase()})}/>
                </div>
                <div>
                    <label className="input-label">City</label>
                    <Input placeholder="Search hotels by city" onChange={(e) => setState({...state, city: e.target.value.toLowerCase()})}/>
                </div>
                <div>
                    <NativeSelect
                        value={state.rating}
                        name="rating"
                        onChange={handleChange("rating")}
                        inputProps={{ "aria-label": "age" }}
                    >
                    <option value="" disabled>
                        hotel rating
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    </NativeSelect>
                </div>
            </div>
            <div style={{marginTop:"2%"}}>
                <Button style={{background:"black", color:"white", marginRight:20}} onClick={() => {searchHotel()}}>Search</Button>
                <Button style={{background:"black", color:"white"}} onClick={() => {clearFilters()}}>Clear</Button>
            </div>
        </form>
    )
}
const mapDispatchToProps = (dispatch) => ({
    searchHotels: (key) => dispatch(searchHotels(key)),
    clearFilter: () => dispatch(setHotelsAction())
})
export default connect(null,mapDispatchToProps)(Filter);
