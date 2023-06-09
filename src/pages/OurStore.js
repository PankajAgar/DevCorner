import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
  const [grid, setGrid] = useState(3);

  return (
    <>
      <Meta title="Our Stores" />
      <BreadCrumb title="Our Stores" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <ul className="ps-0">
                <li>Watch</li>
                <li>TV</li>
                <li>Camera</li>
                <li>Laptop</li>
              </ul>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="InStock"
                      id="InStock"
                    />
                    <label className="form-check-label" htmlFor="InStock">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="OutOfStock"
                      id="OutOfStock"
                    />
                    <label className="form-check-label" htmlFor="OutOfStock">
                      Out Of Stock (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <form className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="from"
                      placeholder="from"
                    />
                    <label htmlFor="from">From</label>
                  </form>
                  <form className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="to"
                      placeholder="to"
                    />
                    <label htmlFor="to">To</label>
                  </form>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="S"
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="M"
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (5)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex align-items-center flex-wrap gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphones
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Speakers
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tablets
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Products</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Kings headphone bluk order akdadnemre rmenrme r</h5>
                    <ReactStars
                      count={5}
                      value={3}
                      size={24}
                      activeColor="#ffd700"
                      isHalf={true}
                      edit={false}
                    />
                    <p>$300</p>
                  </div>
                </div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Kings headphone bluk order akdadnemre rmenrme r</h5>
                    <ReactStars
                      count={5}
                      value={3}
                      size={24}
                      activeColor="#ffd700"
                      isHalf={true}
                      edit={false}
                    />
                    <p>$300</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 px-5">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A.
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalProducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      className="img-fluid d-block"
                      alt="grid"
                      src="images/gr4.svg"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      className="img-fluid d-block"
                      alt="grid"
                      src="images/gr3.svg"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      className="img-fluid d-block"
                      alt="grid"
                      src="images/gr2.svg"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      className="img-fluid d-block"
                      alt="grid"
                      src="images/gr.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list pb-5">
              <div className="d-flex flex-wrap gap-10">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
