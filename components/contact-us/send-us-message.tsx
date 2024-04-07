"use client";
import React, { useState } from "react";
import axios from "axios";
import { Subpagehero } from "../sub-page-hero/sub-page-hero";
import { Containerwrapper } from "../container/container-wrapper";
import { Card, CardBody } from "@nextui-org/react";
import { Inputformfield } from "../input/input-form-field";
import { Selectformfield } from "../input/select-form-field";
import { DEPARTMENT } from "@/constants";
import { ButtonDefault } from "../button/button";

export const Sendusmessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phoneNo: "",
    emailID: "",
    divison: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resp = await axios.post("/api/", {
        params: formData,
        operation: "ContactForm",
      });

      if (resp.data.success) {
        console.log(resp.data.message);
      } else {
        console.log(resp.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Containerwrapper conatinerFull>
        <Subpagehero
          herobg="send-us-message-bg"
          title="Send us a message"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <Card className="w-[840px] mx-auto shadow-small px-unit-2xl py-unit-xl mt-[-150px]">
          <CardBody>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-x-unit-md gap-y-unit-xl">
                <Inputformfield
                  label="Name"
                  type="text"
                  labePlacement="outside"
                  placeholder="Name"
                  radius="sm"
                  variant="text-form-field"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Inputformfield
                  label="Company"
                  type="text"
                  labePlacement="outside"
                  placeholder="Company"
                  radius="sm"
                  variant="text-form-field"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
                <Inputformfield
                  label="Phone"
                  type="number"
                  labePlacement="outside"
                  placeholder="Phone"
                  radius="sm"
                  variant="text-form-field"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                />
                <Inputformfield
                  label="Email"
                  type="email"
                  labePlacement="outside"
                  placeholder="Email"
                  isRequired={true}
                  radius="sm"
                  variant="text-form-field"
                  name="emailID"
                  value={formData.emailID}
                  onChange={handleChange}
                />
                <Selectformfield
                  radius="sm"
                  label="Divison"
                  placeholder="Divison"
                  labePlacement="outside"
                  data={DEPARTMENT}
                  name="divison"
                  value={formData.divison}
                  onChange={handleChange}
                />
                <Inputformfield
                  label="Subject"
                  type="text"
                  labePlacement="outside"
                  placeholder="Subject"
                  radius="sm"
                  variant="text-form-field"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <div className="col-span-2">
                  <Inputformfield
                    label="Message"
                    type="text"
                    labePlacement="outside"
                    placeholder="Message"
                    radius="sm"
                    variant="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <ButtonDefault variant="btn-primary" type="submit" title="Send Message" />
              </div>
            </form>
          </CardBody>
        </Card>
      </Containerwrapper>
    </>
  );
};
