import { PartSidebar } from '@/components/parts/PartSidebar/PartSidebar'
import { PartShare } from '@/components/parts/PartShare/PartShare'
import { RichText } from '@payloadcms/richtext-lexical/react'
import './BlogDetail.scss'

export function BlogDetail({ page }: any) {
  const { content } = page || {}
  const postTags = Array.isArray(page?.postsTags) ? page.postsTags : []
  return (
    <div className="postbox-area pt-150 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="postbox-left">
              <div className="postbox-dsc mb-50">
                <RichText data={content} />
              </div>
              <div className="postbox-tag-box mb-65">
                <div className="row align-items-center">
                  <div className="col-xl-7">
                    <div className="postbox-tag d-flex align-items-center">
                      <h3 className="postbox-tag-title">Tags:</h3>
                      <div className="postbox-tag-content">
                        {postTags.map((tag: any, index: number) =>
                          tag?.slug ? (
                            <a
                              key={tag.id ?? tag.slug}
                              className={index === 0 ? 'active' : undefined}
                              href={`/posts/?postsTags=${encodeURIComponent(tag.slug)}`}
                            >
                              {tag.title ?? tag.name ?? tag.slug}
                            </a>
                          ) : null,
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="postbox-share d-flex align-items-center justify-content-xl-end">
                      <h3 className="postbox-tag-title">Share:</h3>
                      <PartShare />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <PartSidebar page={page} />
          </div>
        </div>
      </div>
    </div>
  )
}
