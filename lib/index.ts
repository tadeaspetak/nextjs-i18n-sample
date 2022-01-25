import { GetServerSidePropsContext } from "next";

export const getBaseUrl = (ctx?: GetServerSidePropsContext) => {
  if (!ctx) return "";

  const { headers } = ctx.req;
  const inferred = headers.referer?.split("://")[0];
  const host = headers.host;

  const protocol = inferred ? `${inferred}://` : `${host ? "http://" : ""}`;
  const result = `${protocol}${host}`;
  console.log({ result });
  return result;
};
