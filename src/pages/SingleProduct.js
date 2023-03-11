import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const [orderedProduct, SetOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const props = {
    width: 500,
    height: 500,
    zoomWidth: 500,
    scale: 1,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  return (
    <>
      <Meta title={`"Our Stores"`} />
      <BreadCrumb title={`"Our Stores"`} />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="../images/watch.jpg"
                  className="img-fluid"
                  alt="watch"
                />
              </div>
              <div>
                <img
                  src="../images/watch.jpg"
                  className="img-fluid"
                  alt="watch"
                />
              </div>
              <div>
                <img
                  src="../images/watch.jpg"
                  className="img-fluid"
                  alt="watch"
                />
              </div>
              <div>
                <img
                  src="../images/watch.jpg"
                  className="img-fluid"
                  alt="watch"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids headphone bulk 10 wjfmef ekfjklf elfn
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    value={3}
                    size={24}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit={false}
                  />
                  <p className="mb-0 t-review">(2 reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Cateogry :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Watch, Smart</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex gap-15 flex-row mt-2 mb-3 align-items-center">
                  <h3 className="product-heading">Quantity :</h3>
                  <div>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={1}
                      style={{ width: "70px" }}
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      Add To Cart
                    </button>
                    <button className="button signup" type="submit">
                      Buy It Now
                    </button>
                  </div>
                </div>
                <div className="d-flex gap-15 flex-row mt-2 mb-3 align-items-center">
                  <div>
                    <a href="/">
                      <TbGitCompare className="fs-5 me-2" />
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br />
                    We ship all US domestic orders within
                    <b> 5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                kdlvjds vdsnvsdmv sdv sdvsdjv ksdnvsdkjv lksdn vlkdsn vlsdnvlsd
                vlsdnvnsdv vsdv nsdklvn sd,vsd; v j dsbvlksdn vsd vsdjv sdlv
                nskdvnlsdb
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="review-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div id="review" className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end pb-3">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      value={3}
                      size={24}
                      activeColor="#ffd700"
                      isHalf={true}
                      edit={false}
                    />
                    <p className="mb-0">Based on 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="/">
                      Write A Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4 className="mb-2">Write a review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <ReactStars
                      count={5}
                      value={0}
                      size={24}
                      activeColor="#ffd700"
                      isHalf={true}
                      edit={true}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="title"
                    />
                  </div>
                  <div>
                    <textarea
                      class="form-control w-100"
                      name=""
                      id=""
                      rows="4"
                      cols="30"
                      placeholder="comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      value={3}
                      size={24}
                      activeColor="#ffd700"
                      isHalf={true}
                      edit={false}
                    />
                  </div>
                  <p className="mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Iusto quia, sit placeat culpa odit dignissimos assumenda
                    quas vitae rem. Molestiae harum quos quasi iusto dolorem
                    earum perferendis, obcaecati reprehenderit tenetur!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Collections</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
