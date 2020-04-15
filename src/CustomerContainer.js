import React, { Component } from 'react';
import './App.css';
import updateAddress from './Action';
import {connect} from 'react-redux';


class CustomerContainer extends Component
{
    renderTableData() {
        return this.props.customerDetails.map((customer, index) => {
           const { id, name, sex, phone , address} = customer
           return ( 
             <tr key={index} onClick = {this.props.updateAddress.bind(this,address)}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{sex}</td>
                 <td>{phone}</td>
              </tr>
           )
        })
      }
    
    render(){
        return(
            <table id='customers' className="customerTable"> 
            { this.props.loading ? null : <thead className="customerBody">
                       <tr>
                           <th>ID</th>
                           <th>NAME</th>  
                           <th>SEX</th>
                           <th>PHONE</th>
                       </tr>
            </thead>
            }
            <tbody className="customerBody">
               { this.props.loading ? <div>...loading</div>: this.renderTableData() }
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(CustomerContainer);