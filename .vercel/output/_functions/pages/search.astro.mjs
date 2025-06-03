import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_ByY88Q7J.mjs';
import 'kleur/colors';
import { g as getBlogs, c as $$Layout, $ as $$Header, b as $$Footer } from '../chunks/microcms_CwxBsrTU.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const url = new URL(Astro2.request.url);
  console.log(url);
  const keyword = url.searchParams.get("keyword") || "";
  let response = { contents: [] };
  if (keyword) {
    response = await getBlogs({
      q: keyword,
      limit: 20
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ipsxrsrh": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ipsxrsrh": true })} ${maybeRenderHead()}<section data-astro-cid-ipsxrsrh> <div class="inner" data-astro-cid-ipsxrsrh> <h1 data-astro-cid-ipsxrsrh>検索結果：「${keyword}」</h1> ${response.contents.length === 0 ? renderTemplate`<p data-astro-cid-ipsxrsrh>該当する記事が見つかりませんでした。</p>` : renderTemplate`<ul data-astro-cid-ipsxrsrh> ${response.contents.map((item) => renderTemplate`<li data-astro-cid-ipsxrsrh> <a${addAttribute(`/blog/${item.id}`, "href")} data-astro-cid-ipsxrsrh>${item.title}</a> <p data-astro-cid-ipsxrsrh>${item.summary}</p> </li>`)} </ul>`} </div> </section> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ipsxrsrh": true })} ` })} `;
}, "/Users/muratasae/Desktop/portfolio/astro/src/pages/search.astro", void 0);

const $$file = "/Users/muratasae/Desktop/portfolio/astro/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
