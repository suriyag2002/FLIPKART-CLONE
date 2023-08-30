import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {
  useTitle("Cart");
  const products = [
    {id: 1, "name": "Full Sleeve Solid Men Sweatshirt", "price": 149, "image": "/assets/images/hoddie.webp",}, 
    {id: 2, "name": "Metronaut By Flipkart | Slim Men Dark Blue Jeans", "price": 49, "image": "/assets/images/jeans.webp",}, 
  ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
