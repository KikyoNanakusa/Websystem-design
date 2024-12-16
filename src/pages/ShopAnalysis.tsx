import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import StyledLink from "../components/atoms/StyledLink";

const API_BASE_URL = "http://localhost:4000";

const ShopAnalysis: React.FC = () => {
  const [searchParams] = useSearchParams();
  const shopId = searchParams.get("shopId");
  const [shopData, setShopData] = useState<{ name: string; sales: number; description: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (shopId) {
      const fetchShopData = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/api/shop?shopId=${shopId}`);
          if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status}`);
          }
          const data = await response.json();
          setShopData(data);
        } catch (error) {
          console.error("店舗データの取得に失敗しました:", error);
          setShopData({ name: "エラー", sales: 0, description: "データの取得に失敗しました" });
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
        <h1 style={{ color: "#343a40" }}>{shopData?.name}の売上データ</h1>
        <StyledLink to="/">店舗選択ページに戻る</StyledLink>
      </header>

      <section style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2>店舗情報</h2>
        <p>店舗名: {shopData?.name}</p>
        <p>売上: {shopData?.sales} 万円</p>
        <p>詳細: {shopData?.description}</p>
      </section>
    </div>
  );
};

export default ShopAnalysis;
