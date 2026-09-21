import React, { useState } from "react";
import { FaBriefcase, FaDownload, FaCheck } from "react-icons/fa";
import "./CurrentJob.css";

const CurrentJob = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      advtNo: "i3/2026/04",
      date: "03 Aug 2026",
      post: "Marketing Officer",
      description:
        "Required Skills: Computer Knowledge. Qualification: Graduate Pass . Nature: Full Time.",
      closingDate: "30 Sept 2026",
      applied: true,
      jd: null,
    },
    {
      id: 2,
      advtNo: "II/2026/03",
      date: "20 May 2026",
      post: "UI/UX Design Intern",
      description:
        "Required Skills: Figma, Adobe XD, Wireframing. Qualification: Graduation. Nature: Full Time.",
      closingDate: "10 Jul 2026",
      applied: true,
      jd: "UI-UX-Design-Intern.pdf",
    },
    {
      id: 3,
      advtNo: "II/2026/02",
      date: "18 May 2026",
      post: "Data Analytics Intern",
      description:
        "Required Skills: Python, SQL, PowerBI, Pandas. Qualification: B.Sc / B.Tech. Nature: Hybrid.",
      closingDate: "05 Jul 2026",
      applied: false,
      jd: "Data-Analytics-Intern.pdf",
    },
    {
      id: 4,
      advtNo: "II/2026/01",
      date: "15 May 2026",
      post: "Software Engineering Intern",
      description:
        "Required Skills: React, Node.js, Next.js, PostgreSQL. Qualification: B.Tech / MCA. Nature: Full Time.",
      closingDate: "30 Jun 2026",
      applied: false,
      jd: "Software-Engineering-Intern.pdf",
    },
  ]);

  const handleApply = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, applied: true } : job
      )
    );
  };

  const handleDownload = (job) => {
    if (!job.jd) {
      alert("Job Description PDF is not available for this job.");
      return;
    }

    /*
      Put your actual PDF files inside:
      public/job-descriptions/

      Example:
      public/job-descriptions/UI-UX-Design-Intern.pdf
    */

    const fileUrl = `/job-descriptions/${job.jd}`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = job.jd;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="currentJob">
      <div className="currentJob__container">
        {/* Header */}
        <div className="currentJob__header">
          <div className="currentJob__icon">
            <FaBriefcase />
          </div>

          <div className="currentJob__headerContent">
            <h1>Job Openings</h1>
            <p>
              Browse through the active recruitment notices and submit your
              expression of interest.
            </p>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="currentJob__tableWrapper">
          <table className="currentJob__table">
            <thead>
              <tr>
                <th>ADVT. NO. &amp; DATE</th>
                <th>NAME OF THE POST</th>
                <th>JOB DESCRIPTION</th>
                <th>CLOSING DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  {/* Advertisement */}
                  <td className="currentJob__advt">
                    <strong>{job.advtNo}</strong>
                    <span>{job.date}</span>
                  </td>

                  {/* Post */}
                  <td className="currentJob__post">
                    <strong>{job.post}</strong>
                  </td>

                  {/* Description */}
                  <td className="currentJob__description">
                    <p>{job.description}</p>

                    {job.jd && (
                      <button
                        type="button"
                        className="currentJob__download"
                        onClick={() => handleDownload(job)}
                      >
                        <FaDownload />
                        <span>Download JD</span>
                      </button>
                    )}
                  </td>

                  {/* Closing Date */}
                  <td className="currentJob__closing">
                    <span>{job.closingDate}</span>
                  </td>

                  {/* Action */}
                  <td className="currentJob__action">
                    {job.applied ? (
                      <button
                        type="button"
                        className="currentJob__applied"
                        disabled
                      >
                        <FaCheck />
                        <span>Applied</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="currentJob__apply"
                        onClick={() => handleApply(job.id)}
                      >
                        Apply Now
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="currentJob__mobileList">
          {jobs.map((job) => (
            <article className="currentJob__card" key={job.id}>
              <div className="currentJob__cardTop">
                <div>
                  <span className="currentJob__mobileLabel">
                    ADVT. NO. &amp; DATE
                  </span>

                  <strong className="currentJob__cardAdvt">
                    {job.advtNo}
                  </strong>

                  <span className="currentJob__cardDate">{job.date}</span>
                </div>

                <div className="currentJob__mobileClosing">
                  <span>CLOSING DATE</span>
                  <strong>{job.closingDate}</strong>
                </div>
              </div>

              <div className="currentJob__cardBody">
                <span className="currentJob__mobileLabel">
                  NAME OF THE POST
                </span>

                <h2>{job.post}</h2>

                <span className="currentJob__mobileLabel">
                  JOB DESCRIPTION
                </span>

                <p>{job.description}</p>

                <div className="currentJob__cardActions">
                  {job.jd && (
                    <button
                      type="button"
                      className="currentJob__download"
                      onClick={() => handleDownload(job)}
                    >
                      <FaDownload />
                      <span>Download JD</span>
                    </button>
                  )}

                  {job.applied ? (
                    <button
                      type="button"
                      className="currentJob__applied"
                      disabled
                    >
                      <FaCheck />
                      <span>Applied</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="currentJob__apply"
                      onClick={() => handleApply(job.id)}
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentJob;