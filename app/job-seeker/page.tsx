import { Containerwrapper } from "@/components/container/container-wrapper";
import { MultiStepForm } from "@/components/job-seeker/job-seeker-form";

import { Subpagehero } from "@/components/sub-page-hero/sub-page-hero";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function jobseekerPage() {
  return (
    <>
      <Subpagehero
        herobg="job-seeker-bg"
        title="Job Seeker"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <Containerwrapper>
        <Card className="rounded-lg realtive overflow-visible shadow-small w-[1024px] mx-auto mb-unit-4xl">
          <CardBody className="items-start space-y-unit-md py-unit-xl overflow-visible">
            <MultiStepForm />
          </CardBody>
        </Card>
      </Containerwrapper>
    </>
  );
}