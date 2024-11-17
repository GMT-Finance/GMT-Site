import React from "react";
import Card from "./Card";

const Details = ({ details }) => {
  const detailsList = {
    name: "Nome",
    country: "País",
    currency: "Moeda",
    exchange: "Exchange",
    ipo: "Data de IPO",
    marketCapitalization: "Valor de mercado",
    finnhubIndustry: "Indústria",
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between divide-y text-white">
        {Object.keys(detailsList).map((item) => (
          <li key={item} className="flex-1 flex justify-between items-center">
            <span>{detailsList[item]}</span>
            <span>
              {item === "marketCapitalization"
                ? `${convertMillionToBillion(details[item])}B`
                : item === "ipo"
                ? formatDate(details[item])
                : details[item]}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Details;


