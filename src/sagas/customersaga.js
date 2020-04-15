import  {takeEvery,call,put} from 'redux-saga/effects';

export default function* getCustomer()
{
    yield takeEvery("GETCUSTOMER",getCustomerDetails);
}

function* getCustomerDetails()
{
    try{
        const url = "http://www.mocky.io/v2/5e956d902f00002a0002502d";
        const response = yield fetch(url);
        const customerDetails = yield response.json();
       yield put({type:"UPDATECUSTOMERDETAILS",value:customerDetails})
      }
      catch(e){
        console.log("Error while fetching",e);
      }
}