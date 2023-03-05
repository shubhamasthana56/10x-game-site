import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";

const Cart = ()=> {
    const {cartData} = useContext(CartContext);
    const total = useRef();
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=> {
        const options = {
            key: "rzp_test_zGN9JZWTfXrGmh",
            amount: total*100,
            currency: "INR",
            name: "10x-Gaming-Site",
            description: "Gaming Transaction",
            handler: (res)=> {
                console.log(res);
            },
            prefill: {
                name: "Shubham Asthana",
                email: "shubhamasthana56@gmail.com",
                contact: "1234567890"
            
            },
            notes: {
                address: "work address"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
        
    }, [RazorPay])
    
    //total.current.price = 0;
    return (
        <>
            <section>
                <section>
                {cartData.map((cartItem)=> {
                return (
                    <article>
                        <img src={`http://localhost:1337${cartItem?.image?.data?.attributes?.url}`} alt=""/>
                        <article>{cartItem.title}</article>
                        <article>{cartItem.price}</article>
                        <button>Remove from cart</button>
                    </article>
                )
            })}
                </section>
                <section>
                <article>Billing Information </article>
                  {cartData.map((cart)=> {
                      //total.current.price = total.current.price + cart.price
                      return <article>
                          <span>{cart.title}</span>
                          <span>{cart.price}</span>
                      </article>
                  })}
                  <article>Total: 3000</article>
                  <button onClick={()=>{razorPayDisplay(6000)}}>Checkout</button>
                </section>
            </section>
           
        </>
    )
}
export default Cart;