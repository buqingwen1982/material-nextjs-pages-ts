import Button from "@mui/material/Button";
import Link from "../src/Link";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function About() {
  console.log("我是登录页面");

  const router = useRouter();

  const loginFn = () => {
    console.log("我是登录方法");
    localStorage.setItem("token", "123456");
    router.push("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h1" gutterBottom>
        我是登录页面
      </Typography>
      <div>
        <Button variant="contained" onClick={loginFn}>
          登录
        </Button>
        <Button
          variant="contained"
          component={Link}
          noLinkStyle
          href="/register"
        >
          注册
        </Button>
      </div>
    </div>
  );
}
