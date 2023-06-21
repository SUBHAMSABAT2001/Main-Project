import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.png"
            alt="PrivacyPolicy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h4>Privacy Policy</h4>
         Our Company is committed to the compliance of applicable Privacy Laws in the country where Titan’s product is distributed. Protecting the privacy and security of your personal data is of prime importance to our Company, therefore, we conduct our business by abiding by the laws applicable on data privacy and data security in the country where Company’s product is distributed to you.

This Privacy Policy is intended to inform you about the personal data that is collected from you, how your personal data may be used and disclosed, how you can control the use of your personal data, and how your personal data is protected when you use the company Application. We do not sell trade your personally identifiable information; however, we may share the same with third parties who assist us in conducting our business, operating our website/Application, or servicing you, so long as those parties agree to keep this information confidential.
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
