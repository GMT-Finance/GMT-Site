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
    if (!dateString) return "Data inválida";
    const parts = dateString.split("-");
    if (parts.length !== 3) return "Formato inválido";
    const [year, month, day] = parts;
    return `${day}/${month}/${year}`;
  };

  const convertMillionToBillion = (number) => {
    if (typeof number !== "number" || isNaN(number)) return "N/A";
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between divide-y text-white">
        {Object.keys(detailsList).map((item) => {
          const value = details?.[item]; // Safe access
          let displayValue;

          // Define the display value with safe checks
          if (item === "marketCapitalization") {
            displayValue = value ? `${convertMillionToBillion(value)}B` : "N/A";
          } else if (item === "ipo") {
            displayValue = value ? formatDate(value) : "N/A";
          } else {
            displayValue = value || "N/A";
          }

          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailsList[item]}</span>
              <span>{displayValue}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;
