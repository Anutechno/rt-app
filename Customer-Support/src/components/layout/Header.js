import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as MainIcon } from '../../assets/svg/header/mainIcon.svg';
import { ReactComponent as BellIcon } from '../../assets/svg/header/bell.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/header/user.svg';
import { ReactComponent as MessageIcon } from '../../assets/svg/header/mail.svg';
import { ReactComponent as ChatIcon } from '../../assets/svg/header/message.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/header/search.svg';
import { ReactComponent as FileTextIcon } from '../../assets/svg/header/file-text.svg';
import { ReactComponent as CalendarIcon } from '../../assets/svg/header/calendar.svg';

import { setCurrentMessage } from '../../actions/header';

import '../../css/layout/Header.css';

const Header = () => {
    const headerState = useSelector(state => state.header);
    const dispatch = useDispatch();
    const pageIconClicked = (id) => {
        dispatch(setCurrentMessage(id));
    }

    return (
        <Navbar className='Navbar'>
            <Container>
                <Navbar.Collapse className='justify-content-start' href="#home"><MainIcon /></Navbar.Collapse>
                {/* <Navbar.Toggle /> */}
                <Navbar.Collapse className="justify-content-center">
                    <Link to="/search">
                        <SearchIcon className={headerState.currentPage === 'search' ? 'icon-selected' : 'icon'} onClick={() => pageIconClicked("search")} />
                    </Link>
                    <Link to="/message">
                        <MessageIcon className={headerState.currentPage === 'message' ? 'icon-selected' : 'icon'} onClick={() => pageIconClicked("message")} />
                    </Link>
                    <Link to="/chat">
                        <ChatIcon className={headerState.currentPage === 'chat' ? 'icon-selected' : 'icon'} onClick={() => pageIconClicked("chat")} />
                    </Link>
                    <Link to="/requests">
                        <FileTextIcon className={headerState.currentPage === 'file-text' ? 'icon-selected' : 'icon'} onClick={() => pageIconClicked("file-text")} />
                    </Link>
                    <Link to="/deals">
                        <CalendarIcon className={headerState.currentPage === 'calendar' ? 'icon-selected' : 'icon'} onClick={() => pageIconClicked("calendar")} />
                    </Link>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <BellIcon className='icon' />
                    <UserIcon className='icon' />
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;