import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  let location = useLocation();
  const { grid } = props;
  return (
    <div
      className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <Link to="/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wish" />
          </button>
        </div>
        <div className="product-image">
          <img src={watch} className="img-fluid" alt="product" />
          <img src={watch2} className="img-fluid" alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havells</h6>
          <h5 className="product-title">Kids Headphone with colors</h5>
          <ReactStars
            count={5}
            value={3}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            cdfihsdnfsd, fbdsjfjsd fbjsdfhsdbnvsd fbsdhfvsd vjksdvsdmvsd,jvbkjsd
            vsbdjvsdnvbs vuksdbvmsnv skduvbs,vbsdkvbs vksdvbs,v
            skduvbsvsjvsjkvbs
          </p>
          <p className="price">$99</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="Compare"></img>
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view"></img>
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="add card"></img>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
