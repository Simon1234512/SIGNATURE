import React from "react";
import Heading from "../heading/Heading";
import FormInput from "../FormInput/FormInput";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  e_facebook,
  e_github,
  e_insta,
  e_twitter,
  e_youtube,
} from "../../assests";

const Social = () => {
  const re =
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
  const validation = Yup.object({
    name: Yup.string()
      .min(2, "Must be 2 character")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    title: Yup.string()
      .min(2, "Must be 2 character")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    company: Yup.string()
      .min(2, "Must be 2 character")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    websitelink: Yup.string().matches(re, "URL is not valid"),
    address: Yup.string()
      .min(2, "Must be 2 character")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });
  return (
    <>
      <Heading className="editor">Added social icons</Heading>
      <Formik
        initialValues={{
          name: "",
          email: "",
          title: "",
          company: "",
          phone: "",
          websitelink: "",
          address: "",
        }}
        validateOnMount
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm({ values: "" });
        }}
      >
        {(formik) => (
          <>
            <FormInput
              label="Facebook§"
              name="name"
              type="text"
              className="edit-input"
              margin="m-4"
              iconField={true}
              icon={e_facebook}
              iconDelete={true}
              leftpadding="padding-left-true"
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default Social;
