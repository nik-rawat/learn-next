import Link from "next/link"

interface ProductProps {
  key: number;
  productId: number;
}

export function Product({ key, productId }: ProductProps ) {
  return (
    <h2 id={`${key}`}><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
  )
}

export default function Products() {
  const productIds = [1, 2, 3];
  return (
    <div>
        <Link href="/">Home</Link>
        <h1>Product List</h1>
        {productIds.map((productId) => (
          <Product key={productId} productId={productId} />
        ))}
        <h2><Link href="/products/23" replace>Product {23}</Link></h2>
    </div>
  )
}

