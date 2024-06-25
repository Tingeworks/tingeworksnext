import PageHeader from "@/components/headings/pageheader";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tingeworks | Contact",
  description: "Get in touch with us. We would love to hear from you.",
};

const headerContent = {
  title: "Contact",
  pronunciation: "/ˈkɒntakt/",
};

export default function Contact() {
  return (
    <div className="mt-28">
      <PageHeader content={headerContent} />
      <div className="mt-10 mb-20">
        <p className="mb-5">
          Get in touch with us. We would love to hear from you.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <div className="mt-5">
          <p>
            Email:{" "}
            <a href="mailto:imtiaz@tingeworks.com" className="underline">
              imtiaz@tingeworks.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+8801846342780" className="underline">
              +8801846342780
            </a>
          </p>
        </div>
      </div>

      <Script
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        async
      />

      <div className="mt-10 ">
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="667482f3e86cb73356c94a01"
          data-style-height="52px"
          data-style-width="100%"
        >
          <a
            href="https://www.trustpilot.com/review/tingeworks.com"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </div>
      </div>
    </div>
  );
}
