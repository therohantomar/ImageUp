export interface Results {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at: null | string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: null | string;
    alt_description: string;
    breadcrumbs: unknown[];
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
      small_s3: string;
    };
    links: {
      self: string;
      html: string;
      download: string;
      download_location: string;
    };
    likes: number;
    liked_by_user: boolean;
    current_user_collections: unknown[];
    sponsorship?: {
      impression_urls?: unknown[];
      tagline?: string;
      tagline_url?: string;
      sponsor?: {
        id?: string;
        updated_at?: string;
        username?: string;
        name?: string;
        first_name?: string;
        last_name?: null | string;
        twitter_username?: string;
        portfolio_url?: null | string;
        bio?: null | string;
        location?: null | string;
        links?: {
          self?: string,
          html?: string,
          photos?: string,
          likes?: string,
          portfolio?: string,
          following?: string,
          followers?: string
        };
        profile_image?: {
          small?: string,
          medium?: string,
          large?:string
        };
        instagram_username?: null |string,
        total_collections?: number,
        total_likes?: number,
        total_photos?: number,
        accepted_tos?: boolean,
        for_hire?: boolean,
        social? : {
          instagram_username? : null |string,
          portfolio_url? : null |string,
          twitter_username? : null |string,
          paypal_email? : null |string
        }
      }
    }
  }

  
 export type UnsplashSearchTypes = {
    results: Results[];
  };


  