import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import "../../css/message/table.css";

import {
  Stack,
  Form,
  Button,
  Dropdown,
  Row,
  Col,
  Pagination,
  DropdownButton,
} from "react-bootstrap";

import { ReactComponent as SearchLogo } from "../../assets/svg/message/search.svg";
import { ReactComponent as UnFlaggedLogo } from "../../assets/svg/message/flag.svg";
import { ReactComponent as ImportantLogo } from "../../assets/svg/message/alert.svg";
import { ReactComponent as FlaggedLogo } from "../../assets/svg/message/flag-active.svg";
import { ReactComponent as RepliedLogo } from "../../assets/svg/message/reply.svg";

import { flagMessage, deleteMsgs, moveTo } from "../../actions/message";

const Table = ({ section, subsection }) => {
  const dispatch = useDispatch();
  const allMessages = useSelector((state) => state.message.messages);
  const folders = useSelector((state) => state.message.folders);
  const [messages, setMessages] = useState([]);
  const [check, setCheck] = useState([]);
  const [view, setView] = useState("All");
  const [msgsPerPage, setMsgsPerPage] = useState(5);
  const [selectedPage, selectPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [paginationItems, setPaginationItems] = useState([]);

  useEffect(() => {
    const count = Math.ceil(messages.length / msgsPerPage);
    setPageCount(count);
    let items = [];
    if (paginationItems.length === 0) {
      let c = count > 5 ? 5 : count;
      for (let i = 1; i <= c; i++) {
        items.push(i);
      }
    } else {
      let start = paginationItems[0];
      let end = paginationItems[paginationItems.length - 1];
      if (selectedPage > end) {
        end = selectedPage;
        start = end - 4;
        if (start < 1) start = 1;
      } else if (selectedPage < start) {
        start = selectedPage;
        end = start + 4;
        if (end > count) end = count;
      } else {
        end = start + 4;
        if (end > count) end = count;
      }

      for (let i = start; i <= end; i++) items.push(i);
    }
    setPaginationItems(items);
  }, [selectedPage, msgsPerPage, messages, paginationItems]);

  const flagged = (id) => {
    dispatch(flagMessage(id));
  };
  const checked = (id) => {
    setCheck((check) =>
      check.map((cell, index) => (index === id ? !cell : cell))
    );
  };

  const deleteClicked = () => {
    dispatch(deleteMsgs(checkToIds()));
  };

  const checkToIds = () => {
    return messages.filter((msg, index) => check[index]).map((msg) => msg.id);
  };

  const moveToClicked = (to) => {
    dispatch(moveTo(to, checkToIds()));
  };

  const paginationItemClicked = (page) => {
    selectPage(page);
    // if(page===1)
  };

  const prevPageClicked = () => {
    selectPage((page) => page - 1);
  };

  const nextPageClicked = () => {
    selectPage((page) => page + 1);
  };

  const firstPageClicked = () => {
    selectPage(1);
  };

  const lastPageClicked = () => {
    selectPage(pageCount);
  };

  useEffect(() => {
    // console.log(section, subsection);
    let newMessages = allMessages.filter(
      (message) => message.location === section
    );

    if (section === "Inbox") {
      // if (subsection === 1) {
      //     setMessages(allMessages.inbox);
      // } else
      if (subsection === 2) {
        newMessages = newMessages.filter(
          (message) => message.from === "member"
        );
      } else if (subsection === 3) {
        // setMessages(allMessages.inbox.filter((message) => (message.from === "support agent")));
        newMessages = newMessages.filter(
          (message) => message.from === "support agent"
        );
      }
    }

    setMessages(
      newMessages.filter((msg) => {
        if (view === "Flagged") {
          return msg.flagged;
        } else if (view === "Important") {
          return msg.important;
        } else if (view === "Unread") {
          return msg.unread;
        } else if (view === "Unreplied") {
          return !msg.replied;
        } else return true;
      })
    );
    setCheck(newMessages.map((m) => false));
    // } else if (section === "Sent") {
    //     setMessages(allMessages.sent);
    // } else if (section === "Trash") {
    //     setMessages(allMessages.trash);
    // } else if (section === "Folders") {
    //     setMessages([]);
    // }
    selectPage(1);
  }, [view, section, subsection, allMessages]);
  return (
    <table className="Table">
      <thead>
        <tr>
          <td colSpan={7}>
            <Stack direction="horizontal" gap={3}>
              <Form.Check type="checkBox" />
              {section !== "Sent" ? (
                <Form.Select
                  value={view}
                  onChange={(e) => setView(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Flagged">Flagged</option>
                  <option value="Important">Important</option>
                  <option value="Unread">Unread</option>
                  <option value="Unreplied">Unreplied</option>
                </Form.Select>
              ) : (
                ""
              )}

              <Button
                variant="outline-secondary"
                onClick={deleteClicked}
                className="border"
              >
                Delete
              </Button>
              {section !== "Sent" ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-secondary"
                      className="border"
                    >
                      Move to
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {section !== "Inbox" ? (
                        <Dropdown.Item onClick={() => moveToClicked("Inbox")}>
                          Inbox
                        </Dropdown.Item>
                      ) : (
                        ""
                      )}
                      {section !== "Trash" ? (
                        <Dropdown.Item onClick={() => moveToClicked("Trash")}>
                          Trash
                        </Dropdown.Item>
                      ) : (
                        ""
                      )}
                      {folders.map((folder, index) =>
                        section !== "Folders-" + folder.id ? (
                          <Dropdown.Item
                            key={index}
                            onClick={() =>
                              moveToClicked("Folders-" + folder.id)
                            }
                          >
                            {folder.name}
                          </Dropdown.Item>
                        ) : (
                          ""
                        )
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button variant="outline-secondary" className="border">
                    Transfer
                  </Button>
                </>
              ) : (
                ""
              )}

              <Button variant="outline-secondary" className="border ms-auto">
                <SearchLogo />
              </Button>
            </Stack>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="header" width="4%" />
          <td className="header" width="4%" />
          <td className="header" width="4%" />
          <td className="header" width="4%" />
          <td className="header" width="26%">
            From
          </td>
          <td className="header" width="50%">
            Subject
          </td>
          <td className="header" width="8%">
            <Dropdown>
              <Dropdown.Toggle variant="light">Date</Dropdown.Toggle>
            </Dropdown>
          </td>
        </tr>
        {messages
          .slice((selectedPage - 1) * msgsPerPage, selectedPage * msgsPerPage)
          .map((message, index) => (
            <tr
              key={index}
              className={
                section !== "Sent" && message.unread
                  ? "message-unread"
                  : "message-read"
              }
            >
              <td>
                <Form.Check
                  type="checkBox"
                  onChange={() => checked(index)}
                  checked={check[index]}
                />
              </td>
              <td>
                {message.flagged ? (
                  <FlaggedLogo onClick={() => flagged(message.id)} />
                ) : (
                  <UnFlaggedLogo onClick={() => flagged(message.id)} />
                )}
              </td>
              <td>{message.important ? <ImportantLogo /> : ""}</td>
              <td>{message.replied ? <RepliedLogo /> : ""}</td>
              <td>{message.fromTo}</td>
              <td>{message.subject}</td>
              <td>{message.date.toLocaleTimeString()}</td>
            </tr>
          ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={7}>
            <Row>
              <Col>
                page {selectedPage} of {pageCount}
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Pagination>
                  <Pagination.First
                    onClick={firstPageClicked}
                    disabled={selectedPage === 1}
                  />
                  <Pagination.Prev
                    disabled={selectedPage === 1}
                    onClick={prevPageClicked}
                  />
                  {paginationItems.map((item) => (
                    <Pagination.Item
                      key={item}
                      onClick={() => paginationItemClicked(item)}
                      active={item === selectedPage}
                    >
                      {item}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    disabled={selectedPage >= pageCount}
                    onClick={nextPageClicked}
                  />
                  <Pagination.Last
                    disabled={selectedPage >= pageCount}
                    onClick={lastPageClicked}
                  />
                </Pagination>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <Stack direction="horizontal">
                  <span className="ms-auto" style={{ marginRight: "10px" }}>
                    Results per page{" "}
                  </span>
                  <DropdownButton
                    key="up"
                    id={"dropdown-button-drop-up"}
                    drop="up"
                    variant="inline-primary"
                    className="border"
                    title={msgsPerPage}
                    // style={{ padding: '0px' }}
                  >
                    <Dropdown.Item onClick={() => setMsgsPerPage(5)}>
                      5
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setMsgsPerPage(10)}>
                      10
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setMsgsPerPage(25)}>
                      25
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setMsgsPerPage(30)}>
                      30
                    </Dropdown.Item>
                  </DropdownButton>
                </Stack>
              </Col>
            </Row>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

Table.propTypes = {
  section: PropTypes.string,
  subsection: PropTypes.number,
};

export default Table;
