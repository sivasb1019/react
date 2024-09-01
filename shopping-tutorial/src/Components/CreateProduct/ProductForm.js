import { useState } from "react";

function ProductForm(props) {
  let [productName, updateName] = useState("");
  let [productPrice, updatePrice] = useState("");
  let [productStock, updateStock] = useState("");
  let [productDescription, updateDescription] = useState("");
  let [productAvailability, updateAvailability] = useState(false);
  let [productImageUrl, updateImageUrl] = useState("");

  function createProductEventHandler(event) {
    event.preventDefault();
    let product = {
      id: "",
      name: productName,
      description: productDescription,
      isAvailable: productAvailability,
      imageUrl: productImageUrl,
      price: productPrice,
      stock: productStock,
    };
    updateName("");
    updatePrice("");
    updateStock("");
    updateDescription("");
    updateAvailability(false);
    updateImageUrl("");

    props.createProduct(product);
    props.productSubmission();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the input

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        updateImageUrl(event.target.result); // Set the image data as the URL
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <form className="row g-3" onSubmit={createProductEventHandler}>
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          value={productName}
          onChange={(event) => {
            updateName(event.target.value);
          }}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          value={productPrice}
          onChange={(event) => {
            updatePrice(event.target.value);
          }}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="stock">Product Stock</label>
        <input
          type="number"
          min="0"
          step="1"
          className="form-control"
          id="stock"
          placeholder="Product stock"
          value={productStock}
          onChange={(event) => {
            updateStock(event.target.value);
          }}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          onChange={handleImageChange}
        />

      </div>
      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <textarea
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={productDescription}
          onChange={(event) => {
            updateDescription(event.target.value);
          }}
        />
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          style={{ marginLeft: "25%", marginRight: 5 }}
          checked={productAvailability}
          onChange={() => {
            productStock > 0
              ? updateAvailability(true)
              : updateAvailability(false);
          }}
        />
        <label className="form-check-label" htmlFor="isAvailable">
          Is product available in stock?
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary col-md-5"
        style={{ margin: "25px 25px 0px 25px" }}
      >
        Add Product
      </button>
      <button
        type="button"
        className="btn btn-danger col-md-5"
        style={{ margin: "25px 25px 0px 25px" }}
        onClick={props.productSubmission}
      >
        Cancel
      </button>
    </form>
  );
}

export default ProductForm;


/*
let [userInput, updateUserInput] = useState({
  productName: "",
  productPrice: "",
  productDescription: "",
  productAvailability: "",
  productImageUrl: "",
});

onChange={(event) => {
  updateUserInput({ ...userInput, productName: event.target.value });
}}
onChange={(event) => {
  updateUserInput({ ...userInput, productPrice: event.target.value });
}}
onChange={(event) => {
  updateUserInput({ ...userInput, productDescription: event.target.value });
}}
onChange={(event) => {
  updateUserInput({ ...userInput, productAvailability: event.target.value });
}}
onChange={(event) => {
  updateUserInput({ ...userInput, productImageUrl: event.target.value });
}}

// onChange={(event) => {
//   updateUserInput((prevState) => {
//     return { ...prevState, productImageUrl: event.target.value }});
// }}
*/
