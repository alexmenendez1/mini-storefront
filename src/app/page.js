import Catalog from './components/Catalog';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import PriceFilter from './components/PriceFilter';
import CartSummary from './components/CartSummary';
import StatusMessage from './components/StatusMessage';

export default function Home() {
  return (
    <div className="storefront-container">
      <main className="Storefront">
       <Catalog />
        <ProductList />
        <ProductCard />
        <CategoryFilter />
        <PriceFilter />
        <CartSummary />
        <StatusMessage />

      </main>
    </div>
  );
}
