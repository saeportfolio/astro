import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, b as addAttribute } from './astro/server_ByY88Q7J.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getBlogs } from './microcms_CwxBsrTU.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Articles;
  const response = await getBlogs({
    fields: ["id", "title", "category", "summary"]
  });
  const { isVisible = true } = Astro2.props;
  const { isArchive = true } = Astro2.props;
  return renderTemplate`<!-- 記事一覧 -->${maybeRenderHead()}<section data-astro-cid-bpba7c7n> <div class="inner" data-astro-cid-bpba7c7n> ${isArchive && renderTemplate`<h1 data-astro-cid-bpba7c7n>記事一覧</h1>`} <ul class="list" data-astro-cid-bpba7c7n> ${response.contents.map((item) => renderTemplate`<li class="item" data-astro-cid-bpba7c7n> <a${addAttribute(`/blog/${item.id}`, "href")} data-astro-cid-bpba7c7n> <div class="thumbnail" data-astro-cid-bpba7c7n>thumbnail</div> <p class="category" data-astro-cid-bpba7c7n>${item.category.name}</p> <p class="title" data-astro-cid-bpba7c7n>${item.title}</p> <p class="summary" data-astro-cid-bpba7c7n>${item.summary}</p> </a> </li>`)} </ul> ${isVisible && renderTemplate`<div class="bottom" data-astro-cid-bpba7c7n> <a href="/blog" class="button" data-astro-cid-bpba7c7n>Load More Articles</a> </div>`} </div> </section> `;
}, "/Users/muratasae/Desktop/portfolio/astro/src/components/articles.astro", void 0);

export { $$Articles as $ };
