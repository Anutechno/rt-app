import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReactPaginate from "react-paginate";
import "./item.scss";

const ListItem = (props) => {
    const { items } = props;

    const [titleType, setTitleType] = useState([]);

    useEffect(() => {
        let type = [];
        items.map((item) => {
            switch (item.status) {
                case "Requiring your attention":
                    type.push("Please take action by: " + item.date);
                    break;
                case "Under review":
                    type.push("Customer Support is reviewing this calm");
                    break;
                default:
                    type.push("");
            }
        });
        setTitleType(type);
    }, [props]);

    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, props]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className="list-items">
            {currentItems.map((item, index) => (
                <div className="list-item" key={index}>
                    <h2
                        className={
                            titleType[index] == ""
                                ? "title-date border-0"
                                : "title-date"
                        }
                    >
                        <span className={item.active ? "red" : ""}>
                            {titleType[index]}
                        </span>
                    </h2>
                    <Container fluid>
                        <Row>
                            <Col xl={2} className="list-left">
                                <h3>Status:</h3>
                                <p className="requirement">{item.status}</p>
                                <p>
                                    Order ID: <span>{item.order}</span>
                                </p>
                                <p>Buyer: {item.buyer}</p>
                                <p>Claim date: {item.claimDate}</p>
                                <p>Claim amount: {item.amount}</p>
                            </Col>
                            <Col xl={10}>
                                <Container fluid className="list-right">
                                    <Row>
                                        <Col xl={9} className="list-reason">
                                            <h3>Reason:</h3>
                                            <p className="not">
                                                Not received item
                                            </p>

                                            {item.items.map((item, index) => (
                                                <div
                                                    className="list-detail d-flex"
                                                    key={index}
                                                >
                                                    <div className="image">
                                                        <img src={item.items} />
                                                    </div>
                                                    <div className="item-detail">
                                                        <p className="item-title">
                                                            {item.title}
                                                        </p>
                                                        <p className="item-desc">
                                                            {item.descr}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </Col>
                                        <Col xl={3}>
                                            <button>See details</button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ))}

            <div className="list-paginate d-flex justify-content-between align-items-center">
                <div className="page-count">Page 1 of 4</div>
                <ReactPaginate
                    nextLabel={<i class="bi bi-chevron-right"></i>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel={<i class="bi bi-chevron-left"></i>}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
                <div className="per-page-result d-flex align-items-center">
                    <span>Result per page</span>
                    <FormControl sx={{ minWidth: 71 }}>
                        <Select
                            value={itemsPerPage}
                            onChange={(e) => {
                                setItemsPerPage(e.target.value);
                            }}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>20</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
