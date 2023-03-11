import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={`Blog`} />
      <BreadCrumb title={`Blog`} />
      <Container class1="forgot-password-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-3" />
                Go Back to blogs
              </Link>
              <h3 className="title">A Beaultifuky si=unday mornding</h3>
              <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
              <p className="desc">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
