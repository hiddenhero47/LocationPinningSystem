import React, { useEffect } from "react";
import {
  Container,
  PersonalDetailsWrapper,
  BtnSell,
} from "./elements/index.style";
import { AiFillHome } from "react-icons/ai";
import { InputControl } from "../../components/form-components/input/custom-input.style";
import CustomInput from "../../components/form-components/input/custom-input";
import CustomPassword from "../../components/form-components/input/custom-password";
import { useFormik } from "formik";
import UserServices from "../../features/services/custom-hooks/auth-hooks";
import { useNavigate } from "react-router-dom";
import BubbleSlide from "../../components/loaders/bubbles/BubbleSlide";

function Index() {
  const navigate = useNavigate();
  const {
    mutate: logInUser,
    isSuccess,
    data,
    isLoading,
  } = UserServices.login();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    await logInUser(values);
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      // validationSchema: Schema,
      onSubmit,
    });

  const { email, password } = values;

  useEffect(() => {
    if (isSuccess && data) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);

  return (
    <Container>
      <PersonalDetailsWrapper onSubmit={handleSubmit}>
        <div className="w-full flex items-center justify-between flex-wrap">
          <button type="button" className="btn_back flex items-center">
            <i>
              <AiFillHome size={22} />
            </i>
            home
          </button>
        </div>

        <h3 className="style_header mt-[40px]">Personal Details</h3>

        <span className="style_text text-mainBody-sbText mt-[45px]">
          Fill in your Personal information below.
        </span>

        <InputControl width="100%" height="auto" $marginY="20px">
          <CustomInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            isError={touched.email && errors.email}
            errorMessage={errors.email}
            placeholder="Enter your email"
          />
        </InputControl>

        <InputControl width="100%" height="auto">
          <CustomPassword
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
            isError={touched.password && errors.password}
            errorMessage={errors.password}
            placeholder="Password"
          />
        </InputControl>

        <BtnSell type="submit" id="continue">
          <div className="content">Continue</div>
          {isLoading && (
            <div className="loader">
              <BubbleSlide color="#fff" />
            </div>
          )}
        </BtnSell>
      </PersonalDetailsWrapper>
    </Container>
  );
}

export default Index;
