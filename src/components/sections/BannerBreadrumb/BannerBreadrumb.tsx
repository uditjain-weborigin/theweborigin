import { PartShine } from '@/components/parts/PartShine/PartShine'
import Link from 'next/link'

export async function BannerBreadrumb({ welcome, page }: any) {
  const { shape, title } = welcome
  const { breadcrumbs } = page

  return (
    <section className="blog-details-breadcrumb-area career-style breadcrumb-style-2 rotate-section p-relative">
      {shape && <img className="shape rotate-on-scroll" src={shape.url} alt={shape.alt} />}

      <div className="container">
        <div className="blog-details-breadcrumb-badges badges-style-2">
          <div style={{ color: '#0D0D0D' }}>
            {breadcrumbs?.map((item: any, i: number) => {
              const key = `breadcrumb-${i}`
              return (
                <span key={key}>
                  {!!i && <PartShine />}
                  <span className="badge">
                    {typeof item === 'string' ? (
                      item
                    ) : item.url ? (
                      <Link href={item.url}>{item.title}</Link>
                    ) : (
                      item.title
                    )}
                  </span>
                </span>
              )
            })}
          </div>
        </div>

        {title && <h1 className="blog-details-breadcrumb-big-title title-mb">{title}</h1>}
      </div>
    </section>
  )
}
