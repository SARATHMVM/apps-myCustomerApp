import React from 'react';
import './App.css';
import updateAddress from './Action'
import {connect} from 'react-redux';

let address;
let customerDetails;
class App extends React.Component {

  async componentDidMount()
  {
    try{
      const url = "http://www.mocky.io/v2/5e956d902f00002a0002502d";
      const response = await fetch(url);
      const customerDetails = await response.json();
      console.log(customerDetails);
      this.props.updatecustomerDetails(customerDetails);
    }
    catch(e){
      console.log("Error while fetching",e);
    }
  }



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
  
  render() {
    return <React.Fragment>
      <table>
      <div className="tableHeading">All customer details:</div>
        <table id='customers' className="customerTable"> 
        { this.props.loading ? null :<thead className="customerBody">
                   <tr>
                       <th>ID</th>
                       <th>NAME</th>  
                       <th>SEX</th>
                       <th>PHONE</th>
                   </tr>
        </thead>
        }
        <tbody className="customerBody">

           { this.props.loading ? <div>...loading</div>: 

           this.renderTableData()
           
           }
        </tbody>
      </table> 
      <div className="tableHeading">Specific customer address:</div>
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
      </table>
    </React.Fragment>
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