import { PartBtnArrow } from '@/components/parts/PartBtnArrow/PartBtnArrow'
import { getTheme } from '@/helper/fetch'
import Link from 'next/link'
import ErrorImage from '@/assets/img/shape/error.png'

export async function Error() {
  const errorTitle = await getTheme('errorTitle')

  return (
    <div className="error-area error-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-12 col-xl-7 col-lg-7 col-md-10 col-12 col-sm-11">
            <div className="error-wrap">
              {ErrorImage && (
                <div className="error-thumb text-center mb-75">
                  <img src={ErrorImage.src} alt={'Error Image'} />
                </div>
              )}
              <div className="error-content text-center">
                {errorTitle && <h3 className="error-title  mb-35">{errorTitle}</h3>}
                <Link
                  className="oit-btn-border btn-white-bg d-inline-flex align-items-center justify-content-between"
                  href="/"
                >
                  <span>
                    <span className="text-1">Back to Home</span>
                    <span className="text-2">Back to Home</span>
                  </span>
                  <PartBtnArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
