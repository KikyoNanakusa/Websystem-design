import LoginHeader from "../components/atoms/LoginHeader";
import LoginForm from "../components/organism/LoginForm";
import LoginFooter from "../components/atoms/LoginFooter";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    lineHeight: "1.6",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  },
};

export default function LoginPage() {
  return (
    <div style={styles.container}>
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </div>
  );
}
