"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Subpagehero } from "../sub-page-hero/sub-page-hero";
import { Containerwrapper } from "../container/container-wrapper";
import { Card, CardBody } from "@nextui-org/react";
import { Inputformfield } from "../input/input-form-field";
import { Selectformfield } from "../input/select-form-field";
import { DEPARTMENT } from "@/constants";
import { ButtonDefault } from "../button/button";
import { isValidEmail } from "@/lib/commonfunction";

export const Sendusmessage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phoneNo: "",
    emailId: "",
    divison: "",
    subject: "",
    message: "",
  });
  const emailMsgRef = useRef<HTMLInputElement>(null);
  const nameMsgRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nameMsgRef.current) {
      if (formData.name.trim().length === 0) {
        nameMsgRef.current.style.display = "block";
        nameMsgRef.current.textContent = "Name can't be blank";
        return;
      } else {
        nameMsgRef.current.style.display = "none";
      }
    }

    if (emailMsgRef.current) {
      if (formData.emailId.trim().length === 0) {
        emailMsgRef.current.style.display = "block";
        emailMsgRef.current.textContent = "Email Id can't be blank";
        return;
      } else {
        emailMsgRef.current.style.display = "none";
      }

      if (!isValidEmail(formData.emailId)) {
        emailMsgRef.current.style.display = "block";
        emailMsgRef.current.textContent = "Please enter a valid email id";
        return;
      } else {
        emailMsgRef.current.style.display = "none";
      }
    }

    try {
      const resp = await axios.post("/api/", {
        params: formData,
        operation: "ContactForm",
      });

      if (resp.data.success) {
        console.log(resp.data.message);
        router.push("/");
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
        <Card className="md:w-[840px] md:mx-auto mx-unit-lg shadow-small md:px-unit-2xl px-unit-lg  py-unit-xl md:mt-[-150px] mt-unit-lg">
          <CardBody>
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-unit-xl md:grid md:grid-cols-2 md:gap-x-unit-md md:gap-y-unit-xl">
                <Inputformfield
                  label="Name"
                  type="text"
                  labePlacement="outside"
                  placeholder="Name"
                  isRequired={true}
                  radius="sm"
                  variant="text-form-field"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  errorMsgRef={nameMsgRef}
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
                  id="email"
                  labePlacement="outside"
                  placeholder="Email"
                  isRequired={true}
                  radius="sm"
                  variant="text-form-field"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  errorMsgRef={emailMsgRef}
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
