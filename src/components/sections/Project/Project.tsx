import { CardProject } from '@/components/cards/CardProject/CardProject'
import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import { getCollection } from '@/helper/fetch'
import Link from 'next/link'

export async function Project({ block, page, collection }: any) {
  let { tag, title, subtitle, shape, projects } = block || {}
  const cols = ['12', '6', '6', '12']

  projects = await getCollection(
    {
      collection: 'projects',
      limit: 4,
    },
    projects,
  )

  if (collection) {
    ;({ tag, title, subtitle, shape } = page?.options?.project || {})
    projects = collection
  }
  if (!(tag || title || subtitle || shape || projects)) return null

  return (
    <section
      className="oit-project-area dg-project-style rotate-section p-relative pt-120 pb-120 fix"
      data-bg-color={!collection && '#101216'}
    >
      {shape && (
        <div className="oit-project-shape d-none d-xl-block">
          <img className="rotate-on-scroll" src={shape.url} alt={shape.alt} />
        </div>
      )}
      {(tag || title || subtitle || projects) && (
        <div className="container">
          {tag && (
            <div className="row">
              <div className="col-xl-2">
                <div className="oit-section-subtitle-box mb-50 text-center text-lg-center">
                  <span className="oit-section-subtitle">{tag}</span>
                </div>
              </div>
            </div>
          )}
          {(title || subtitle) && (
            <div className="row">
              <div className="offset-xl-1 col-xl-10">
                <div className="oit-section-title-box pl-70 mb-120 text-center text-lg-center">
                  <h3 className="oit-section-title oit-title-revel">
                    {title}
                    {subtitle && (
                      <>
                        <br />
                        <span className="pl-265">{subtitle}</span>
                      </>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          )}
          <div className="row">
            {projects?.map((item: any, i: number) => (
              <div key={item.id} className={`col-xl-${cols[i % 4]}`}>
                <CardProject {...item} />
              </div>
            ))}
            {!collection && (
              <div className="col-xl-12">
                <div className="oit-project-btn text-center">
                  <Link
                    className="oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between"
                    href="/projects"
                  >
                    <span>
                      <span className="text-1">View all projects</span>
                      <span className="text-2">View all projects</span>
                    </span>
                    <PartBtnArrow />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
