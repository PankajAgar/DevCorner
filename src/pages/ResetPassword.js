import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15 ">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <CustomInput
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <div className="mt-1">
                  <div className="d-flex justify-content-center gap-15 flex-column align-items-center">
                    <button className="button border-0" type="submit">
                      Reset
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

export default ResetPassword;
