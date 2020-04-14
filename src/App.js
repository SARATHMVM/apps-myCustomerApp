import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      loading : true,
      tasks : [],
      address : [],
      addressFlag : true
    }
  }
  async componentDidMount()
  {
    try{
      const url = "http://www.mocky.io/v2/5e956d902f00002a0002502d";
      const response = await fetch(url);
      const tasks = await response.json();
      console.log(tasks);
      this.setState({tasks:tasks,loading:false})
    }
    catch(e){
      console.log("Error while fetching",e);
    }
  }

  updateAddress(address) {
    this.setState({
      address: address,
      addressFlag : false
    });
   }

fetchCustomerAddress(){
  if(this.state.address && this.state.address.length>0){
    return this.state.address.map((addressValue, index) => {
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
    return <div>customer selected does not any address</div>
  }
  }

  renderTableData() {
    return this.state.tasks.map((customer, index) => {
       const { id, name, sex, phone , address} = customer
       return (
          <tr key={index} onClick={this.updateAddress.bind(this,address)}>
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
        { this.state.loading ? null :<thead className="customerBody">
                   <tr>
                       <th>ID</th>
                       <th>NAME</th>  
                       <th>SEX</th>
                       <th>PHONE</th>
                   </tr>
        </thead>
        }
        <tbody className="customerBody">

           { this.state.loading ? <div>...loading</div>: 

           this.renderTableData()
           
           }
        </tbody>
      </table>  
      <div className="tableHeading">Specific customer address:</div>
      <table id='adress' className="addressTable">
      <thead className="customerBody">
      { this.state.addressFlag ? null:
                   <tr>
                       <th>addressCountry</th>
                       <th>addressLocality</th>
                       <th>addressRegion</th>
                       <th>postalCode</th>
                       <th>streetAddress</th>
                   </tr>}
        </thead>
        <tbody className="addressBody">
           { this.state.addressFlag ? <div>...Click on Specific customer to get the address</div>: this.fetchCustomerAddress()}
        </tbody>
        </table>
      </table>
    </React.Fragment>
  } 
}

export default App;