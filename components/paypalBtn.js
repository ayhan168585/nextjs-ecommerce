import { useEffect,useRef,useContext } from "react"
import {postData} from "../utils/fetchData"
import { DataContext } from "../store/GlobalState"

const paypalBtn=({order})=>{
    const refPaypalBtn=useRef()
    const {state,dispatch}=useContext(DataContext)
    const {cart,auth,orders}=state

    useEffect(()=>{
        paypal.Buttons({
            createOrder: function(data, actions) {
              // This function sets up the details of the transaction, including the amount and line item details.
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: order.total
                  }
                }]
              });
            },
            onApprove: function(data, actions) {
              // This function captures the funds from the transaction.
              return actions.order.capture().then(function(details) {
               
                // postData('order',{address,mobile,cart,total},auth.token)
                // .then(res=>{
                //   if(res.err) return dispatch({type:'NOTIFY',payload:{error:res.err}})
                //   dispatch({type:'ADD_CART',payload:[]})

                //   const newOrder={
                //     ...res.newOrder,
                //     user:auth.user
                //   }
                //   dispatch({type:'ADD_ORDERS',payload:[...orders,res.newOrder]})

                //   return dispatch({type:'NOTIFY',payload:{success:res.msg}})
                // })
                // This function shows a transaction success message to your buyer.
              
              });
            }
          }).render(refPaypalBtn.current);
          //This function displays Smart Payment Buttons on your web page.
    },[])
return(
<div ref={refPaypalBtn}></div>
)
}
export default paypalBtn

