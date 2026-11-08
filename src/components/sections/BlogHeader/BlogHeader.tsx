import { PartShine } from '@/components/parts/PartShine/PartShine'
import { PartWriter } from '@/components/parts/PartWriter/PartWriter'
import { renderReadingTime } from '@/helper/renderReadingTime'
import Image from '@/utils/Image'

export async function BlogHeader({ page }: any) {
  const { title, thumbnail, readingTime, createdAt: date, postsCategories, options } = page || {}
  const reading = renderReadingTime(readingTime)
  const createdAt = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })

  const { writer } = options || {}

  return (
    <div className="blog-details-breadcrumb-area text-center">
      <div className="container">
        <div className="blog-details-breadcrumb-badges mb-30">
          {readingTime && (
            <span className="badge">
              <PartShine />
              {reading.hour > 0 && `${reading.hour} Hr `}
              {reading.min > 0 && `${reading.min} Min `}
              {reading.sec > 0 && `${reading.sec} Sec `}
              Read
            </span>
          )}
          {postsCategories?.length && (
            <span className="badge">
              <PartShine />
              {postsCategories?.map((category: any) => category.title).join(', ')}
            </span>
          )}
          <span className="badge">
            <PartShine />
            {createdAt}
          </span>
        </div>
        <h1 className="blog-details-breadcrumb-title">{title}</h1>
        <PartWriter writer={writer} />
      </div>
      {thumbnail && (
        <div className="blog-details-breadcrumb-img">
          <Image src={thumbnail.url} alt={thumbnail.alt} width={1277} height={532} />
        </div>
      )}
    </div>
  )
}
