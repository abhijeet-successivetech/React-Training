import Link from "next/link";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone Model A",
    },
    {
      id: 2,
      name: "Smartphone Model B",
    },
    {
      id: 3,
      name: "LED Television",
    },
    {
      id: 4,
      name: "Business Laptop",
    },
  ];

  return (
    <div className="container-center">
      <p className="question" style={{ maxWidth: "800px" }}>
        Q6. Create a list of items (e.g., products, articles) in your
        application. Implement dynamic routing to display details for each item
        when clicked. Create a route parameter that represents the item's ID in
        the URL (e.g., "/products/:id"). Fetch item details based on the route
        parameter and display them on the detail page. Add a "Go Back" button on
        the detail page to return to the list.
      </p>
      <div className="flex" style={{ gap: "1rem" }}>
        {products.map((product) => (
          <p key={product.id}>
            <Link href={`/assignment-3/question-6/product/${product.id}`}>
              <button className="button-primary">{product.name}</button>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};
export default ProductPage;
