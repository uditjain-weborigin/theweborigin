import { CardDetails } from '@/components/cards/CardDetails/CardDetails'
import { CardFeedback } from '@/components/cards/CardFeedback/CardFeedback'
import { CardThumbnails } from '@/components/cards/CardThumbnails/CardThumbnails'
import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import __ from '@/helper/Null'
import { renderLink } from '@/helper/renderLink'
import Image from '@/utils/Image'
import { RichText } from '@payloadcms/richtext-lexical/react'

export async function ProjectDetail({ page }: any) {
  const { thumbnail, content, projectsTags, options } = page || {}
  const { tag, title, client, year, location, link: _link, blocks, customer } = options || {}
  const tags = __(projectsTags)
  const link = renderLink(_link)

  return (
    <div className="project-details-area style-2 mt-65 pt-145 pb-70" data-bg-color="#101216">
      {(tag || title || content || client || year || tags || location || link) && (
        <div className="container">
          <div className="project-details-content-wrap pb-120">
            <div className="row">
              {(tag || title) && (
                <div className="col-lg-5">
                  <div className="project-details-title-box">
                    {tag && <span className="project-details-subtitle">{tag}</span>}
                    {title && <h2 className="postbox-title">{title}</h2>}
                  </div>
                </div>
              )}
              {(content || client || year || tags || location || link) && (
                <div className="col-lg-7">
                  <div className="project-details-author-info">
                    {content && (
                      <div className="postbox-dsc mb-50">
                        <RichText data={content} />
                      </div>
                    )}
                    {(client || year || tags || location) && (
                      <div className="project-details-author-list mb-60">
                        <ul>
                          {client && (
                            <li>
                              <span>Client:</span>
                              <span>{client}</span>
                            </li>
                          )}
                          {year && (
                            <li>
                              <span>Year:</span>
                              <span>{year}</span>
                            </li>
                          )}
                          {tags && (
                            <li>
                              <span>Category:</span>
                              <span>{tags?.map((i: any) => i.title).join('/')}</span>
                            </li>
                          )}
                          {location && (
                            <li>
                              <span>Location:</span>
                              <span>{location}</span>
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                    {link && (
                      <div className="project-bnt">
                        <link.comp
                          className={`oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between ${link.class}`}
                          href={link.href}
                          target={link.target}
                          rel={link.rel}
                        >
                          {link.label && (
                            <span>
                              <span className="text-1">{link.label}</span>
                              <span className="text-2">{link.label}</span>
                            </span>
                          )}
                          <PartBtnArrow />
                        </link.comp>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {thumbnail && (
        <div className="project-details-thumb mb-80">
          <Image src={thumbnail.url} alt={thumbnail.alt} width={1273} height={530} />
        </div>
      )}
      <div className="container">
        {blocks.map((block: any) => {
          if (block.blockType === 'detail') {
            return <CardDetails key={block.id} {...block} />
          }

          if (block.blockType === 'thumbnails') {
            return <CardThumbnails key={block.id} {...block} />
          }

          return null
        })}

        <CardFeedback {...customer} />
      </div>
    </div>
  )
}
