import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-900 p-5">
        <div className="flex flex-col lg:flex-row gap-5 justify-between lg:items-end">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Tingeworks</h2>
            <p className="text-sm">The Web and Native App Factory</p>
          </div>

          <div>
            <ul className="flex gap-5">
              <li>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/tingeworks.team/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-instagram"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ff4500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/tingeworks"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-meta"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z" />
                    <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/tingeworks-ltd"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-linkedin"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#00abfb"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link target="_blank" href="https://twitter.com/tingeworks">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-x"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#00bfd8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div>All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
