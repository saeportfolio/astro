import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

// microCMS APIの取得
const client = createClient({
    serviceDomain: import.meta.env.SERVICE_DOMAIN,
    apiKey: import.meta.env.API_KEY,
});

// microCMS 全てのコンテンツの取得
export const getBlogs = async (queries: MicroCMSQueries) => {
    return await client.get({
        endpoint: "blog1",
        queries
    })
}

// microCMS 記事の詳細を取得
export const getBlogDetail = async (
    blogId: string,
    queries? : any
) => {
    return await client.getListDetail({
        endpoint: "blog1",
        contentId: blogId,
        queries,
    })
}

// 日付のフォーマット
export const formatDate = function(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  return `${month} ${day}, ${year}`;
}
