import React, {Fragment,Component} from 'react';
import './App.css';
import updateAddress from './Action';
import {connect} from 'react-redux';
import CustomerContainer from './CustomerContainer'
import AddressContainer from './AddressContainer';

class App extends Component {

  async componentDidMount()
  {
    try{
      const url = "http://www.mocky.io/v2/5e956d902f00002a0002502d";
      const response = await fetch(url);
      const customerDetails = await response.json();
    //console.log(customerDetails);
      this.props.updatecustomerDetails(customerDetails);
     // this.setState({customerDetails:customerDetails,loading:false})
    }
    catch(e){
      console.log("Error while fetching",e);
    }
  }
  
  render() {
    return (
    <Fragment>
      <table>
      <div className="tableHeading">All customer details:</div>
        <CustomerContainer/>
      <div className="tableHeading">Specific customer address:</div>
        <AddressContainer/>
      </table>
    </Fragment>
    )
  } 
}

const mapStateToProps =(state) => {
  return {
    loading: state.loading,
    customerDetails : state.customerDetails,
    address : state.address,
    addressFlag : state.addressFlag
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateAddress: (address) => dispatch({type:'UPDATEADDRESS',value:address}),
    updatecustomerDetails: (customerDetails) => dispatch({type:'UPDATECUSTOMERDETAILS',value:customerDetails})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);