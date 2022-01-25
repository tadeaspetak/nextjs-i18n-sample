import { GetServerSidePropsContext } from "next";

export const getBaseUrl = (ctx?: GetServerSidePropsContext) => {
  if (!ctx) return "";

  const { headers } = ctx.req;
  const protocol = headers.referer?.split("://")[0];
  const result = `${protocol ? `${protocol}://` : ""}${headers.host}`;
  console.log({ result });
  return result;
};
