import React, { useContext } from "react";
import "./CreateSignature.scss";
import {
  Button,
  Container,
  Heading,
  ScreenView,
  SiteEditor,
} from "../../../components";
import { TemplateFirst  } from "../../../components/templates";
import TemplateSecond from "../../../components/templates/TemplateSecond";
import { EditerContext } from "../../../AppContext";
import { useState } from "react";

const CreateSignature = () => {
  const { generalFields , switching } = useContext(EditerContext);
  console.log(generalFields);

  return (
    <>
      <Container className="main">
        <div className="createsignature">
          <div className="createsignature-container">
            <div className="createsignature-container-editor">
              <SiteEditor />
            </div>
            <div className="createsignature-container-view">
              <div className="createsignature-container-view-container">
                <Heading className="center primary m-4">
                  Free Email Signature Generator
                </Heading>
                <ScreenView>
                  { switching==false && <TemplateFirst
                    name={generalFields.find(item => item.name === "name").value || "Namehere"}
                    role={generalFields.find(item => item.name === "title")?.value || "Developer"}
                    company={generalFields.find(item => item.name === "company")?.value || "ELite"}
                    phone={generalFields.find(item => item.name === "phone")?.value || "0900-78601"}
                    url={generalFields.find(item => item.name === "website")?.value || "facebook.com"}
                    emailAddress={generalFields.find(item => item.name === "email")?.value || "Email"}
                    address={generalFields.find(item => item.name === "address")?.value || "Karachi"}
                  />}
                  <br />
                 { switching==true && <TemplateSecond
                  name={generalFields.find(item => item.name === "name").value || "Namehere"}
                  role={generalFields.find(item => item.name === "title")?.value || "Developer"}
                  company={generalFields.find(item => item.name === "company")?.value || "ELite"}
                  phone={generalFields.find(item => item.name === "phone")?.value || "0900-78601"}
                  url={generalFields.find(item => item.name === "website")?.value || "facebook.com"}
                  emailAddress={generalFields.find(item => item.name === "email")?.value || "Email"}
                  address={generalFields.find(item => item.name === "address")?.value || "Karachi"}
                  />}
                </ScreenView>
                <Button className="btn-primary--two m-4 center">
                  Generate Signature
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreateSignature;
