export interface News {
  id: number;
  title: string;
  content: string;
  dateCreated: Date;
  urslNews: UrlsNews[];
}

export interface UrlsNews {
  id: number;
  url: string;
  newsId: number;
}
