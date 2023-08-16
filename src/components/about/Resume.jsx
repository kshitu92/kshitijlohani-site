import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2010 - 2015",
          institute: "Northeastern University",
          degree: "B.Sc Computer Engineeing (HONS)",
        },
        {
          id: 2,
          year: "2007 - 2009",
          institute: "Chelsea Int'l Academy",
          degree: "A-Levels",
        },
        {
          id: 3,
          year: "2007",
          institute: "Nobel Academy",
          degree: "S.L.C",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2018 - Now",
          institute: "Apple Inc",
          degree: "Senior Software Engineer",
        },
        {
          id: 2,
          year: "2015 - 2018",
          institute: "Goldman Sachs",
          degree: "Tech Analyst",
        },
        {
          id: 3,
          year: "2013 - 2013",
          institute: "Paypal Inc",
          degree: "Software co-op",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
