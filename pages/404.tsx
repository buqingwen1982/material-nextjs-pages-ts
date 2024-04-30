import Link from "../src/Link";

export default function Custom404({}) {
  return (
    <h1>
      页面不存在，
      <Link href="/login" color="secondary">
        回到登录页面
      </Link>
    </h1>
  );
}
