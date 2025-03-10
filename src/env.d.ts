/// <reference types="astro/client" />
declare module 'astro:content' {
    interface Render {
      '.md': Promise<{
        Content: import('astro').MarkdownInstance<{}>['Content'];
        headings: import('astro').MarkdownHeading[];
        remarkPluginFrontmatter: Record<string, any>;
      }>;
    }
  }
  
  // Tell TypeScript about your content collections
  declare module 'astro:content' {
    type DataEntryMap = {
      'posts': {
        type: 'content';
        data: {
          title: string;
          image?: string;
          excerpt?: string;
          publishDate?: Date;
        };
      };
      'featured': {
        type: 'content';
        data: {
          title: string;
          image?: string;
          excerpt?: string;
        };
      };
      'projects': {
        type: 'content';
        data: {
          title: string;
          image: string;
          description: string;
          tags: string[];
          featured: boolean;
          order: number;
        };
      };
    }
  }