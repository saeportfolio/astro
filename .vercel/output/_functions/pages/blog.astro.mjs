import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_ByY88Q7J.mjs';
import 'kleur/colors';
import { $ as $$Articles } from '../chunks/articles_rdPqxhiZ.mjs';
import { g as getBlogs, c as $$Layout, $ as $$Header, b as $$Footer } from '../chunks/microcms_CwxBsrTU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await getBlogs({
    fields: ["id", "title", "category", "summary"]
  });
  return renderTemplate`<!-- 記事一覧 -->${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })}  ${maybeRenderHead()}<div class="articleWrapper" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "Articles", $$Articles, { "isVisible": false, "isArchive": true, "data-astro-cid-5tznm7mj": true })} </div>  ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} ` })} `;
}, "/Users/muratasae/Desktop/portfolio/astro/src/pages/blog/index.astro", void 0);

const $$file = "/Users/muratasae/Desktop/portfolio/astro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
