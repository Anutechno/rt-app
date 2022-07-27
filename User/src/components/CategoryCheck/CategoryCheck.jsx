import React from "react";
import { Form } from "react-bootstrap";
import "./categorycheck.scss";

const CategoryCheck = ({ category }) => {
    return (
        <>
            <div className="ui-cat-checkbox">
                <Form.Check type="checkbox" label={category} />
            </div>
        </>
    );
};

export default CategoryCheck;
