import { readFileSync } from "fs";
const data = JSON.parse(readFileSync("./extracted/wp-data.json", "utf-8"));

console.log("=== PAGES ===");
data.pages.forEach((p) =>
  console.log(`${p.slug} | title: "${p.title}" | content: ${p.content_html.length} chars`)
);

console.log("\n=== MEDIA FILES ===");
data.media.forEach((m) => {
  const fname = m.source_url.split("/").pop();
  console.log(`${m.id} | ${fname} | alt: "${m.alt_text}" | ${m.mime_type}`);
});

console.log("\n=== PHOTO GALLERY PAGE IMAGES ===");
const gallery = data.pages.find((p) => p.slug === "photo-gallery");
if (gallery) {
  const imgMatches = gallery.content_html.match(/src="[^"]+"/g) || [];
  console.log(`Found ${imgMatches.length} images in gallery:`);
  imgMatches.forEach((s) => {
    const url = s.replace('src="', "").replace('"', "");
    const fname = url.split("/").pop();
    console.log(`  - ${fname}`);
  });
}

console.log("\n=== CONTACT PAGE ===");
const contact = data.pages.find((p) => p.slug === "contact-us");
if (contact) {
  console.log(`Content length: ${contact.content_html.length}`);
  console.log("Has form:", contact.content_html.includes("wpforms"));
}
