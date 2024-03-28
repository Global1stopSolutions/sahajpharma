import { JobOPeningCard } from "@/components/cards/job-opening-cards";
import { Containerwrapper } from "@/components/container/container-wrapper";
import { Subpagehero } from "@/components/sub-page-hero/sub-page-hero";

export default function currentOpeningPage() {
  return (
    <>
      <Subpagehero
        herobg="current-opening-bg"
        title="Browse Job"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Containerwrapper>
        <div className="grid grid-cols-4 gap-x-unit-md gap-y-unit-2xl">
          <JobOPeningCard jobNumber={12} />
        </div>
      </Containerwrapper>
    </>
  );
}
