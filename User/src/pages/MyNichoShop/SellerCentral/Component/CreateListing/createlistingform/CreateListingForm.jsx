import React from "react";
import Logo from "../../../../../components/logo/Logo";
import ListForm from "./ListForm";
import "./CreateListForm.css";

const CreateListingForm = () => {
  return (
    <>
      <div className="main-logo">
        <Logo />
        <h3>Create a listing</h3>
      </div>
      <ListForm />
    </>
  );
};

export default CreateListingForm;
