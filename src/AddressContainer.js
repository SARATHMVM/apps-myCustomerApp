import React, { Component } from 'react';
import './App.css';
import updateAddress from './Action';
import {connect} from 'react-redux';


class AddressContainer extends Component
{
  fetchCustomerAddress(){
    if(this.props.address && this.props.address.length>0){
      return this.props.address.map((addressValue, index) => {
      {
        const { addressCountry, addressLocality, addressRegion, postalCode , streetAddress} = addressValue
          return(
        <tr key={index}>
          <td>{addressCountry}</td>
          <td>{addressLocality}</td>
          <td>{addressRegion}</td>
          <td>{postalCode}</td>
          <td>{streetAddress}</td>
        </tr>
        )
      }
    }
    )}
    else
    {
      return <div>customer selected does not have any address</div>
    }
    }
    
    render(){
        return(
            <table id='adress' className="addressTable">
            <thead className="customerBody">
            { this.props.addressFlag ? null:
                         <tr>
                             <th>addressCountry</th>
                             <th>addressLocality</th>
                             <th>addressRegion</th>
                             <th>postalCode</th>
                             <th>streetAddress</th>
                         </tr>}
              </thead>
              <tbody className="addressBody">
                 { this.props.addressFlag ? <div>...Click on Specific customer to get the address</div>: this.fetchCustomerAddress()}
              </tbody>
              </table>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(AddressContainer);