import { useState } from "react";

let initialItems = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        quantity: 1,
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000,
        quantity: 1,
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000,
        quantity: 1,
    },
];

function Cart() {
    const [items, setItems] = useState(initialItems);

    const increaseQuantity = (id) => {
        setItems(
            items.map((product) =>
                product.id === id
                    ? {
                        ...product,
                        quantity: product.quantity + 1,
                    }
                    : product
            )
        );
    };

    const decreaseQuantity = (id) => {
        setItems(
            items.map((product) =>
                product.id === id
                    ? {
                        ...product,
                        quantity:
                            product.quantity > 1
                                ? product.quantity - 1
                                : 1,
                    }
                    : product
            )
        );
    };

    const removeProduct = (id) => {
        setItems(
            items.filter((product) => product.id !== id)
        );
    };

    return (
        <>
            <h1>Shopping Cart</h1>

            {
                items.map((data) => {
                    return (
                        <li key={data.id}>
                            <h2>{data.name}</h2>

                            <p>Price: ₹{data.price}</p>

                            <p>Quantity: {data.quantity}</p>

                            <button onClick={() => decreaseQuantity(data.id)}>
                                -
                            </button>

                            <button onClick={() => increaseQuantity(data.id)}>
                                +
                            </button>

                            <button onClick={() => removeProduct(data.id)}>
                                Remove
                            </button>
                        </li>
                    );
                })
            }
        </>
    );
}

export default Cart;