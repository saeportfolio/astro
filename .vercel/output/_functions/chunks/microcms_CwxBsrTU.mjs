import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, b as addAttribute, e as renderHead, f as renderSlot } from './astro/server_ByY88Q7J.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */
import { createClient } from 'microcms-js-sdk';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- フッター -->${maybeRenderHead()}<footer class="footer" id="footer" data-astro-cid-k2f5zb5c> <div class="inner" data-astro-cid-k2f5zb5c> <div class="content" data-astro-cid-k2f5zb5c> <div class="profile" data-astro-cid-k2f5zb5c> <span class="line" data-astro-cid-k2f5zb5c></span> <div class="profileImage" data-astro-cid-k2f5zb5c><img src="/images/footer_image01.png" width="600" height="600" data-astro-cid-k2f5zb5c></div> <span class="line" data-astro-cid-k2f5zb5c></span> </div> <p class="name" data-astro-cid-k2f5zb5c>SAE ©2025</p> </div> <div class="footer__button" data-astro-cid-k2f5zb5c> <button class="button button--dark" data-astro-cid-k2f5zb5c>Get in touch</button> </div> </div> </footer> `;
}, "/Users/muratasae/Desktop/portfolio/astro/src/components/footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- \u30D8\u30C3\u30C0\u30FC -->", '<header data-astro-cid-hpnw4vwy> <div class="inner" data-astro-cid-hpnw4vwy> <a href="/" class="logo" data-astro-cid-hpnw4vwy> <img src="/images/logo.png" alt="portfolio" width="500" height="92" data-astro-cid-hpnw4vwy> </a> <!-- \u30CF\u30F3\u30D0\u30FC\u30AC\u30FC --> <div class="hamburger" id="hamburger" data-astro-cid-hpnw4vwy> <span data-astro-cid-hpnw4vwy></span> <span data-astro-cid-hpnw4vwy></span> <span data-astro-cid-hpnw4vwy></span> </div> <ul class="list" id="navMenu" data-astro-cid-hpnw4vwy> <li data-astro-cid-hpnw4vwy><a href="#footer" class="link" data-astro-cid-hpnw4vwy>About</a></li> <li data-astro-cid-hpnw4vwy><a href="#" class="link link--button" data-astro-cid-hpnw4vwy>Contact me</a></li> </ul> </div> <!-- \u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30B5\u30A4\u30C9JS --> <script type="module">\n    document.addEventListener("DOMContentLoaded", () => {\n      const hamburger = document.getElementById("hamburger");\n      const navMenu = document.getElementById("navMenu");\n\n      hamburger?.addEventListener("click", () => {\n        hamburger.classList.toggle("active");\n        navMenu.classList.toggle("active");\n      });\n    });\n  <\/script> </header> '])), maybeRenderHead());
}, "/Users/muratasae/Desktop/portfolio/astro/src/components/header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/muratasae/Desktop/portfolio/astro/src/layouts/Layout.astro", void 0);

const client = createClient({
  serviceDomain: "saeportfolio",
  apiKey: "yr2rsUjWjZIyfxWExg2EVWHDUFVeqSUovRtk"
});
const getBlogs = async (queries) => {
  return await client.get({
    endpoint: "blog1",
    queries
  });
};
const getBlogDetail = async (blogId, queries) => {
  return await client.getListDetail({
    endpoint: "blog1",
    contentId: blogId,
    queries
  });
};
const formatDate = function(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  return `${month} ${day}, ${year}`;
};

export { $$Header as $, getBlogDetail as a, $$Footer as b, $$Layout as c, formatDate as f, getBlogs as g };
