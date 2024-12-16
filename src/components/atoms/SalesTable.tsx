import React from "react";

type SalesData = {
  product: string;
  units: number;
};

type SalesTableProps = {
  data: SalesData[];
};

const SalesTable: React.FC<SalesTableProps> = ({ data }) => {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        margin: "20px 0",
        fontSize: "18px",
      }}
      border={1}
    >
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2" }}>
          <th style={{ padding: "10px" }}>商品名</th>
          <th style={{ padding: "10px" }}>売上冊数</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.product}>
            <td style={{ padding: "10px", textAlign: "center" }}>{item.product}</td>
            <td style={{ padding: "10px", textAlign: "center" }}>{item.units}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
