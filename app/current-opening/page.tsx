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
        <div className="grid  sm:grid-cols-3 md:grid-cols-4 gap-x-unit-md gap-y-unit-2xl mb-unit-4xl sm:mb-unit-0">
          <JobOPeningCard jobNumber={12} />
        </div>
      </Containerwrapper>
    </>
  );
}
