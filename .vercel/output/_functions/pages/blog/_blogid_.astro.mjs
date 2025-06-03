import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_ByY88Q7J.mjs';
import 'kleur/colors';
import { a as getBlogDetail, g as getBlogs, f as formatDate, $ as $$Header, b as $$Footer, c as $$Layout } from '../../chunks/microcms_CwxBsrTU.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await getBlogs({ fields: ["id"] });
  return response.contents.map((blog) => ({
    params: {
      blogId: blog.id
    }
  }));
}
const $$blogId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blogId;
  const { blogId } = Astro2.params;
  const blog = await getBlogDetail(blogId);
  return renderTemplate`<!-- 記事ページ -->${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ttmr2ywj": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ttmr2ywj": true })} ${maybeRenderHead()}<main data-astro-cid-ttmr2ywj> <article data-astro-cid-ttmr2ywj> <p class="published" data-astro-cid-ttmr2ywj>Published ${formatDate(blog.publishedAt)}</p> <h1 data-astro-cid-ttmr2ywj>${blog.title}</h1> <p class="subtitle" data-astro-cid-ttmr2ywj>サブタイトル</p> <ul class="list" data-astro-cid-ttmr2ywj> ${blog.tags.map((tag) => renderTemplate`<li class="item" data-astro-cid-ttmr2ywj>${tag.name}</li>`)} </ul> <div class="thumbnail" data-astro-cid-ttmr2ywj>thumbnail</div> <div class="content" data-astro-cid-ttmr2ywj> <div class="content__inner" data-astro-cid-ttmr2ywj> <p data-astro-cid-ttmr2ywj>${unescapeHTML(blog.content)}</p> </div> <ul class="list2" data-astro-cid-ttmr2ywj> <li class="item2" data-astro-cid-ttmr2ywj></li> <li class="item2" data-astro-cid-ttmr2ywj></li> <li class="item2" data-astro-cid-ttmr2ywj></li> <li class="item2" data-astro-cid-ttmr2ywj></li> </ul> </div> <div class="buttonBack" data-astro-cid-ttmr2ywj> <a href="/" class="button" data-astro-cid-ttmr2ywj>← Back</a> </div> </article> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ttmr2ywj": true })} ` })} `;
}, "/Users/muratasae/Desktop/portfolio/astro/src/pages/blog/[blogId].astro", void 0);

const $$file = "/Users/muratasae/Desktop/portfolio/astro/src/pages/blog/[blogId].astro";
const $$url = "/blog/[blogId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$blogId,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
