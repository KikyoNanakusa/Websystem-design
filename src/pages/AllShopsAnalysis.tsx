import React, { useEffect, useState } from "react";
import StyledLink from "../components/atoms/StyledLink";
import BarChart from "../components/atoms/BarChart";
import PieChart from "../components/atoms/PieChart";
import LineChart from "../components/atoms/LineChart";

const API_BASE_URL = "http://localhost:4000";

interface ShopSalesData {
  shopName: string;
  totalSales: number;
}

export default function AllShopsAnalyzePage() {
  const [shops, setShops] = useState<string[]>([]);
  const [sales, setSales] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllShopsData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/all-shops`);
        if (!response.ok) {
          throw new Error(`HTTPエラー: ${response.status}`);
        }
        const data: ShopSalesData[] = await response.json();

        // 店舗名と売上データを抽出
        const shopNames = data.map((shop) => shop.shopName);
        const totalSales = data.map((shop) => shop.totalSales);

        setShops(shopNames);
        setSales(totalSales);
        setLoading(false);
      } catch (error) {
        console.error("全店舗データの取得に失敗しました:", error);
        setShops([]);
        setSales([]);
        setLoading(false);
      }
    };

    fetchAllShopsData();
  }, []);

  const generateLineData = () => {
    const xValues: number[] = sales.map((_, index) => index + 1);
    const yValues: number[] = sales;
    return { xValues, yValues };
  };

  const lineData = generateLineData();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "40px",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ color: "#343a40", margin: "0 0 10px" }}>全店舗のデータ</h1>
        <p style={{ fontSize: "18px", color: "#6c757d", margin: "0" }}>
          全店舗の売上に関するデータの表示
        </p>
        <StyledLink to="/analyze-form" style={{ marginTop: "10px", display: "inline-block" }}>
          店舗選択ページに戻る
        </StyledLink>
      </header>

      {loading ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#6c757d",
            margin: "40px 0",
          }}
        >
          データを読み込み中...
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <BarChart xData={shops} yData={sales} title="全店売上" />
          </div>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <PieChart labels={shops} values={sales} title="売上構成比" />
          </div>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <LineChart xData={lineData.xValues} yData={lineData.yValues} title="売上の推移" />
          </div>
        </div>
      )}
    </div>
  );
}
