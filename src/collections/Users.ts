import { APIError, type CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    admin: ({ req: { user } }) => user?.role === 'admin',
  },
  auth: true,
  fields: [
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      saveToJWT: true,
      admin: {
        condition: (_data, _siblingData, { user }) => user?.role === 'admin',
      },
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      hooks: {
        beforeChange: [
          async ({ value, req, operation, originalDoc }) => {
            if (operation === 'update' && originalDoc?.role === 'admin') {
              return 'admin'
            }

            if (operation === 'create') {
              const users = await req.payload.find({
                collection: 'users',
                limit: 1,
                overrideAccess: true,
              })

              if (users.totalDocs === 0) {
                return 'admin'
              }

              if (value !== 'admin') {
                return value || 'user'
              }
            }

            if (value === 'admin') {
              const admins = await req.payload.find({
                collection: 'users',
                where: {
                  role: {
                    equals: 'admin',
                  },
                },
                limit: 1,
                overrideAccess: true,
              })

              if (admins.totalDocs > 0) {
                throw new APIError('Only one admin account is allowed.', 400, undefined, true)
              }
            }

            return value
          },
        ],
      },
      access: {
        create: ({ req: { user } }) => user?.role === 'admin',
        update: ({ req: { user }, doc }) => user?.role === 'admin' && doc?.role !== 'admin',
      },
    },
  ],
}
