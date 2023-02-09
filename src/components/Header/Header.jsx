import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"

import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { Context } from "../../utils/context"

import "./Header.scss";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    //useState for cart
    const [showCart, setShowCart] = useState(false);
    // Search
    const [showSearch, setShowSearch] = useState(false);
    // updating value on cart icon
    const {cartCount} = useContext(Context);
    // for Header
    const navigate = useNavigate();

    const handleScroll = () => {
        //2. condition for header , when we scrolling
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        //1. Adding eventlistener with scroll property for header
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <>

            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    {/* Short cut ul>li*3 */}
                    <ul className="left">
                        <li onClick={() => navigate("/")} >Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>Shukla Electronics Store</div>
                    <div className="right">
                        {/* Online click for show search */}
                        <TbSearch onClick={() => setShowSearch(true)} />
                        <AiOutlineHeart />
                        {/* Online click for show cart */}
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {/* when value is true, then show cart. 
            Its true when we click on cart-icon CgShoppingCart.
            passing prop setShowCart for closing cart*/}
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;

