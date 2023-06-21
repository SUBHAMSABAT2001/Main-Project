import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to your best collections, where we combine timeless style with exceptional 
          craftsmanship. Our handpicked collection of watches embodies elegance, 
          precision, and enduring design. With a commitment to quality, each timepiece is 
          meticulously crafted, ensuring attention to detail and impeccable artistry.
           We take pride in providing personalized customer service, guiding you to find
            the perfect watch that reflects your unique style and taste. Join our community
             of watch enthusiasts and explore our curated collection, where every timepiece 
             tells a story and becomes a cherished companion.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
