import React from "react";

const FunFact = () => {
  const funFactContent = [
    {
      id: 1,
      number: "Northeastern University",
      meta: "B.Sc in Computer Engineering (HONS)",
    },
    {
      id: 2,
      number: "3K",
      meta: "Happy Clients",
    },
  ];
  return (
    <>
      {funFactContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            <h3>{item.number}</h3>
            <span>{item.meta}</span>
          </div>
        </li>
      ))}
    </>
  );
};

export default FunFact;
