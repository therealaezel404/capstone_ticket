import React, { useState } from "react";
import Form from "react-bootstrap/Form";
const Test = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <Form.Group>
      <Form.Select className="mb-3" name="issue">
        <option value="">Choose from drop-down list</option>
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Average</option>
        <option value="4">4 - Good</option>
        <option value="5" onChange={handleClick}>
          5 - Excellent
        </option>
      </Form.Select>
      {/* <button type="button" onClick={handleClick}>
        Toggle
      </button> */}
      <Form.Control
        type="text"
        name="pmInput"
        id="pmInput"
        disabled={isDisabled}
      />
    </Form.Group>
  );
  //     <Form.Group>
  //       <Form.Label>
  // <Form.Select className="mb-3" name="issue">
  //   <option value="">Choose from drop-down list</option>
  //   <option value="1">1 - Poor</option>
  //   <option value="2">2 - Fair</option>
  //   <option value="3">3 - Average</option>
  //   <option value="4">4 - Good</option>
  //   <option onChange={(e) => setIsChecked(e.target.checked)} value="5">
  //     5 - Excellent
  //   </option>
  // </Form.Select>
  //         {/* <Form.Check
  //           type="checkbox"
  //           id="mpCheckbox"
  //           onChange={(e) => setIsChecked(e.target.checked)}
  //         /> */}
  //         <Form.Label for="mpinput">Input Field</Form.Label>
  //         <Form.Control
  //           type="text"
  //           name="pmInput"
  //           id="pmInput"
  //           disabled={isChecked}
  //         />
  //       </Form.Label>
  //     </Form.Group>
  //   );
};

export default Test;
