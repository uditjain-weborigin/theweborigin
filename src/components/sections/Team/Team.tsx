import { CardTeam } from '@/components/cards/CardTeam/CardTeam'
import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import { getCollection } from '@/helper/fetch'
import { renderLink } from '@/helper/renderLink'

export async function Team({ block, page, collection }: any) {
  let { id, tag, title, subtitle, backgroundImage, teams } = block || {}
  let color = '#000' as any
  let link

  teams = await getCollection(
    {
      collection: 'teams',
      limit: 4,
      where: {
        published: {
          equals: true,
        },
      },
    },
    teams,
  )

  if (collection) {
    teams = collection
    color = undefined
    link = renderLink(page?.options?.link)
  }

  if (!(tag || title || subtitle || backgroundImage || teams || link)) return null

  return (
    <section
      key={id}
      className="dg-team-area p-relative pt-130 pb-150"
      data-bg-color={color}
      data-background={backgroundImage?.url}
    >
      <div className="container">
        {tag && (
          <div className="row">
            <div className="col-xl-2">
              <div className="oit-section-subtitle-box text-center text-lg-center">
                <span className="oit-section-subtitle oit-text-white">{tag}</span>
              </div>
            </div>
          </div>
        )}
        {(title || subtitle) && (
          <div className="row">
            <div className="offset-xl-1 col-xl-10">
              <div className="oit-section-title-box pl-70 mb-75 text-center text-lg-center">
                <h3 className="oit-section-title oit-title-revel oit-text-white">
                  {title}
                  {subtitle && (
                    <>
                      <br />
                      <span className="pl-265">Talented Team</span>
                    </>
                  )}
                </h3>
              </div>
            </div>
          </div>
        )}
        {teams && (
          <div className="row gx-25">
            {teams.map((item: any, i: number) => (
              <div key={item.id} className="col-xxl-3 col-xl-4 col-md-6">
                <CardTeam i={i} {...item} />
              </div>
            ))}
          </div>
        )}

        {link && (
          <div className="row">
            <div className="col-12">
              <div className="dg-team-btn text-center pt-65">
                <link.comp
                  className={`oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between ${link.class}`}
                  href={link.href}
                  rel={link.rel}
                  target={link.target}
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
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
