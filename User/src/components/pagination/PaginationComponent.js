import React, { Component } from "react";
import Pagination from "react-js-pagination";
import PropTypes from "prop-types";

class PaginationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: 0,
      activePage: 1,
      limit: 6
    };
  }
  //Handle total records if comes
  componentDidMount = nextProps => {
    this.setState({
      totalRecords: nextProps ? nextProps.totalRecords : this.props.totalRecords
    });
  };

  //Handle Page Change
  handlePageChange = page => {
    this.setState({
      activePage: page
    });
    this.props.getAllData(page);
  };

  componentWillReceiveProps = nextProps => {
    this.componentDidMount(nextProps);
  };

  //Return pagination UI
  render() {
    let { activePage, limit, totalRecords } = this.state;
    return (
      <div className="pagination-wrapper">
        <Pagination
          aria-label="Page navigation example"                   
          prevPageText = {<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.96875 5.46875C0.6875 5.75 0.6875 6.21875 0.96875 6.5L5.21875 10.75C5.53125 11.0625 6 11.0625 6.28125 10.75L7 10.0625C7.28125 9.75 7.28125 9.28125 7 9L3.96875 5.96875L7 2.96875C7.28125 2.6875 7.28125 2.21875 7 1.90625L6.28125 1.21875C6 0.90625 5.53125 0.90625 5.21875 1.21875L0.96875 5.46875Z" fill="#6C757D"/>
          </svg>}
          nextPageText={<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.03125 5.46875C7.3125 5.75 7.3125 6.21875 7.03125 6.5L2.78125 10.75C2.46875 11.0625 2 11.0625 1.71875 10.75L1 10.0625C0.71875 9.75 0.71875 9.28125 1 9L4.03125 5.96875L1 2.96875C0.71875 2.6875 0.71875 2.21875 1 1.90625L1.71875 1.21875C2 0.90625 2.46875 0.90625 2.78125 1.21875L7.03125 5.46875Z" fill="#6C757D"/>
          </svg>}            
          activePage={activePage}
          itemsCountPerPage={limit}
          totalItemsCount={totalRecords}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

PaginationComponent.propTypes = {
  totalRecords: PropTypes.any,
  limit: PropTypes.any,
  activePage: PropTypes.any,
  getAllData: PropTypes.any
};

export default PaginationComponent;
