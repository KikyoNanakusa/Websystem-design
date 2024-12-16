import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import StyledLink from "../components/atoms/StyledLink";
import LineChart from "../components/atoms/LineChart";

const API_BASE_URL = "http://localhost:4000";

interface ShopData {
  shopName: string;
  location: string;
  description: string;
}

interface SalesData {
  productName: string;
  quantity: number;
  saleDate: string; 
}

const ShopAnalysis: React.FC = () => {
  const [searchParams] = useSearchParams();
  const shopId = searchParams.get("shopId");

  const [shopData, setShopData] = useState<ShopData | null>(null);
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (shopId) {
      const fetchShopData = async () => {
        try {
          // 店舗データを取得
          const shopResponse = await fetch(`${API_BASE_URL}/api/shop?shopId=${shopId}`);
          if (!shopResponse.ok) {
            throw new Error(`店舗データ取得エラー: ${shopResponse.status}`);
          }
          const shop: ShopData = await shopResponse.json();
          setShopData(shop);

          // 販売データを取得
          const salesResponse = await fetch(`${API_BASE_URL}/api/sales?shopId=${shopId}`);
          if (!salesResponse.ok) {
            throw new Error(`販売データ取得エラー: ${salesResponse.status}`);
          }
          const sales: SalesData[] = await salesResponse.json();
          setSalesData(sales);
        } catch (error) {
          console.error("データ取得に失敗しました:", error);
          setShopData({ shopName: "エラー", location: "", description: "データの取得に失敗しました" });
          setSalesData([]);
        } finally {
          setLoading(false);
        }
      };

      fetchShopData();
    }
  }, [shopId]);

  if (!shopId) {
    return <p style={{ textAlign: "center", fontSize: "18px" }}>店舗IDが指定されていません。</p>;
  }

  if (loading) {
    return <p style={{ textAlign: "center", fontSize: "18px" }}>データを読み込み中...</p>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ color: "#343a40" }}>{shopData?.shopName}の分析データ</h1>
        <StyledLink to="/analyze-form">店舗選択ページに戻る</StyledLink>
      </header>

      <section style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2>店舗情報</h2>
        <p>店舗名: {shopData?.shopName}</p>
        <p>所在地: {shopData?.location}</p>
        <p>詳細: {shopData?.description}</p>
      </section>

      <section style={{ marginTop: "20px", backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2>販売データ</h2>
        {salesData.length > 0 ? (
          <LineChart
            xData={salesData.map((sale) => new Date(sale.saleDate).getTime())} // 数値に変換
            yData={salesData.map((sale) => sale.quantity)}
            title="販売数量の推移"
          />
        ) : (
          <p>販売データがありません。</p>
        )}
      </section>
    </div>
  );
};

export default ShopAnalysis;
