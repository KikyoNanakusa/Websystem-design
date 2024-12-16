import React from "react";

type SelectBoxProps = {
  options: { label: string; value: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectBox: React.FC<SelectBoxProps> = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ced4da',
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
