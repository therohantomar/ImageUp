export interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string | null;
    portfolio_url: string;
    bio: string | null;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  }
  
  interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }
  
  interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
  }
  
  interface TopicSubmissions {
    experimental?: {
      status?: "approved";
      approved_on?: "2020-04-06T14:20:23Z";
    };
  }
  
  export interface Photo {
    id: string;
    slug?: "nDV6ahWLvEg";
    created_at?: "2019-08-19T23:32:54Z";
    updated_at?: "2023-10-09T22:07:53Z";
    promoted_at?: "2019-08-21T07:37:00Z";
    width?: number;
    height?: number;
    color?: "#402640";
    blur_hash?: "L75hGcof0JRkWAofs;NGNFR*t7xa";
    description?: "Purple Hand Gesture";
    alt_description?: "person's right hand";
    breadcrumbs?: unknown[];
    urls?: Urls;
    links?: Links[];
    likes?: number;
    liked_by_user?: boolean | null | undefined,
    current_user_collections?: unknown[];
    sponsorship?: null | undefined,
    topic_submissions?: TopicSubmissions[];
    user?:User
  }
  