import { CSSProperties } from "react";
import StyledLink from "./StyledLink";

const styles: { [key: string]: CSSProperties }= {
  footer: {
    textAlign: "center",
    marginTop: "20px",
  },
};

export default function LoginFooter() {
  return (
    <footer style={styles.footer}>
      <p>
        アカウントをお持ちではありませんか？
      </p>
      <StyledLink to="/register">登録</StyledLink>
    </footer>
  );
}