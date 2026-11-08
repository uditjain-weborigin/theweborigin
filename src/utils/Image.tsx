import type { CSSProperties } from 'react'
import './Image.scss'

interface ImageProps {
  src: string
  alt?: string
  width?: number
  height?: number
}

export default function Image({ src, alt = '', width = 1920, height = 1080 }: ImageProps) {
  const style = { '--image-aspect-ratio': `${width} / ${height}` } as CSSProperties

  return (
    <div className="image-frame" style={style}>
      <img src={src} alt={alt} />
    </div>
  )
}
