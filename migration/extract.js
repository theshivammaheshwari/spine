/**
 * WordPress REST API Data Extractor
 * Pulls all pages, posts, media, categories, tags, menus from chiropractorjaipur.com
 */

import { writeFileSync, mkdirSync } from "fs";

const WP_BASE = "https://chiropractorjaipur.com/index.php/wp-json/wp/v2";
const OUT_DIR = "./extracted";

mkdirSync(OUT_DIR, { recursive: true });

async function fetchAll(endpoint, label) {
  let page = 1;
  let allItems = [];

  while (true) {
    const url = `${WP_BASE}/${endpoint}?per_page=100&page=${page}`;
    console.log(`  Fetching ${label} page ${page}...`);

    const res = await fetch(url);
    if (!res.ok) {
      if (page === 1) console.log(`  ⚠ ${label}: ${res.status} ${res.statusText}`);
      break;
    }

    const data = await res.json();
    if (!data.length) break;

    allItems = allItems.concat(data);

    const totalPages = parseInt(res.headers.get("x-wp-totalpages") || "1");
    if (page >= totalPages) break;
    page++;
  }

  console.log(`  ✓ ${label}: ${allItems.length} items`);
  return allItems;
}

async function main() {
  console.log("=== WordPress Data Extraction ===\n");

  // 1. Pages
  console.log("📄 Extracting Pages...");
  const pages = await fetchAll("pages", "Pages");

  // 2. Posts
  console.log("\n📝 Extracting Posts...");
  const posts = await fetchAll("posts", "Posts");

  // 3. Media
  console.log("\n🖼 Extracting Media...");
  const media = await fetchAll("media", "Media");

  // 4. Categories
  console.log("\n📂 Extracting Categories...");
  const categories = await fetchAll("categories", "Categories");

  // 5. Tags
  console.log("\n🏷 Extracting Tags...");
  const tags = await fetchAll("tags", "Tags");

  // 6. Menu Items
  console.log("\n📋 Extracting Menu Items...");
  const menuItems = await fetchAll("menu-items", "Menu Items");

  // 7. Navigation Menus
  console.log("\n🗺 Extracting Nav Menus...");
  const navMenus = await fetchAll("navigation", "Navigation");

  // Transform pages into clean format
  const cleanPages = pages.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title?.rendered || "",
    content_html: p.content?.rendered || "",
    excerpt: p.excerpt?.rendered || "",
    date: p.date,
    modified: p.modified,
    status: p.status,
    template: p.template,
    featured_media: p.featured_media,
    menu_order: p.menu_order,
    parent: p.parent,
    link: p.link,
    meta: p.meta || {},
  }));

  // Transform media into clean format
  const cleanMedia = media.map((m) => ({
    id: m.id,
    slug: m.slug,
    title: m.title?.rendered || "",
    alt_text: m.alt_text || "",
    caption: m.caption?.rendered || "",
    mime_type: m.mime_type,
    media_type: m.media_type,
    source_url: m.source_url,
    width: m.media_details?.width,
    height: m.media_details?.height,
    filesize: m.media_details?.filesize,
    sizes: m.media_details?.sizes
      ? Object.fromEntries(
          Object.entries(m.media_details.sizes).map(([key, val]) => [
            key,
            { url: val.source_url, width: val.width, height: val.height },
          ])
        )
      : {},
  }));

  // Transform posts
  const cleanPosts = posts.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title?.rendered || "",
    content_html: p.content?.rendered || "",
    excerpt: p.excerpt?.rendered || "",
    date: p.date,
    modified: p.modified,
    status: p.status,
    categories: p.categories || [],
    tags: p.tags || [],
    featured_media: p.featured_media,
    link: p.link,
    meta: p.meta || {},
  }));

  // Save all raw + clean data
  const output = {
    extracted_at: new Date().toISOString(),
    source: "https://chiropractorjaipur.com",
    summary: {
      pages: cleanPages.length,
      posts: cleanPosts.length,
      media: cleanMedia.length,
      categories: categories.length,
      tags: tags.length,
    },
    pages: cleanPages,
    posts: cleanPosts,
    media: cleanMedia,
    categories: categories.map((c) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      description: c.description,
      count: c.count,
      parent: c.parent,
    })),
    tags: tags.map((t) => ({
      id: t.id,
      name: t.name,
      slug: t.slug,
      count: t.count,
    })),
    menus: menuItems.map((m) => ({
      id: m.id,
      title: m.title?.rendered || "",
      url: m.url,
      menu_order: m.menu_order,
      parent: m.parent,
      type: m.type,
    })),
  };

  writeFileSync(`${OUT_DIR}/wp-data.json`, JSON.stringify(output, null, 2));
  console.log(`\n✅ All data saved to ${OUT_DIR}/wp-data.json`);

  // Also save media list separately for download script
  const mediaList = cleanMedia.map((m) => ({
    id: m.id,
    source_url: m.source_url,
    filename: m.source_url.split("/").pop(),
    mime_type: m.mime_type,
    alt_text: m.alt_text,
  }));
  writeFileSync(`${OUT_DIR}/media-list.json`, JSON.stringify(mediaList, null, 2));
  console.log(`✅ Media list saved to ${OUT_DIR}/media-list.json (${mediaList.length} files)`);

  // Print summary
  console.log("\n=== Summary ===");
  console.log(`Pages:      ${cleanPages.length}`);
  console.log(`Posts:      ${cleanPosts.length}`);
  console.log(`Media:      ${cleanMedia.length}`);
  console.log(`Categories: ${categories.length}`);
  console.log(`Tags:       ${tags.length}`);
  console.log(`Menu Items: ${menuItems.length}`);

  // Print page slugs
  if (cleanPages.length) {
    console.log("\n📄 Pages found:");
    cleanPages.forEach((p) => console.log(`  - /${p.slug}/ → "${p.title}"`));
  }

  // Print media URLs
  if (cleanMedia.length) {
    console.log(`\n🖼 First 10 media files:`);
    cleanMedia.slice(0, 10).forEach((m) =>
      console.log(`  - ${m.source_url.split("/").pop()} (${m.mime_type})`)
    );
  }
}

main().catch(console.error);
