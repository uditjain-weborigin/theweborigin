import Image from '@/utils/Image'

export function CardThumbnails(data: any) {
  const { image1, image2, image3 } = data

  return (
    <div className="project-details-thumb-box mb-110">
      {(image1 || image2) && (
        <div className="row gx-25">
          {image1 && (
            <div className="col-md-6">
              <div className="project-details-thumb mb-25">
                <Image src={image1.url} alt={image1.alt} width={605} height={500} />
              </div>
            </div>
          )}
          {image2 && (
            <div className="col-md-6">
              <div className="project-details-thumb mb-25">
                <Image src={image2.url} alt={image2.alt} width={605} height={500} />
              </div>
            </div>
          )}
        </div>
      )}
      {image3 && (
        <div className="project-details-thumb mb-25">
          <Image src={image3.url} alt={image3.alt} width={1234} height={574} />
        </div>
      )}
    </div>
  )
}
