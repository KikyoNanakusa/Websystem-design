import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties }= {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#ffffff",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("ログインボタンがクリックされました");
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="メールアドレス"
        style={styles.input}
        required
      />
      <input
        type="password"
        placeholder="パスワード"
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>
        ログイン
      </button>
    </form>
  );
}