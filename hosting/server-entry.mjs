function assetRequest(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
}

const worker = {
  async fetch(request, environment) {
    if (!environment?.ASSETS) {
      return new Response("Static asset binding unavailable.", { status: 500 });
    }

    const url = new URL(request.url);
    let response = await environment.ASSETS.fetch(request);

    if (response.status !== 404) {
      return response;
    }

    if (!url.pathname.split("/").at(-1)?.includes(".")) {
      const htmlPath = `${url.pathname.replace(/\/$/, "") || "/index"}.html`;
      response = await environment.ASSETS.fetch(
        assetRequest(request, htmlPath),
      );
    }

    return response;
  },
};

export default worker;
