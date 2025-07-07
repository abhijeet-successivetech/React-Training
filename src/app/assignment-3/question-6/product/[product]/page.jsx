"use client";
import { redirect, useParams } from "next/navigation";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone Model A",
      type: "Smartphone",
      description: "A versatile smartphone suitable for daily use.",
      price: 20000,
      image: "/assets/phone1.jpg",
    },
    {
      id: 2,
      name: "Smartphone Model B",
      type: "Smartphone",
      description: "A smartphone with a powerful processor and sharp display.",
      price: 15000,
      image: "/assets/phone2.jpg",
    },
    {
      id: 3,
      name: "LED Television",
      type: "Television",
      description: "A 55-inch LED TV with vibrant display and smart features.",
      price: 50000,
      image: "/assets/tv.jpg",
    },
    {
      id: 4,
      name: "Business Laptop",
      type: "Laptop",
      description: "A lightweight laptop ideal for work and productivity tasks.",
      price: 70000,
      image: "/assets/laptop.jpg",
    },
  ];

  const params = useParams();
  const productId = params.product;

  const myProduct = products.find((item) => item.id == productId);

  if (!myProduct) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container-center">
      <p className="question">{myProduct.name}</p>
      <p>Type: {myProduct.type}</p>
      <img className="img-default" src={myProduct.image} alt={myProduct.name} />
      <p>{myProduct.description}</p>
      <p>Price: ₹{myProduct.price.toLocaleString()}</p>
      <button
        className="button-primary"
        onClick={() => redirect("/assignment-3/question-6")}
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductPage;
