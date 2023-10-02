import React, { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

const Dropdown = () => {
  const [input, setInput] = useState("");
  const filteredCities = countries
    .filter(({ name }) => name === input)
    .map(({ cities }) => cities)
    .flat();

  return (
    <div>
      <select
        name="click"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      >
        <option></option>
        {countries.map(({ name, value }) => {
          return <option key={value}>{name}</option>;
        })}
      </select>

      {!!filteredCities.length && (
        <select>
          {filteredCities.map((value, index) => {
            return (
              <option selected={!value} key={index}>
                {value}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default Dropdown;
