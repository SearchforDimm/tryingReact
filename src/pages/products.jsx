import Button from "../components/Elements/Button";
import CardProducts from "../components/Fragments/CardProducts"
const products = [
    {
        id: 1,
        name: "Shoes",
        price: "$299",
        image: "public/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi reprehenderit.",
    },
    {
        id: 2,
        name: "Nike Shoes",
        price: "$350",
        image: "public/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 3,
        name: "Puma Shoes",
        price: "$399",
        image: "public/images/shoes-1.jpg",
        description: "Latest product from Puma",
    }
]

const email = localStorage.getItem('email');
const productsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = "/login"
    }
    return (
        <>
    <div className="flex h-20 justify-end bg-blue-600 text-white items-center px-5 py-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button></div>
        <div className="flex justify-center py-5">
        {products.map((product) => (
            <CardProducts key={product.id}>
            <CardProducts.Header image={product.image}/>
            <CardProducts.Body name={product.name}>
            {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price}/>
            </CardProducts>
        ))}
            </div>
        </>
    )
}

export default productsPage