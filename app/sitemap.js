

export default async function sitemap() {
    const request = await fetch("https://api.urelaa.com/sitemap", { cache: "no-store" });
    const sitemap = await request.json();

    return sitemap;
}