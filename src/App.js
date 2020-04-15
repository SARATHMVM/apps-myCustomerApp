import React, {Fragment,Component} from 'react';
import './App.css';
import updateAddress from './Action';
import {connect} from 'react-redux';
import CustomerContainer from './CustomerContainer'
import AddressContainer from './AddressContainer';



class App extends Component {

  async componentDidMount()
  {
    this.props.getCustomer()
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
    getCustomer: () => dispatch({type:"GETCUSTOMER"}),
    updateAddress: (address) => dispatch({type:'UPDATEADDRESS',value:address}),
    updatecustomerDetails: (customerDetails) => dispatch({type:'UPDATECUSTOMERDETAILS',value:customerDetails})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);