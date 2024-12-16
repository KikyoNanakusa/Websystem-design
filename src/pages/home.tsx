import StyledLink from "../components/atoms/StyledLink";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6' }}>
      <header style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center', borderRadius: '8px' }}>
        <h1 style={{ color: '#343a40', margin: '0' }}>Y書店</h1>
      </header>
      <main style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', color: '#6c757d' }}>書店についての説明</p>
        <StyledLink to="/analyze-form">分析フォームへ</StyledLink>
      </main>
    </div>
  );
}
