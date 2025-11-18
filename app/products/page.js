import Link from "next/link";

export default function Products() {
  return (
    <div className="products-container">
      <h2>Shop by Category</h2>

      <div className="category-grid">
        <Link href="/products/mens" className="category-card">
          <h3>Men’s Wear</h3>
        </Link>

        <Link href="/products/womens" className="category-card">
          <h3>Women’s Wear</h3>
        </Link>

        <Link href="/products/electronics" className="category-card">
          <h3>Electronics</h3>
        </Link>

        <Link href="/products/shoes" className="category-card">
          <h3>Shoes</h3>
        </Link>
      </div>
    </div>
  );
}
