import { PartShine } from '@/components/parts/PartShine/PartShine'
import Image from '@/utils/Image'
import { renderReadingTime } from '@/helper/renderReadingTime'
import __ from '@/helper/Null'

export function CardBlog({ data }: any) {
  const { title, slug, readingTime, thumbnail, postsCategories, createdAt: date } = data
  const reading = renderReadingTime(readingTime)
  const createdAt = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <div className="postbox-content-wrap mb-40" data-bg-color="#0D0D0D">
      {thumbnail && (
        <div className="postbox-thumb mb-40">
          <Image src={thumbnail.url} alt={thumbnail.alt} width={840} height={366} />
        </div>
      )}
      <div className="postbox-content">
        <div className="blog-details-breadcrumb-badges mb-25">
          {readingTime && (
            <span className="badge ml-0">
              <PartShine />
              {reading.hour > 0 && `${reading.hour} Hr `}
              {reading.min > 0 && `${reading.min} Min `}
              {reading.sec > 0 && `${reading.sec} Sec `}
              Read
            </span>
          )}
          {__(postsCategories) && (
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
        <h2 className="postbox-title">
          <a className="border-line" href={`/posts/${slug}`}>
            {title}
          </a>
        </h2>
      </div>
    </div>
  )
}
