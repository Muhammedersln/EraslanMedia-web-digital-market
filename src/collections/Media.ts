import { Access, CollectionConfig } from "payload/types";
import { User } from "../payload.types";

const isAdminOrHasAccesToImages = (): Access => async ({ req }) => {
    const user = req.user as User || undefined

    if (!user) {
        return false;
    }
    if (user.role === 'admin') {
        return true;
    }

    return {
        user: {
            equals: req.user.id
        }
    }
}

export const Media: CollectionConfig = {
    slug: 'media',
    hooks: {
        beforeChange: [({ req, data }) => {
            return { ...data, user: req.user.id }
        }],
    },
    access: {
        read: async ({ req }) => {
            const referrer = req.headers.referer;

            if (!req.user || !referrer?.includes('sell')) {
                return true;
            }

            return await isAdminOrHasAccesToImages()({req})
        },
        delete: isAdminOrHasAccesToImages(),
        update: isAdminOrHasAccesToImages(),
    },
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
    },
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: "thumbnail",
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: "card",
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: "tablet",
                width: 1024,
                height: undefined,
                position: 'centre',
            }
        ],
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            hasMany: false,
            admin: {
                condition: () => false,
            }
        }
    ],
}