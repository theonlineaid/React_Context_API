import { useState } from "react"
import { useCart } from "../context/Cart";

type Props = {}

export default function Ecart({ }: Props) {

    const cart = useCart();
    const [showCheckout, setShowCheckout] = useState<boolean>(false);

    const total = cart?.items.reduce((total, item) => total + item.price, 0)

    // Function to show the checkout button after three seconds
    const showCheckoutButton = () => {
        setTimeout(() => {
            setShowCheckout(true);
        }, 3000);
    };

    // Call the function to show the checkout button when the component mounts
    showCheckoutButton();

    return (
        <>

            {
                cart && cart.items && cart?.items?.length > 0 ? (
                    <>  

                        <div style={{ border: '2px solid gray', borderRadius: 4, padding: 10, marginBottom: 10 }}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <h1>Cart page or section </h1>

                                <button style={{ marginTop: 10 }} onClick={() => {
                                    cart.setItems([])
                                }}>Remove all</button>
                            </div>

                            {cart?.items.map((item, idx) => (
                                <p key={idx + 1} style={{ border: '2px solid gray', borderRadius: 4, padding: 10, marginBottom: 10 }}>
                                    {item.name} - {item.price}

                                    <br />

                                    <button style={{ marginTop: 10 }} onClick={() => {
                                        cart.setItems(cart.items.filter(i => i.name !== item.name))
                                    }}>Remove</button>
                                </p>
                            ))}
                            <h3>Total: <strong>${total}</strong></h3>


                            {/* Show the checkout button when showCheckout is true */}
                            {showCheckout && <button>Checkout</button>}
                        </div>
                    </>
                ) : null
            }
        </>
    )
}