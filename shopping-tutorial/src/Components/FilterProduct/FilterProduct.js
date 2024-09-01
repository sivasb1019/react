import "./FilterProduct.css";

let FilterProduct = (props) => {
  return (
    <select
      className="filter-area"
      name="isAvailable"
      onChange={(event) => props.selectedFilterValue(event.target.value)}
    >
      <option value="all">All</option>
      <option value="available">Available</option>
      <option value="unavailable">Unavailable</option>
    </select>
  );
};

export default FilterProduct;
