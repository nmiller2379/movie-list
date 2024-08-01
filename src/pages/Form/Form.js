import React from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";

export default function FormPage({onClick}) {
  return (
    <div>
      <Header title={"Add a movie"} />
      <Form onClick={onClick} />
    </div>
  );
}
