import React from 'react';
import { useSelector } from "react-redux";
import Menu from '../../../../components/menu/Menu';
import Footer from '../../../../components/MyNichoShop/footer/Footer';
import Notification from '../../../../components/notification/Notification';
import Cancellation from './Cancellation';

const Index = () => {
  const showNotif = useSelector((state) => state.showNotif);
  return (
    <div className="my-nicho-shop">
      <Menu />
      {showNotif ? (
        <Notification
          color="green"
          title="aaaaa"
          description="adadadadad"
        />
      ) : null}
      <Cancellation />
      <Footer />
    </div>
  )
}

export default Index