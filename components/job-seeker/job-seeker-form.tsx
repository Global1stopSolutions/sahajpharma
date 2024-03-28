// components/MultiStepForm.tsx
"use client";
import { useState } from "react";
import { Inputformfield } from "../input/input-form-field";
import { Selectformfield } from "../input/select-form-field";
import { ButtonDefault } from "../button/button";

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    emailID: "",
    dateOfBirth: "",
    selectGender: "",
    phoneNo: "",
    mobileNo: "",
    gender: [
      {
        label: "Male",
        value: "Male",
      },
      {
        label: "female",
        value: "female",
      },
    ],
    qualification: "",
    totalExperience: "",
    currentLocation: "",
    lookingForPharma: "",
    currentCompany: "",
    currentPosition: "",
    currentCTC: "",
    expectedCTC: "",
    preferredLocation: "",
    previousEmployer: "",
    chooseFile: "",
    // Add more form fields as needed
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form data or do something else after submission
  };

  return (
    <div className="w-full p-unit-lg">
      <div className="flex justify-between items-center space-x-4 mb-unit-2xl relative">
        <div
          className={`flex items-center justify-center w-[48px] h-[48px] rounded-full z-10 ${
            step >= 1
              ? "bg-secondary text-white ring ring-secondary ring-offset-4"
              : "bg-primary text-white  ring ring-primary ring-offset-4"
          }`}
        >
          1
        </div>
        <div
          className={`flex items-center justify-center w-[48px] h-[48px] rounded-full z-10 ${
            step >= 2
              ? "bg-secondary text-white ring ring-secondary ring-offset-4"
              : "bg-primary text-white ring ring-primary ring-offset-4"
          }`}
        >
          2
        </div>
        <div
          className={`flex items-center justify-center w-[48px] h-[48px] rounded-full z-10 ${
            step >= 3
              ? "bg-secondary text-white ring ring-secondary ring-offset-4"
              : "bg-primary text-white ring ring-primary ring-offset-4"
          }`}
        >
          3
        </div>
        <div className="absolute w-full h-[2px] bg-content1-cultured left-[-8px]"></div>
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="grid grid-cols-3 gap-x-unit-md gap-y-unit-2xl">
            <Inputformfield
              label="Name"
              name="name"
              id="name"
              type="text"
              labePlacement="outside"
              placeholder="Name"
              radius="sm"
              variant="text-form-field"
              value={formData.name}
              onChange={handleChange}
            />
            <Inputformfield
              label="Email ID"
              name="emailID"
              id="emailID"
              type="email"
              isRequired={true}
              labePlacement="outside"
              placeholder="Email ID"
              radius="sm"
              variant="text-form-field"
              value={formData.emailID}
              onChange={handleChange}
            />
            <Inputformfield
              label="Date Of Birth"
              name="dateOfBirth"
              id="dateOfBirth"
              type="text"
              isRequired={true}
              labePlacement="outside"
              placeholder="Date Of Birth"
              radius="sm"
              variant="text-form-field"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            <Selectformfield
              radius="sm"
              label="Gender"
              placeholder="Gender"
              isRequired={true}
              labePlacement="outside"
              value={formData.gender}
              data={formData.gender}
              onChange={handleChange}
            />

            <Inputformfield
              label="Phone No"
              name="phoneNo"
              id="phoneNo"
              type="number"
              isRequired={true}
              labePlacement="outside"
              placeholder="Phone No"
              radius="sm"
              variant="text-form-field"
              value={formData.phoneNo}
              onChange={handleChange}
            />
            <Inputformfield
              label="Mobile No"
              name="mobileNo"
              id="mobileNo"
              type="number"
              isRequired={true}
              labePlacement="outside"
              placeholder="Mobile No"
              radius="sm"
              variant="text-form-field"
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </div>
        )}
        {step === 2 && (
          <div className="grid grid-cols-3 gap-x-unit-md gap-y-unit-2xl">
            <Inputformfield
              label="Qualification"
              name="qualification"
              id="qualification"
              type="text"
              isRequired={true}
              labePlacement="outside"
              placeholder="Qualification"
              radius="sm"
              variant="text-form-field"
              value={formData.qualification}
              onChange={handleChange}
            />
            <Inputformfield
              label="Total Experience"
              name="totalExperience"
              id="totalExperience"
              isRequired={true}
              type="text"
              labePlacement="outside"
              placeholder="Qualification"
              radius="sm"
              variant="text-form-field"
              value={formData.totalExperience}
              onChange={handleChange}
            />
            <Inputformfield
              label="Current Location"
              name="currentLocation"
              id="currentLocation"
              isRequired={true}
              type="text"
              labePlacement="outside"
              placeholder="Current Location"
              radius="sm"
              variant="text-form-field"
              value={formData.currentLocation}
              onChange={handleChange}
            />
            <Inputformfield
              label="Looking For Which Pharma Function"
              name="lookingForPharma"
              id="lookingForPharma"
              isRequired={true}
              type="text"
              labePlacement="outside"
              placeholder="Looking For Which Pharma Function"
              radius="sm"
              variant="text-form-field"
              value={formData.lookingForPharma}
              onChange={handleChange}
            />
            <Inputformfield
              label="Current Company"
              name="currentCompany"
              id="currentCompany"
              isRequired={true}
              type="text"
              labePlacement="outside"
              placeholder="Current Company"
              radius="sm"
              variant="text-form-field"
              value={formData.currentCompany}
              onChange={handleChange}
            />
            <Inputformfield
              label="Current Position"
              name="currentPosition"
              id="currentPosition"
              isRequired={true}
              type="text"
              labePlacement="outside"
              placeholder="Current Position"
              radius="sm"
              variant="text-form-field"
              value={formData.currentPosition}
              onChange={handleChange}
            />
          </div>
        )}
        {step === 3 && (
          <div className="grid grid-cols-3 gap-x-unit-md gap-y-unit-2xl">
            <Inputformfield
              label="Current CTC"
              name="currentCTC"
              id="currentCTC"
              isRequired={true}
              type="text"
              labePlacement="outside"
              placeholder="Current CTC"
              radius="sm"
              variant="text-form-field"
              value={formData.currentCTC}
              onChange={handleChange}
            />
            <Inputformfield
              label="Expected CTC"
              name="expectedCTC"
              id="expectedCTC"
              isRequired={true}
              type="text"
              labePlacement="outside"
              placeholder="Expected CTC"
              radius="sm"
              variant="text-form-field"
              value={formData.currentCTC}
              onChange={handleChange}
            />
            <Inputformfield
              label="Preferred Location"
              name="preferredLocation"
              id="preferredLocation"
              isRequired={true}
              type="text"
              labePlacement="outside"
              placeholder="Preferred Location"
              radius="sm"
              variant="text-form-field"
              value={formData.preferredLocation}
              onChange={handleChange}
            />
            <Inputformfield
              label="Previous Employer"
              name="previousEmployer"
              id="previousEmployer"
              isRequired={true}
              type="text"
              labePlacement="outside"
              placeholder="Previous Employer"
              radius="sm"
              variant="text-form-field"
              value={formData.previousEmployer}
              onChange={handleChange}
            />
            <div className="col-span-2">
              <Inputformfield
                label="Choose File"
                name="chooseFile"
                id="chooseFile"
                isRequired={true}
                type="file"
                labePlacement="outside"
                placeholder="Choose File"
                radius="sm"
                variant="text-form-field"
                value={formData.previousEmployer}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        <div className="mt-unit-xl flex justify-end space-x-unit-md">
          {step > 1 && (
            <ButtonDefault
              variant="btn-primary"
              onPress={prevStep}
              title="Previous"
            />
          )}
          {step < 3 && (
            <ButtonDefault
              variant="btn-primary"
              onPress={nextStep}
              title="Next"
            />
          )}
          {step === 3 && (
            <ButtonDefault variant="btn-primary" type="submit" title="Submit" />
          )}
        </div>
      </form>
    </div>
  );
};
