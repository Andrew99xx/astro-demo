import type { ISeoTypes } from "./ResponseType";

export type BlogCategoryQueryData = {
  posts: {
    edges: {
      node: BlogPostNode;
    }[];
  };
  categories: {
    edges: {
      node: {
        seo: ISeoTypes;
      };
    }[];
  };
};

export type BlogPostNode = {
  title: string;
  slug: string;
  featuredImage?: {
    node: MediaItem;
  };
  date: string;
  author?: {
    node: AuthorNode;
  };
  categories: {
    edges: {
      node: CategoryNode;
    }[];
  };
  comments: {
    edges: {
      node: CommentNode;
    }[];
  };
};

export type MediaItem = {
  altText: string;
  mediaItemUrl: string;
};

export type AuthorNode = {
  firstName?: string;
  lastName?: string;
  username?: string;
};

export type CategoryNode = {
  name: string;
  slug: string;
};

export type BlogTagsQueryData = {
  posts: {
    edges: {
      node: BlogTagPostNode;
    }[];
  };
  tags: {
    edges: {
      node: {
        seo: ISeoTypes;
      };
    }[];
  };
};

export type BlogTagPostNode = {
  title: string;
  slug: string;
  date: string;
  author?: {
    node: AuthorNode;
  };
  featuredImage?: {
    node: MediaItem;
  };
  categories: {
    edges: {
      node: CategoryNode;
    }[];
  };
  comments: {
    edges: {
      node: CommentNode;
    }[];
  };
};

export type CommentNode = {
  isComment: boolean;
};
