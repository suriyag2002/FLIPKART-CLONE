import { useTitle } from '../hooks/useTitle'
import { ProductCard } from '../components'

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Appgrow Diamond 26 T Fat Tyre Cycle", "price": 149, "image": "/assets/images/bike.webp"},
    {"id": 2, "name": "Metronaut By Flipkart | Slim Men Dark Blue Jeans", "price": 49, "image": "/assets/images/jeans.webp"},
    {"id": 3, "name": "Apple iPhone 11 (64 GB, Black)", "price": 179, "image": "/assets/images/phone.webp"},
    {"id": 4, "name": "Lauren Adams Men Solid Casual Black Shirt", "price": 39, "image": "/assets/images/shirt.webp"},
    {"id": 5, "name": "Ku Roman Black Dial Wrist Girls Watch Analog", "price": 199, "image": "/assets/images/watch.webp"},
    {"id": 6, "name": "Being Wanted Full Sleeve Solid Men Sweatshirt", "price": 29, "image": "/assets/images/hoddie.webp"}
  ]
  return (
    <main>
      <section className="products">
        { products.map((product) => (
            <ProductCard key={product.id} product={product}/>
))}
       
      </section>
    </main>
  )
}

