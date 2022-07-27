import React, { useState, useEffect } from "react";
import "./homepage.css";
// import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Notification from "../../components/notification/Notification";
import HomeBanner from "../../components/homebanner/HomeBanner";
import RecentItems from "../../components/recentitems/RecentItems";
import TodayItems from "../../components/recentitems/TodayItems";
import HomeFooter from "../../components/homefooter/HomeFooter";
import iphoneimg from "../../assets/home-banner-img/iPhoneHomeBanner.png";
import sofaimg from "../../assets/home-banner-img/Sofa.png";
import bicycleimg from "../../assets/home-banner-img/Bicycle.png";
import fashionimg from "../../assets/home-banner-img/Fashion.png";
import toysimg from "../../assets/home-banner-img/Toys.png";
import { useSelector } from "react-redux";

function HomePage() {
    const showNotif = useSelector((state) => state.showNotif);
    // const dispatch = useDispatch();

    const banner = [
        {
            title: "Looking for Electronics?",
            subtitle: "Shop Electronics",
            description:
                "Find everything you are looking for, with great deals",
            bannerimg: iphoneimg,
            banneralt: "iPhone banner",
            gradient: "electronics",
        },
        {
            title: "Create your dream home",
            subtitle: "Shop Home & Garden",
            description:
                "Find everything you are looking for, with great deals ",
            bannerimg: sofaimg,
            banneralt: "Home banner",
            gradient: "home-garden",
        },
        {
            title: "Sporting and enjoy",
            subtitle: "Shop Sports & Outdoors",
            description:
                "Find everything you are looking for, with great deals ",
            bannerimg: bicycleimg,
            banneralt: "Sports banner",
            gradient: "sports",
        },
        {
            title: "Live in style",
            subtitle: "Shop Fashion",
            description:
                "Find everything you are looking for, with great deals ",
            bannerimg: fashionimg,
            banneralt: "Fashion banner",
            gradient: "fashion",
        },
        {
            title: "Live in style",
            subtitle: "Shop Fashion",
            description:
                "Find everything you are looking for, with great deals ",
            bannerimg: fashionimg,
            banneralt: "Fashion banner",
            gradient: "fashion",
        },
        {
            title: "It's time for fun",
            subtitle: "Shop Toys & Games",
            description:
                "Find everything you are looking for, with great deals ",
            bannerimg: toysimg,
            banneralt: "Toys banner",
            gradient: "toys",
        },
        {
            title: "Looking for Electronics?",
            subtitle: "Shop Electronics",
            description:
                "Find everything you are looking for, with great deals",
            bannerimg: iphoneimg,
            banneralt: "iPhone banner",
            gradient: "electronics",
        },
    ];

    const [seconds, setSeconds] = useState(0);

    if (seconds === 6) {
        setSeconds(0);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            {/* <Header /> */}
            <Menu />
            {showNotif ? (
                <Notification
                    color="green"
                    title="aaaaa"
                    description="adadadadad"
                />
            ) : null}
            <HomeBanner
                title={banner[seconds].title}
                subtitle={banner[seconds].subtitle}
                description={banner[seconds].description}
                bannerimg={banner[seconds].bannerimg}
                banneralt={banner[seconds].banneralt}
                gradient={banner[seconds].gradient}
            />
            <RecentItems />
            <TodayItems />
            <HomeFooter />
        </div>
    );
}

export default HomePage;
