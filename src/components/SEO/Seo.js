import React from "react";
import Helmet from "react-helmet";

const Seo = (
  { title, description, content } = {
    title: "VTruck",
    description: "VTruck",
    content: "VTruck",
  }
) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={description} content={content} />
    </Helmet>
  );
};

export default Seo;
