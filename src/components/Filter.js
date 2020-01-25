
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from '@material-ui/core';

const Filter = ({searchHotels, clearFilter}) => {
    const [state, setState] = useState({name: '', city: '', price:null});
    const searchHotel = (e) => {
            searchHotels(state);
    }
    return (
        <form>
            <Input placeholder="Search hotel names" onChange={(e) => setState({name: e.target.value.toLowerCase()})}/>
            <Input placeholder="Search hotels by city" onChange={(e) => setState({city: e.target.value.toLowerCase()})}/>
            <Button onClick={() => {searchHotel()}}>Search</Button>
            <Button onClick={() => {clearFilter()}}>Clear</Button>
        </form>
    )
}
const mapDispatchToProps = (dispatch) => ({
    searchHotels: (key) => dispatch({type: 'SEARCH', param: key}),
    clearFilter: () => dispatch({type: 'SET_HOTELS'})
})
export default connect(null,mapDispatchToProps)(Filter);
