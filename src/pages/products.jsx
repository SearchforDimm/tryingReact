import Button from "../components/Elements/Button";
import CardProducts from "../components/Fragments/CardProducts";
import { useEffect, useState } from "react";
import Counter from "../components/Fragments/Counter";
const products = [
  {
    id: 1,
    name: "Shoes",
    price: 299,
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi reprehenderit.",
  },
  {
    id: 2,
    name: "Nike Shoes",
    price: 350,
    image: "/images/shoes-1.jpg",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    name: "Puma Shoes",
    price: 399,
    image: "/images/shoes-1.jpg",
    description: "Latest product from Puma",
  },
  {
    id: 4,
    name: "Ortus Eight",
    price: 199,
    image: "/images/shoes-1.jpg",
    description: "Latest product from Ortus Eight",
  },
  {
    id: 5,
    name: "Gretsch",
    price: 900,
    image: "/images/shoes-1.jpg",
    description: "Latest product from Gretsch",
  },
];

const email = localStorage.getItem("email");
const productsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  return (
    <>
      <div className="flex h-20 justify-end bg-blue-600 text-white items-center px-5 py-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header image={product.image} />
              <CardProducts.Body name={product.name}>
                {product.description}
              </CardProducts.Body>
              <CardProducts.Footer
                price={product.price}
                handleAddToCart={handleAddToCart}
                id={product.id}
              />
            </CardProducts>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 mb-2 ml-5">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                if (!product) return null;
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("en-us", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("en-us", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  {totalPrice.toLocaleString("en-us", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default productsPage;
