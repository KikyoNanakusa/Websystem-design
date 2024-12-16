import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectBox from "../components/atoms/SelectBox";
import Button from "../components/atoms/StyledButton";
import StyledLink from "../components/atoms/StyledLink";

interface Store {
  shopId: string;
  shopName: string;
  sales: number;
  description: string;
}

interface StoreOption {
  label: string;
  value: string; 
  data: Store | null;
}

const AnalyzeForm: React.FC = () => {
  const navigate = useNavigate();
  const [storeOptions, setStoreOptions] = useState<StoreOption[]>([
    { label: "店舗を選択", value: "", data: null },
    { label: "全店舗の比較分析", value: "all-shops", data: null }, // 全店舗分析オプション
  ]);
  const [selectedOption, setSelectedOption] = useState("");

  const API_BASE_URL = "http://localhost:4000";

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/shops`);
        if (!response.ok) {
          throw new Error(`HTTPエラー: ${response.status}`);
        }

        const data: Store[] = await response.json();

        const dynamicOptions = data.map((store) => ({
          label: store.shopName,
          value: store.shopId,
          data: store,
        }));

        // 初期選択肢 + 動的選択肢をセット
        setStoreOptions((prev) => [...prev, ...dynamicOptions]);
      } catch (error) {
        console.error("店舗データの取得に失敗しました:", error);
      }
    };
    fetchStores();
  }, [API_BASE_URL]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedOption === "all-shops") {
      // 全店舗比較分析ページに遷移
      navigate(`/all-shops-analysis`);
    } else if (selectedOption) {
      // 特定店舗分析ページに遷移
      navigate(`/shop-analysis?shopId=${selectedOption}`);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      <header
        style={{
          marginBottom: "20px",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ color: "#343a40", margin: "0" }}>商品分析ページ</h1>
      </header>

      <form
        onSubmit={handleFormSubmit}
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ fontSize: "16px", color: "#6c757d", marginBottom: "15px" }}>
          店舗を選択してください
        </p>
        <nav style={{ marginBottom: "20px" }}>
          <SelectBox options={storeOptions} value={selectedOption} onChange={handleSelectChange} />
        </nav>
        <Button disabled={!selectedOption}>遷移</Button>
      </form>

      <footer style={{ marginTop: "20px", textAlign: "center" }}>
        <StyledLink to="/">戻る</StyledLink>
      </footer>
    </div>
  );
};

export default AnalyzeForm;
