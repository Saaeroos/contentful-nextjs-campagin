export interface BlogPost {
  sys: {
    id: string;
  };
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  content?: {
    json: any;
  };
}
