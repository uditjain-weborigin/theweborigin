import type { IconKey } from '@/components/icons'

export const shareU = [
  {
    name: 'Twitter/X',
    iconKey: 'x',
    getHref: (pageUrl: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`,
  },
  {
    name: 'LinkedIn',
    iconKey: 'linkedin',
    getHref: (pageUrl: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
  },
  {
    name: 'Facebook',
    iconKey: 'facebook',
    getHref: (pageUrl: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
  },
  {
    name: 'Email',
    iconKey: 'email',
    getHref: (pageUrl: string) => `mailto:?body=${encodeURIComponent(pageUrl)}`,
  },
] satisfies {
  name: string
  iconKey: IconKey
  getHref: (pageUrl: string) => string
}[]

export const copyShareLink = () => navigator.clipboard.writeText(window.location.href)
