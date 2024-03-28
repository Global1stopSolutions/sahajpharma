import React from "react";
import { Subpagehero } from "../sub-page-hero/sub-page-hero";
import { Containerwrapper } from "../container/container-wrapper";
import { Card, CardBody } from "@nextui-org/react";
import { Inputformfield } from "../input/input-form-field";
import { Selectformfield } from "../input/select-form-field";
import { DEPARTMENT } from "@/constants";
import { ButtonDefault } from "../button/button";

export const Sendusmessage = () => {
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
            <form>
              <div className="grid grid-cols-2 gap-x-unit-md gap-y-unit-xl">
                <Inputformfield
                  label="Name"
                  type="text"
                  labePlacement="outside"
                  placeholder="Name"
                  radius="sm"
                  variant="text-form-field"
                />
                <Inputformfield
                  label="Company"
                  type="text"
                  labePlacement="outside"
                  placeholder="Company"
                  radius="sm"
                  variant="text-form-field"
                />
                <Inputformfield
                  label="Phone"
                  type="number"
                  labePlacement="outside"
                  placeholder="Phone"
                  radius="sm"
                  variant="text-form-field"
                />
                <Inputformfield
                  label="Email"
                  type="email"
                  labePlacement="outside"
                  placeholder="Email"
                  radius="sm"
                  variant="text-form-field"
                />
                <Selectformfield
                  radius="sm"
                  label="Divison"
                  placeholder="Divison"
                  labePlacement="outside"
                  data={DEPARTMENT}
                />
                <Inputformfield
                  label="Subject"
                  type="text"
                  labePlacement="outside"
                  placeholder="Subject"
                  radius="sm"
                  variant="text-form-field"
                />
                <div className="col-span-2">
                  <Inputformfield
                    label="Message"
                    type="text"
                    labePlacement="outside"
                    placeholder="Message"
                    radius="sm"
                    variant="textarea"
                  />
                </div>
                <ButtonDefault variant="btn-primary" title="Send Message" />
              </div>
            </form>
          </CardBody>
        </Card>
      </Containerwrapper>
    </>
  );
};
