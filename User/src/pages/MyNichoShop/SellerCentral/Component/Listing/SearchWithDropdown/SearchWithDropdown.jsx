import React from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./SearchWithDropdown.css";
const SearchWithDropdown = () => {
  return (
    <>
      <InputGroup className="mb-3 input_group">
        <Form.Select aria-label="Default select example" size="sm">
          <option>All List</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <FormControl
          aria-label="Text input with dropdown button"
          placeholder="search ..."
        />
        <Button className="iconHolder">
          <i class="fa-solid fa-magnifying-glass i_class"></i>
        </Button>
        <Button className="resetButton">Reset</Button>
      </InputGroup>
    </>
  );
};

export default SearchWithDropdown;
