import React from "react";
import BrowseCategory from "./components/browsecategory/BrowseCategory";
import CreatelistSearch from "./components/createlistSearch/CreatelistSearch";
import FinishDraft from "./components/finishdraft/FinishDraft";
import HowitWorks from "./components/howitworks/HowitWorks";
import HowitWorkList from "./components/howitworks/HowitWorkList";
import Logo from "../../../../components/logo/Logo";
import "./CreateListing.css";

const CreateListing = () => {
    return (
        <>
            <div className="main-create-list">
                <div className="main-logo">
                    <Logo />
                    <h3>Create a listing</h3>
                </div>
                <CreatelistSearch />
                <BrowseCategory />
                <FinishDraft />
                <HowitWorks />
                <HowitWorkList />
            </div>
        </>
    );
};

export default CreateListing;
