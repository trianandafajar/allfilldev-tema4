import { businessInfo, siteConfig, sitePages } from "@/config/site";
import { blogPosts } from "@/data/blog";
import { chefs } from "@/data/chefs";
import { faqs } from "@/data/faq";
import { menuCategories } from "@/data/menu";
import { dishes } from "@/data/portfolio";
import { formatHours, formatRupiah } from "@/lib/format";
import { absoluteUrl } from "@/lib/seo";

const { address, phones, openingHours } = businessInfo;

/** Fakta inti bisnis dalam satu blok. Dipakai di kedua berkas llms supaya mesin jawaban mengutip data yang sama. */
function factsBlock() {
  return [
    `- Nama: ${siteConfig.name}`,
    `- Jenis: restoran, masakan ${businessInfo.cuisine.join(" / ")}`,
    `- Alamat: ${address.street}, ${address.city} ${address.postalCode}, ${address.region}, Indonesia`,
    `- Peta: ${businessInfo.mapUrl}`,
    `- Telepon: ${phones.map((phone) => phone.label).join(", ")}`,
    `- Email: ${businessInfo.email}`,
    `- Kisaran harga: ${businessInfo.priceRange}`,
    ...openingHours.map((slot) => `- Jam buka, ${formatHours(slot)}`),
    `- Reservasi: ${absoluteUrl("/reservasi")}`,
    `- Bahasa situs: Indonesia`,
  ].join("\n");
}

function header() {
  return `# ${siteConfig.name}\n\n> ${siteConfig.description}`;
}

/** `/llms.txt`: ringkasan bisnis dan peta halaman, dikelompokkan menurut jenisnya. */
export function buildLlmsTxt() {
  const link = (page: { path: string; title: string; description: string }) =>
    `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`;

  const groups = [
    { title: "Halaman utama", match: (path: string) => !/^\/(koki|portofolio|blog)\/./.test(path) },
    { title: "Koki", match: (path: string) => path.startsWith("/koki/") },
    { title: "Hidangan", match: (path: string) => path.startsWith("/portofolio/") },
    { title: "Artikel blog", match: (path: string) => path.startsWith("/blog/") },
  ];

  const sections = groups.map(({ title, match }) => {
    const pages = sitePages.filter((page) => match(page.path));
    return `## ${title}\n\n${pages.map(link).join("\n")}`;
  });

  return [
    header(),
    `## Fakta singkat\n\n${factsBlock()}`,
    ...sections,
    `## Opsional\n\n- [Teks lengkap situs untuk AI](${absoluteUrl("/llms-full.txt")}): menu dengan harga, profil koki, tanya jawab, dan ringkasan blog dalam satu berkas`,
  ].join("\n\n") + "\n";
}

/** `/llms-full.txt`: seluruh konten penting dalam teks polos, dibuat dari data yang sama dengan halaman. */
export function buildLlmsFullTxt() {
  const menu = menuCategories.map((category) => {
    const items = category.items
      .map((item) => `- ${item.title}, ${formatRupiah(item.price)}: ${item.description}. ${item.note}.`)
      .join("\n");
    return `### ${category.title}\n\n${items}`;
  });

  const team = chefs.map(
    (chef) => `### ${chef.name}, ${chef.role}\n\n${chef.bio}\n\nKeahlian: ${chef.expertise}\n\nProfil: ${absoluteUrl(`/koki/${chef.slug}`)}`
  );

  const signature = dishes.map(
    (dish) =>
      `### ${dish.title}\n\n${dish.description}\n\nBahan: ${dish.ingredients}\n\nDetail: ${absoluteUrl(dish.href)}`
  );

  const questions = faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`);

  const articles = blogPosts.map(
    (post) => `### ${post.title}\n\n${post.date}, ${post.category}. ${post.excerpt}\n\nBaca: ${absoluteUrl(post.href)}`
  );

  return [
    header(),
    `## Fakta singkat\n\n${factsBlock()}`,
    `## Menu\n\n${menu.join("\n\n")}`,
    `## Hidangan andalan\n\n${signature.join("\n\n")}`,
    `## Koki\n\n${team.join("\n\n")}`,
    `## Tanya jawab\n\n${questions.join("\n\n")}`,
    `## Blog\n\n${articles.join("\n\n")}`,
  ].join("\n\n") + "\n";
}
