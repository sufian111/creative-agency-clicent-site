import React from "react";
import { useForm } from "react-hook-form";
import "./AddReview.css";
const AddReview = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="form-box" style={{ marginTop: "80px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="Name" placeholder="your Name" ref={register} />

        <input
          style={{ height: "145px" }}
          name="review"
          placeholder="your Opinion"
          ref={register({ required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          style={{
            backgroundColor: "#111430",
            borderRadius: "5px",
            color: "White",
            padding: "5px",
            marginTop: "10px",
            marginBottom: "100px",
          }}
          value="submit"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddReview;
