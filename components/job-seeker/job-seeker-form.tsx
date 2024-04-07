// components/MultiStepForm.tsx
"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Link } from "@nextui-org/react";
import { Inputformfield } from "../input/input-form-field";
import { Selectformfield } from "../input/select-form-field";
import { ButtonDefault } from "../button/button";
import { isValidEmail } from "@/lib/commonfunction";

export const MultiStepForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    dateOfBirth: "",
    gender: "",
    phoneNo: "",
    mobileNo: "",
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
  });

  const nameMsgRef = useRef<HTMLInputElement>(null);
  const emailMsgRef = useRef<HTMLInputElement>(null);
  const dobMsgRef = useRef<HTMLInputElement>(null);
  const genderMsgRef = useRef<HTMLInputElement>(null);
  const mobileMsgRef = useRef<HTMLInputElement>(null);
  const qualificationMsgRef = useRef<HTMLInputElement>(null);
  const totalExperienceMsgRef = useRef<HTMLInputElement>(null);
  const currentLocationMsgRef = useRef<HTMLInputElement>(null);
  const lookingForPharmaMsgRef = useRef<HTMLInputElement>(null);
  const currentCompanyMsgRef = useRef<HTMLInputElement>(null);
  const currentPositionMsgRef = useRef<HTMLInputElement>(null);
  const currentCTCMsgRef = useRef<HTMLInputElement>(null);
  const expectedCTCMsgRef = useRef<HTMLInputElement>(null);
  const preferredLocationMsgRef = useRef<HTMLInputElement>(null);
  const previousEmployerMsgRef = useRef<HTMLInputElement>(null);
  const cvMsgRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateFields = (step: number) => {
    let isValid = true;

    switch (step) {
      case 1:
        if (nameMsgRef.current) {
          nameMsgRef.current.style.display = "none";
        }
        if (emailMsgRef.current) {
          emailMsgRef.current.style.display = "none";
        }
        if (dobMsgRef.current) {
          dobMsgRef.current.style.display = "none";
        }
        if (genderMsgRef.current) {
          genderMsgRef.current.style.display = "none";
        }
        if (mobileMsgRef.current) {
          mobileMsgRef.current.style.display = "none";
        }
        if (isValid && !formData.name) {
          if (nameMsgRef.current) {
            nameMsgRef.current.style.display = "block";
            nameMsgRef.current.textContent = "Name can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.emailId) {
          if (emailMsgRef.current) {
            emailMsgRef.current.style.display = "block";
            emailMsgRef.current.textContent = "Email Id can't be blank";
          }
          isValid = false;
        }
        if (isValid && !isValidEmail(formData.emailId)) {
          if (emailMsgRef.current) {
            emailMsgRef.current.style.display = "block";
            emailMsgRef.current.textContent = "Please enter a valid email id";
          }
          isValid = false;
        }
        if (isValid && !formData.dateOfBirth) {
          if (dobMsgRef.current) {
            dobMsgRef.current.style.display = "block";
            dobMsgRef.current.textContent = "Date Of Birth can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.gender) {
          if (genderMsgRef.current) {
            genderMsgRef.current.style.display = "block";
            genderMsgRef.current.textContent = "Gender can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.mobileNo) {
          if (mobileMsgRef.current) {
            mobileMsgRef.current.style.display = "block";
            mobileMsgRef.current.textContent = "Mobile No can't be blank";
          }
          isValid = false;
        }
        break;
      case 2:
        if (qualificationMsgRef.current) {
          qualificationMsgRef.current.style.display = "none";
        }
        if (totalExperienceMsgRef.current) {
          totalExperienceMsgRef.current.style.display = "none";
        }
        if (currentLocationMsgRef.current) {
          currentLocationMsgRef.current.style.display = "none";
        }
        if (lookingForPharmaMsgRef.current) {
          lookingForPharmaMsgRef.current.style.display = "none";
        }
        if (currentCompanyMsgRef.current) {
          currentCompanyMsgRef.current.style.display = "none";
        }
        if (currentPositionMsgRef.current) {
          currentPositionMsgRef.current.style.display = "none";
        }
        if (isValid && !formData.qualification) {
          if (qualificationMsgRef.current) {
            qualificationMsgRef.current.style.display = "block";
            qualificationMsgRef.current.textContent = "Qualification can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.totalExperience) {
          if (totalExperienceMsgRef.current) {
            totalExperienceMsgRef.current.style.display = "block";
            totalExperienceMsgRef.current.textContent = "Total Experience can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.currentLocation) {
          if (currentLocationMsgRef.current) {
            currentLocationMsgRef.current.style.display = "block";
            currentLocationMsgRef.current.textContent = "Current Location can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.lookingForPharma) {
          if (lookingForPharmaMsgRef.current) {
            lookingForPharmaMsgRef.current.style.display = "block";
            lookingForPharmaMsgRef.current.textContent = "Pharma Function can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.currentCompany) {
          if (currentCompanyMsgRef.current) {
            currentCompanyMsgRef.current.style.display = "block";
            currentCompanyMsgRef.current.textContent = "Current Company can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.currentPosition) {
          if (currentPositionMsgRef.current) {
            currentPositionMsgRef.current.style.display = "block";
            currentPositionMsgRef.current.textContent = "Current Position can't be blank";
          }
          isValid = false;
        }
        break;
      case 3:
        if (currentCTCMsgRef.current) {
          currentCTCMsgRef.current.style.display = "none";
        }
        if (expectedCTCMsgRef.current) {
          expectedCTCMsgRef.current.style.display = "none";
        }
        if (preferredLocationMsgRef.current) {
          preferredLocationMsgRef.current.style.display = "none";
        }
        if (previousEmployerMsgRef.current) {
          previousEmployerMsgRef.current.style.display = "none";
        }
        if (cvMsgRef.current) {
          cvMsgRef.current.style.display = "none";
        }
        if (isValid && !formData.currentCTC) {
          if (currentCTCMsgRef.current) {
            currentCTCMsgRef.current.style.display = "block";
            currentCTCMsgRef.current.textContent = "Qualification can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.expectedCTC) {
          if (expectedCTCMsgRef.current) {
            expectedCTCMsgRef.current.style.display = "block";
            expectedCTCMsgRef.current.textContent = "Total Experience can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.preferredLocation) {
          if (preferredLocationMsgRef.current) {
            preferredLocationMsgRef.current.style.display = "block";
            preferredLocationMsgRef.current.textContent = "Current Location can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.previousEmployer) {
          if (previousEmployerMsgRef.current) {
            previousEmployerMsgRef.current.style.display = "block";
            previousEmployerMsgRef.current.textContent = "Pharma Function can't be blank";
          }
          isValid = false;
        }
        if (isValid && !formData.chooseFile) {
          if (cvMsgRef.current) {
            cvMsgRef.current.style.display = "block";
            cvMsgRef.current.textContent = "CV can't be blank";
          }
          isValid = false;
        }
        break;
    }
    return isValid;
  };

  const nextStep = () => {
    const isValid = validateFields(step);
    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, chooseFile: file.name });

      const fileData = new FormData();
      fileData.append("file", file);

      try {
        const response = await axios.post("/api/upload", {
          method: "POST",
          body: fileData,
        });

        if (response.data.success) {
          console.log("File uploaded successfully");
        } else {
          console.error("Failed to upload file:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateFields(3);

    if (isValid) {
      try {
        const resp = await axios.post("/api/", {
          params: formData,
          operation: "RegistrationForm",
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
    }
  };

  return (
    <div className="w-full p-unit-lg">
      <Link
        target="_blank"
        href="https://www.naukri.com/nlogin/login?URL=https%3A%2F%2Fapply.naukri.com%2Fapply%2Fcareer-site%3Fapplytype%3Dsingle%26ApplyMode%3D1%26src%3DDROPCV%26applySrc%3DDROPCV%26jobId%3D3383562DCV14610%26logstr%3Dcareersite%26applyRedirectUrl%3Dhttp%3A%2F%2Fjobs.sahajpharma.com%2Fsubmit-profile%2F%3Fdcv%3D1"
      >
        <ButtonDefault variant="btn-primary" title="Submit Naukri Profile" />
      </Link>
      <div className="border-t border-lightgray-600 my-unit-lg" />
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
      <form onSubmit={handleSubmit} noValidate>
        {step === 1 && (
          <div className="grid grid-cols-3 gap-x-unit-md gap-y-unit-2xl">
            <Inputformfield
              label="Name"
              name="name"
              id="name"
              type="text"
              isRequired={true}
              labePlacement="outside"
              placeholder="Name"
              radius="sm"
              variant="text-form-field"
              value={formData.name}
              onChange={handleChange}
              errorMsgRef={nameMsgRef}
            />
            <Inputformfield
              label="Email ID"
              name="emailId"
              id="emailId"
              type="email"
              isRequired={true}
              labePlacement="outside"
              placeholder="Email ID"
              radius="sm"
              variant="text-form-field"
              value={formData.emailId}
              onChange={handleChange}
              errorMsgRef={emailMsgRef}
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
              errorMsgRef={dobMsgRef}
            />
            <Selectformfield
              radius="sm"
              label="Gender"
              name="gender"
              placeholder="Gender"
              isRequired={true}
              labePlacement="outside"
              value={formData.gender}
              data={[
                {
                  label: "Male",
                  value: "Male",
                },
                {
                  label: "female",
                  value: "female",
                },
              ]}
              onChange={handleChange}
              errorMsgRef={genderMsgRef}
            />

            <Inputformfield
              label="Phone No"
              name="phoneNo"
              id="phoneNo"
              type="number"
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
              errorMsgRef={mobileMsgRef}
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
              errorMsgRef={qualificationMsgRef}
            />
            <Inputformfield
              label="Total Experience"
              name="totalExperience"
              id="totalExperience"
              isRequired={true}
              type="text"
              labePlacement="outside"
              placeholder="Total Experience"
              radius="sm"
              variant="text-form-field"
              value={formData.totalExperience}
              onChange={handleChange}
              errorMsgRef={totalExperienceMsgRef}
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
              errorMsgRef={currentLocationMsgRef}
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
              errorMsgRef={lookingForPharmaMsgRef}
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
              errorMsgRef={currentCompanyMsgRef}
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
              errorMsgRef={currentPositionMsgRef}
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
              errorMsgRef={currentCTCMsgRef}
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
              value={formData.expectedCTC}
              onChange={handleChange}
              errorMsgRef={expectedCTCMsgRef}
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
              errorMsgRef={preferredLocationMsgRef}
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
              errorMsgRef={previousEmployerMsgRef}
            />
            <div className="formcontainer filecontainer">
              <label
                htmlFor="chooseFile"
                className="text-base text-content1-charlestonGreen font-medium label-hidden after:content-['*'] after:text-danger"
              >
                Upload CV:
              </label>
              <input
                type="file"
                id="chooseFile"
                name="chooseFile"
                required
                onChange={handleFileChange}
                className="bg-content1-cultured data-[hover=true]:bg-default-200"
              />
              <span ref={cvMsgRef} className="formerror"></span>
            </div>
          </div>
        )}
        <div className="mt-unit-xl flex justify-end space-x-unit-md">
          {step > 1 && <ButtonDefault variant="btn-primary" onPress={prevStep} title="Previous" />}
          {step < 3 && <ButtonDefault variant="btn-primary" onPress={nextStep} title="Next" />}
          {step === 3 && <ButtonDefault variant="btn-primary" type="submit" title="Submit" />}
        </div>
      </form>
    </div>
  );
};
