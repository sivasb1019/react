import ProductDetails from "./ProductDetails";

function Products(props) {
  let badgeClass = "badge bg-" + (props.isAvailable ? "success" : "danger");
  return (
    <li className="list-group item shadow">
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex ">
        <div className="media-body order-2 order-lg-1">
          <ProductDetails
            name={props.name}
            description={props.description}
            price={props.price}
            isAvailable={props.isAvailable}
            stock={props.stock}
          />
        </div>
        <img
          src={props.imageURL}
          alt="Loading image"
          width="180"
          className="ml-lg-3 order-1 order-lg-2"
          style={{ padding: 20 }}
        />
      </div>
    </li>
  );
}

export default Products;
