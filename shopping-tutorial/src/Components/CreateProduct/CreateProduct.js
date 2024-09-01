import ProductForm from "./ProductForm";
import { useState } from "react";
import "./CreateProduct.css";

function CreateProduct(props) {
  let [showForm, updateShowForm] = useState(false);

  function onCreateProduct(product) {
    props.createProduct(product);
  }

  function onProductSubmission() {
    updateShowForm(false);
  }
  {
    /* <div
        className="list-group mx-auto bg-white shadow"
        style={{ padding: "20px", margin: "10px 20px", borderRadius: "5px" }}
      ></div> */
  }
  return (
    <>
      <button
        className="btn btn-primary popup-btn"
        onClick={() => updateShowForm(!showForm)}
      >
        Add New Product
      </button>
      {showForm && (
        <>
          <div
            className={`popup-overlay ${showForm ? "active" : "deactive"}`}
          ></div>
          <div className={`popup-box ${showForm ? "active" : "deactive"}`}>
            <ProductForm
              createProduct={onCreateProduct}
              productSubmission={onProductSubmission}
            />
          </div>
        </>
      )}
    </>
  );
}

export default CreateProduct;
