import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <Container class1="forgot-password-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset your Password</h3>
              <p className="text-center mt-2 mb-3">
                We Will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15 ">
                <CustomInput type="email" name="email" placeholder="email" />
                <div className="mt-1">
                  <div className="d-flex justify-content-center gap-15 align-items-center flex-column">
                    <button className="button border-0" type="submit">
                      Send
                    </button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
