import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const ProductDetails = () => {
const { id } = useParams();
const [product, setProduct] = useState({});


useEffect(() => {
fetch(`https://fakestoreapi.com/products/${id}`)
.then(res => res.json())
.then(data => setProduct(data));
}, [id]);


return (
<div className="p-6">
<h1 className="text-2xl font-bold">{product.title}</h1>
<p>{product.description}</p>
<Link to={`/order/${id}`} className="btn btn-primary">Order Now</Link>
</div>
);
};


export default ProductDetails;