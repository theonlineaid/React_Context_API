import { useCart } from "../context/Cart";

type Props = {
  name: string;
  price: number;
}

export default function Eitems({ name, price }: Props) {
  const cart = useCart()
  
  console.log(cart)

  const handleAddToCart = () => {
    cart?.setItems([...cart.items, { name, price }]);
  };
  return (
    <div style={{ border: '2px solid gray', borderRadius: 4, padding: 10, marginBottom: 10 }}>
      <h3>{name}</h3>
      <p>Proce : {price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}