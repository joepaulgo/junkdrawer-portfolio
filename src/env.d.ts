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
    'projects': {
      type: 'content';
      data: {
        title: string;
        date?: Date;
        image?: string;
        excerpt?: string;
        description?: string;
        tags?: string[];
        link?: string;
      };
    };
  }
}
