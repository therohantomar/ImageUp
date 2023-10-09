export interface UnsplashDataType {
    id: string;
    slug: string;
    created_at: string;
    updated_at: string;
    promoted_at: string | null;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string | null;
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
      tagline?: string | null;
      tagline_url?: string | null;
      sponsor?: {
        id?: string | null;
        updated_at?: string | null;
        username?: string | null;
        name?: string | null;
        first_name?: string | null;
        last_name?: string | null | undefined;
        twitter_username?: string | null | undefined;
        portfolio_url?: string | null | undefined;
        bio?: string | null | undefined;
        location?:string | null | undefined;
        links?: {
          self?: string | null | undefined,
          html?: string | null | undefined,
          photos?: string | null | undefined,
          likes?: string | null | undefined,
          portfolio?: string | null | undefined,
          following?: string | null | undefined,
          followers?: string | null | undefined
        }|null|undefined,
        profile_image?: {
          small?:string|null|undefined,
          medium?:string|null|undefined,
          large?:string|null|undefined
        }|null|undefined,
        instagram_username?:string|null|undefined,
        total_collections:number|null|undefined,
        total_likes:number|null|undefined,
        total_photos:number|null|undefined,
        accepted_tos:boolean|null|undefined,
        for_hire:boolean|null|undefined,
        social:{
          instagram_username:string|null|undefined,
          portfolio_url:string|null|undefined,
          twitter_username:string|null|undefined
          paypal_email:string|null|undefined
        }|null|undefined
      }|null|undefined
    }|null
  }
  