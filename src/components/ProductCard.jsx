import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => (
<div className="border p-4 rounded shadow">
<img src={product.image} className="h-40 mx-auto" />
<h2 className="font-bold mt-2">{product.title}</h2>
<p className="font-semibold">${product.price}</p>
<Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>
</div>
);


export default ProductCard;