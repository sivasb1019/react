import Products from "./Products";

function ProductLists(props) {
  return props.newProductList.length === 0 ? (
    <h1
      className="list-group bg-white text-danger"
      style={{ padding: 40, textAlign: "center" }}
    >
      No Products Available!
    </h1>
  ) : (
    <ul className="list-group bg-white">
      {props.newProductList.map((product) => (
        <Products
          key={product?.id}
          id={product?.id}
          name={product?.name}
          description={product?.description}
          isAvailable={product?.isAvailable}
          imageURL={product?.imageUrl}
          price={product?.price}
          stock={product?.stock}
        />
      ))}
    </ul>
  );
}

export default ProductLists;
