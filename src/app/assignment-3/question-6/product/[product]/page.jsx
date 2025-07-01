"use client";
import { redirect, useParams } from "next/navigation";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "redmi note 11",
      type: "Phone",
      description: "It is a multitasking phone",
      price: 20000,
      image: "/assets/phone1.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy Edge 50",
      type: "Phone",
      description: "It is a Phone with snapdragon processor",
      price: 10000,
      image: "/assets/phone2.jpg",
    },
    {
      id: 3,
      name: "Samsung TV",
      type: "Television",
      description: "It is 56 inch TV with amoled display",
      price: 50000,
      image: "/assets/tv.jpg",
    },
    {
      id: 4,
      name: "Dell lattitude E-7430",
      type: "Laptop",
      description: "It is a laptop with intel i7 12th generation.",
      price: 10000,
      image: "/assets/laptop.jpg",
    },
  ];
  const params = useParams();
  const productId = params.product;

  const myProduct = products.find((item) => item.id == productId);

  return (
    <>
      <p>{myProduct.name}</p>
      <p>{myProduct.type}</p>
      <img className="img-default"src={myProduct.image} alt="image" />
      <p>{myProduct.description}</p>
      <p>Rs {myProduct.price}</p>
      <button onClick={() => redirect("/assignment-3/question-6")}>
        Go Back
      </button>
    </>
  );
};
export default ProductPage;