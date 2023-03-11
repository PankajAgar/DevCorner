import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Meta title={`Checkout`} />
      <BreadCrumb title={`Checkout`} />
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Dev Corner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price"
                    aria-current="page"
                  >
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="total">Contact Information</h4>
              <p className="total">Pankaj Agarwal (pankaj@gmail.com)</p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex flex-wrap gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select className="form-control form-select"></select>
                </div>
                <div className="w-100">
                  <select className="form-control form-select">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first Name"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="last Name"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment suite"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="city"
                  />
                </div>
                <div className="flex-grow-1">
                  <select className="form-control form-select">
                    <option value="" disabled selected>
                      Select City
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="zip code"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" /> Return to cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex mb-2 gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="bg-secondary badge text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img src={watch} alt="watch" className="img-fluid"></img>
                  </div>
                  <div>
                    <h5 className="total-price">nf fdjfd fḍ,fd</h5>
                    <p className="total-price">s/ #DADFD</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$1400</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$100</p>
              </div>
            </div>
            <div className="border-bottom py-4 d-flex justify-content-between align-items-center">
              <h4 className="total">Total</h4>
              <h5 className="total-price">USD $1500</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
