import { Getintouch } from "@/components/contact-us/get-in-touch";
import { Sendusmessage } from "@/components/contact-us/send-us-message";
import { Subpagehero } from "@/components/sub-page-hero/sub-page-hero";

export default function contactPage() {
  return (
    <>
      <Subpagehero
        herobg="contact-us-bg"
        title="Contact us"
        description="We would love to hear from you"
      />
      <Getintouch />
      <Sendusmessage />
    </>
  );
}
