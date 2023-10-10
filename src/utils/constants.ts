import { Photo } from "./interfaces&types/UnsplashPhotoTypes";
export const NEW_PHOTOS_LINK = "https://api.unsplash.com/photos?page=2&per_page=20&client_id="
export const QUERY_PHOTOS = "https://api.unsplash.com/search/photos?page=1&query="
export const PHOTOS_BY_ID_LINK = "https://api.unsplash.com/photos/"

export const defaultPhoto: Photo = {
    id: " ",
    slug: "nDV6ahWLvEg",
    urls: {
        raw: "",
        full: "",
        regular: "",
        small: "",
        thumb: ""
    }, user: {
        id: 'a2Hpvq6iQs4',
        updated_at: '2023-10-09T22:45:52Z',
        username: 'supergios',
        name: 'Jonny Gios',
        first_name: 'Jonny',
        last_name: 'Gios',
        twitter_username: 'Supergios',
        portfolio_url: 'http://www.jgios.com',
        bio:
            'Always looking for the next adventure to capture the next shot. Seize the day. Sony A7 IV . There are more images behind my Unsplash, for commercial projects please contact me.  John 3:16',
        location: 'Lake District',
        links: {
            self: 'https://api.unsplash.com/users/supergios',
            html: 'https://unsplash.com/@supergios',
            photos: 'https://api.unsplash.com/users/supergios/photos',
            likes: 'https://api.unsplash.com/users/supergios/likes',
            portfolio: 'https://api.unsplash.com/users/supergios/portfolio',
            following: 'https://api.unsplash.com/users/supergios/following',
            followers: 'https://api.unsplash.com/users/supergios/followers'
        },
        profile_image: {
            small:
                'https://images.unsplash.com/profile-1600184424687-de96bd61fa67image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
            medium:
                'https://images.unsplash.com/profile-1600184424687-de96bd61fa67image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
            large:
                'https://images.unsplash.com/profile-1600184424687-de96bd61fa67image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
        },


    }
};
