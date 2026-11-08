import { Icon } from '@/components/icons'
import Image from '@/utils/Image'
import Link from 'next/link'

export function CardPost(data: any) {
  const { title, slug, thumbnail } = data
  const createdAt = new Date(data.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })

  if (!(title || slug || thumbnail)) return null

  return (
    <div className="oit-blog-item mb-30 fade-anim" data-delay=".3">
      {thumbnail && (
        <div className="oit-blog-thumb">
          <Link href={`/posts/${slug}`}>
            <Image src={thumbnail.url} alt={thumbnail.alt} width={395} height={355} />
          </Link>
        </div>
      )}
      <div className="oit-blog-content">
        <span>
          <Icon size={20} iconKey="calendar" />
          {createdAt}
        </span>
        <h4 className="oit-blog-title">
          <Link className="border-line" href={`/posts/${slug}`}>
            {title}
          </Link>
        </h4>
      </div>
    </div>
  )
}
