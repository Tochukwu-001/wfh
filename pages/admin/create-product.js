import Head from "next/head";
import { TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { Merriweather } from "next/font/google";
import * as yup from "yup";

const MerriReg400 = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const submitRules = yup.object().shape({
  productName: yup.string().required("This field is mandatory"),
  productDescription: yup.string().required("This field is mandatory").min(5, "Minimum of 5 characters").max(2000, "Maximum of 2000 characters"),
  productPrice: yup.number().required("This field is mandatory").min(3, "Minimum of 3 characters").max(200, "Maximum of 200 characters"),
  productQty: yup.number().required("This field is mandatory")
});

export default function CreateProduct() {
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {},
      validationSchema: null,
    });

  return (
    <>
      <Head>
        <title>WFH Admin | Create a Product</title>
      </Head>

      <main className="h-screen flex justify-center bg-slate-100">
        <div>
          <h1 className={`${MerriReg400.className} text-center text-3xl py-5`}>
            Create a Product
          </h1>
          <div className="w-full md:w-[500px] bg-slate-200 border rounded-md shadow p-4">
            <Formik
              initialValues={{
                productName: "",
                productDescription: "",
                productPrice: 0,
                productQty: 0,
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values));
                }, 2000);
              }}

              validationSchema={submitRules}
            >
              {(isSubmitting) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="productName" className="text-sm">
                      Product Name:
                    </label>
                    <Field
                      name="productName"
                      id={"productName"}
                      placeholder="Enter a product name"
                      className="w-full border  rounded-lg p-2 bg-gray-300 focus:bg-white outline-none border-0"
                    />
                    <ErrorMessage name="productName" component="p" className="text-red-400 font-bold text-xs" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="productDescption" className="text-sm">
                      Product Description:
                    </label>
                    <Field
                      name="productDescption"
                      as={"textarea"}
                      id={"productDescption"}
                      placeholder="Enter a product description"
                      className="w-full border rounded-lg p-2 bg-gray-300 focus:bg-white outline-none border-0"
                    />
                    <ErrorMessage name="productDescption" component="p" className="text-red-400 font-bold text-xs" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productPrice" className="text-sm">
                      Product Price:
                    </label>
                    <Field
                      name="productPrice"
                      id={"productPrice"}
                      placeholder="Price"
                      className="w-full border rounded-lg p-2 bg-gray-300 focus:bg-white outline-none border-0"
                      type={"number"}
                    />
                    <ErrorMessage name="productPrice" component="p" className="text-red-400 font-bold text-xs" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="productQty" className="text-sm">
                      Product Quantity:
                    </label>
                    <Field
                      name="productQty"
                      id={"productQty"}
                      placeholder="Quantity"
                      className="w-full border rounded-lg p-2 bg-gray-300 focus:bg-white outline-none border-0"
                      type={"number"}
                    />
                    <ErrorMessage name="productQty" component="p" className="text-red-400 font-bold text-xs" />
                  </div>

                  <div className="text-center my-3">
                    <button
                      type="submit"
                      className="text-white bg-[#114232] px-4 py-2 rounded-md mt-6"
                      disabled={isSubmitting}
                    >
                      CREATE PRODUCT
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            
          </div>
        </div>
      </main>
    </>
  );
}
