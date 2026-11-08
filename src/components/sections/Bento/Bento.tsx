import { CardBuild } from '@/components/cards/CardBuild/CardBuild'
import { CardClients } from '@/components/cards/CardClients/CardClients'
import { CardPlans } from '@/components/cards/CardPlans/CardPlans'
import { CardReady } from '@/components/cards/CardReady/CardReady'
import { CardSolutions } from '@/components/cards/CardSolutions/CardSolutions'
import { CardSupport } from '@/components/cards/CardSupport/CardSupport'

export function Bento({ block }: any) {
  const { id, tag, title, subtitle, plans, clients, support, ready, build, solutions } = block

  if (!(tag || title || subtitle || plans || clients || support || ready || build || solutions))
    return null

  return (
    <section key={id} className="oit-bin-to-card-area pt-150 pb-120">
      <div className="container">
        {tag && (
          <div className="row">
            <div className="col-xl-2">
              <div className="oit-section-subtitle-box text-center text-lg-start">
                <span className="oit-section-subtitle">{tag}</span>
              </div>
            </div>
          </div>
        )}
        {(title || subtitle) && (
          <div className="row">
            <div className="offset-xl-1 col-xl-11">
              <div className="oit-section-title-box pl-70 mb-75 text-center text-lg-start">
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
        <div className="row grid gx-30">
          {plans && (
            <div className="col-xxl-4 col-lg-6 grid-item">
              <CardPlans {...plans} />
            </div>
          )}
          {clients && (
            <div className="col-xxl-4 col-lg-6 grid-item">
              <CardClients {...clients} />
            </div>
          )}
          {solutions && (
            <div className="col-xxl-4 col-xl-6 grid-item d-none d-xxl-block">
              <CardSolutions {...solutions} />
            </div>
          )}
          {(support || ready || build) && (
            <div className="col-xxl-8 grid-item">
              <div className="row">
                {support && (
                  <div className="col-xl-4 col-lg-6 mb-30">
                    <CardSupport {...support} />
                  </div>
                )}
                {ready && (
                  <div className="col-xl-4 col-lg-6 mb-30">
                    <CardReady {...ready} />
                  </div>
                )}
                {build && (
                  <div className="col-xl-4 col-lg-6 mb-30">
                    <CardBuild {...build} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
