import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

export default function LoginHeader() {
  return (
    <header style={styles.header}>
      <h1>ログイン</h1>
      <p>アカウントにサインインしてください</p>
    </header>
  );
}
