export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Host-level 301 permanent redirect from DTQL.org to TugQL.org (preserving path & query)
    if (url.hostname === "dtql.org" || url.hostname === "www.dtql.org") {
      url.hostname = "tugql.org";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    // Canonicalize www.tugql.org -> tugql.org
    if (url.hostname === "www.tugql.org") {
      url.hostname = "tugql.org";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    // Serve static assets for tugql.org
    return env.ASSETS.fetch(request);
  },
};
