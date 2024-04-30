import Button from "@mui/material/Button";
import Link from "../src/Link";
import Divider from "@mui/material/Divider";

export default function About() {
  console.log("我是about页面");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="contained" component={Link} noLinkStyle href="/">
        回到首页
      </Button>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        style={{ margin: "0 20px" }}
      />
      <Button variant="contained" component={Link} noLinkStyle href="/unknown">
        这是一个不存在的页面
      </Button>
    </div>
  );
}
