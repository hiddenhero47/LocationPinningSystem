import React, { useRef, useEffect, useState } from "react";
import { Container, BtnSell } from "./elements/index.style";
import AppGoogleMap from "../../components/map-component/google-map";
import Modal from "../../components/modal/index_modal";
import { IoClose } from "react-icons/io5";
import { InputControl } from "../../components/form-components/input/custom-input.style";
import CustomInput from "../../components/form-components/input/custom-input";
// import CustomPassword from "../../components/form-components/input/custom-password";
import { SelectControl } from "../../components/form-components/select/custom-select.style";
import SearchSelect from "../../components/form-components/select/searchSelect";
import { useFormik } from "formik";
import LocationHooks from "../../features/services/custom-hooks/location-hooks";
import {
  getCitiesName,
  getCitiesOptions,
  getCountryOptions,
  getCountryName,
  getStatesName,
  getStatesOptions,
  getCountryId,
  getStatesId,
  getCityId,
} from "../../utilities/city-state-country";
import BubbleSlide from "../../components/loaders/bubbles/BubbleSlide";

function Index() {
  const {
    mutate: createLocation,
    isLoading,
    isSuccess,
    data,
  } = LocationHooks.create();

  const modalRef = useRef(null);

  const [distance, setDistance] = useState(null);

  // Open the modal
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  };

  // Close the modal
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const initialValues = {
    name: "",
    email: "",
    city: "",
    state: "",
    country: "",
    positionInfo: null,
  };

  const onSubmit = async (values) => {
    const data = {
      name: values?.name,
      email: values?.email,
      city: getCitiesName(values.city),
      state: getStatesName(values.state),
      country: getCountryName(values?.country),
      positionInfo: values?.positionInfo,
    };
    console.log(data);
    await createLocation(data);
  };

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues,
    // validationSchema: Schema,
    onSubmit,
  });

  const { name, email, city, state, country, positionInfo } = values;

  const setStateData = (data) => {
    const { positionInfo, locationDetails } = data;

    setFieldValue("positionInfo", positionInfo);
    setDistance(positionInfo.distance);

    if (locationDetails) {
      console.log(locationDetails);

      const countryId = getCountryId(locationDetails?.countryCode);
      const stateId = getStatesId({
        countryId,
        stateName: locationDetails?.state,
      });
      const cityId = getCityId({ stateId, cityName: locationDetails?.city });

      setFieldValue("city", countryId);
      setFieldValue("state", stateId);
      setFieldValue("country", cityId);
    }
  };

  const resetCall = () => {
    setFieldValue("name", "");
    setFieldValue("email", "");
    setFieldValue("city", "");
    setFieldValue("state", "");
    setFieldValue("country", "");
  };

  useEffect(() => {
    if (isSuccess && data) {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);

  return (
    <Container>
      <div className="p-4 mt-[20px]">
        <h1 className="text-xl font-bold mb-4">Customer Location Pinning</h1>

        <AppGoogleMap setLocationData={setStateData} />

        <div className="flex flex-wrap gap-[20px] items-end">
          <BtnSell
            disabled={!distance}
            className="mt-[10px]"
            onClick={() => openModal()}
          >
            <div className="content">Done Selecting</div>
          </BtnSell>

          <span className="text-sm font-bold">
            {(Number(distance) || 0).toFixed(2)} Km
          </span>
        </div>
      </div>

      <Modal.Center
        width="512px"
        maxWidth="90%"
        refName={modalRef}
        onOpen={() => {}}
        onClose={() => resetCall()}
      >
        <div id="model">
          <div className="w-full flex justify-end cancel">
            <button onClick={() => closeModal()}>
              <i>
                <IoClose size={20} />
              </i>
            </button>
          </div>
          <div className="body_wrapper">
            <h3 className="heading">Complete Location Pinning</h3>

            <p className="heading_sm">
              Distance of {(Number(positionInfo?.distance) || 0).toFixed(2)} Km
            </p>

            <form onSubmit={handleSubmit}>
              <InputControl width="100%" height="auto">
                <label htmlFor="">Name</label>
                <CustomInput
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isError={touched.name && errors.name}
                  errorMessage={errors.name}
                  placeholder="Enter your name"
                />
              </InputControl>

              <InputControl width="100%" height="auto">
                <label htmlFor="">Email</label>
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

              <SelectControl width="100%" height="auto">
                <label htmlFor="">Country</label>
                <SearchSelect
                  id="country"
                  name="country"
                  value={country}
                  handleChange={handleChange}
                  onChange={(e) => {
                    setFieldValue("State", "");
                    setFieldValue("city", "");
                  }}
                  onBlur={handleBlur}
                  isError={touched.country && errors.country}
                  errormessage={errors.country}
                  placeholder="Select country"
                  options={getCountryOptions() || []}
                />
              </SelectControl>

              <SelectControl width="100%" height="auto">
                <label htmlFor="">State</label>
                <SearchSelect
                  id="state"
                  name="state"
                  value={state}
                  handleChange={handleChange}
                  onChange={(e) => setFieldValue("city", "")}
                  onBlur={handleBlur}
                  isError={touched.state && errors.state}
                  errormessage={errors.state}
                  placeholder="Select state"
                  options={
                    country.length !== 0 ? getStatesOptions(country) || [] : []
                  }
                />
              </SelectControl>

              <SelectControl width="100%" height="auto">
                <label htmlFor="">City</label>
                <SearchSelect
                  id="city"
                  name="city"
                  value={city}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  isError={touched.city && errors.city ? true : false}
                  errormessage={errors.city}
                  placeholder="Select City"
                  options={
                    state?.length !== 0 ? getCitiesOptions(state) || [] : []
                  }
                />
              </SelectControl>

              <BtnSell type="submit" id="btnSub">
                <div className="content">Continue</div>
                {isLoading && (
                  <div className="loader">
                    <BubbleSlide color="#fff" />
                  </div>
                )}
              </BtnSell>
            </form>
          </div>
        </div>
      </Modal.Center>
    </Container>
  );
}

export default Index;
