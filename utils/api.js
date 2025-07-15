// utils/api.js
import axios from 'axios';

const API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';

function buildImageUrl(image) {
  if (!image) return '/default.jpg';
  // Öncelikle large formatı kullan, yoksa direkt url
  const large = image.formats?.large?.url;
  const original = image.url;
  const path = large || original;
  return path.startsWith('http') ? path : `${API_URL}${path}`;
}

export async function getAllPosts() {
  const res = await axios.get(`${API_URL}/api/blog-posts?populate=*`);
  return res.data.data.map((post) => {
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      preview: post.preview,                 // artık post.preview var
      content: post.content,
      date: post.customPublishedDate || post.publishedAt || post.createdAt,
      imageUrl: buildImageUrl(post.image),   // doğrudan post.image
    };
  });
}

export async function getPostBySlug(slug) {
  const res = await axios.get(
    `${API_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
  );
  const post = res.data.data[0];
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    preview: post.preview,
    content: post.content,
    date: post.customPublishedDate || post.publishedAt || post.createdAt,
    imageUrl: buildImageUrl(post.image),
  };
}
