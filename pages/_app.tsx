import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log(`路由变更到: ${url}`);
      // 在这里可以添加更多的逻辑，比如分析等
      if (url != "/login") {
        const jwt = localStorage.getItem("token");
        console.log(jwt);
        if (jwt == null) {
          router.push("/login");
        }
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // 清理函数，用于在组件卸载时移除事件监听
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container maxWidth="xl">
          <Box
            sx={{
              my: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              这是一个 Material UI v6 + Next.js + TypeScript 的项目案例。
            </Typography>
            <Component {...pageProps} />
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
