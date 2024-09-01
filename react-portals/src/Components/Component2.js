import { useState } from "react";
// import PortalComponent from "./PortalComponent";
import Modal from "./Modal";

function Component2() {
  let [showModal, updateModal] = useState(false);
  function displayModal() {
    updateModal(true);
  }

  function hideModal() {
    updateModal(false);
  }

  return (
    <div style={{ width: 300, position: "relative" }}>
      <h3>This is Component 2</h3>
      {/* <PortalComponent /> */}
      <button onClick={displayModal}>show Model</button>
      <Modal showModal={showModal} hideModal={hideModal} />
    </div>
  );
}

export default Component2;
