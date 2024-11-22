
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3  my-10 bg-red-50">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default Products;