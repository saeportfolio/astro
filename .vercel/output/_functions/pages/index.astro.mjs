import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, d as renderComponent } from '../chunks/astro/server_ByY88Q7J.mjs';
import 'kleur/colors';
import { $ as $$Articles } from '../chunks/articles_rdPqxhiZ.mjs';
import { c as $$Layout, $ as $$Header, b as $$Footer } from '../chunks/microcms_CwxBsrTU.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$SearchBox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="searchBox" data-astro-cid-5byzgs4e> <form action="/search/" method="get" data-astro-cid-5byzgs4e> <input type="text" name="keyword" id="searchInput" placeholder="Search article..." data-astro-cid-5byzgs4e> <button type="submit" aria-label="Search" id="searchBtn" data-astro-cid-5byzgs4e>🔍</button> </form> </div> `;
}, "/Users/muratasae/Desktop/portfolio/astro/src/components/searchBox.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })}  ${maybeRenderHead()}<div class="mainVisual" data-astro-cid-j7pv25f6> <div class="mainVisual__wrapper" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Blog portfolio using Astro</h1> <p class="mainVisual__lead" data-astro-cid-j7pv25f6>This is a blog site using Astro. The server is Vercel, and the CMS is MicroCMS to make it headless. <br data-astro-cid-j7pv25f6>The style is mainly SCSS in components with BEM notation.</p> <div class="mainVisual__search" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SearchBox", $$SearchBox, { "data-astro-cid-j7pv25f6": true })} </div> </div> </div>  ${renderComponent($$result2, "Articles", $$Articles, { "isVisible": true, "isArchive": false, "data-astro-cid-j7pv25f6": true })}  ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/muratasae/Desktop/portfolio/astro/src/pages/index.astro", void 0);

const $$file = "/Users/muratasae/Desktop/portfolio/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
