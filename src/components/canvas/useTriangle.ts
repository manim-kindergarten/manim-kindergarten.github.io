import { BLUE_A, BLUE_B, BLUE_D, BROWN_A, BROWN_B, BROWN_D, WHITE } from './colors'
import type { Point } from './types'
import useDescartes from './useDescartes'

/**
 * 在 canvas 画布上绘制三角形
 * @param config
 */
export default function useTriangle(config: {
  canvas: HTMLCanvasElement | undefined
  points: [Point, Point, Point]
  fill?: boolean
  fillColor?: string
  stroke?: number
  strokeColor?: string
}) {
  const { canvas, points, fillColor, strokeColor, fill, stroke } = config
  const ctx = canvas?.getContext('2d')
  if (!canvas)
    throw new Error('No canvas!')
  if (!ctx)
    throw new Error('No canvas ctx!')

  const p2 = useDescartes(canvas?.width, canvas?.height, ...points) as [Point, Point, Point]

  ctx.beginPath()
  ctx.moveTo(p2[0].x, p2[0].y)
  ctx.lineTo(p2[1].x, p2[1].y)
  ctx.lineTo(p2[2].x, p2[2].y)
  if (fill && fillColor) {
    ctx.fillStyle = fillColor
    ctx.fill()
  }
  if (stroke !== undefined && strokeColor) {
    ctx.strokeStyle = strokeColor
    ctx.lineWidth = stroke
    ctx.stroke()
  }
}

/**
 * 绘制 Logo 的四分之一
 * @param config
 */
export function usePartialLogo(config: {
  canvas: HTMLCanvasElement | undefined
  rotate: number
  colors: Array<string>
}) {
  const { canvas, rotate, colors } = config
  if (!canvas)
    throw new Error('No canvas!')
  const { width, height } = canvas
  const side: number = Math.min(width, height) / 8

  const allPoints = [
    [
      { x: side, y: -0.5 * side },
      { x: side, y: 1.5 * side },
      { x: 2 * side, y: -0.5 * side },
    ],
    [
      { x: 2.5 * side, y: -0.5 * side },
      { x: side, y: 2.5 * side },
      { x: 4 * side, y: 2.5 * side },
    ],
    [
      { x: 3 * side, y: -0.5 * side },
      { x: 4 * side, y: -0.5 * side },
      { x: 4 * side, y: 1.5 * side },
    ],
  ].map(it => it.map((jt) => {
    return {
      x: Math.cos(rotate) * jt.x - Math.sin(rotate) * jt.y,
      y: Math.sin(rotate) * jt.x + Math.cos(rotate) * jt.y,
    }
  }))

  useTriangle({
    canvas,
    points: allPoints[0] as [Point, Point, Point],
    fill: true,
    fillColor: colors[0],
  })
  useTriangle({
    canvas,
    points: allPoints[1] as [Point, Point, Point],
    fill: true,
    fillColor: colors[1],
  })
  useTriangle({
    canvas,
    points: allPoints[2] as [Point, Point, Point],
    fill: true,
    fillColor: colors[2],
  })
}

/**
 * 绘制整个 Logo
 * @param config
 */
export function useLogo(config: {
  canvas: HTMLCanvasElement | undefined
  dark: boolean
}) {
  const { canvas, dark } = config
  const blues = [BLUE_A, BLUE_B, BLUE_D]
  const browns = [BROWN_A, BROWN_B, BROWN_D]
  if (dark) {
    blues[0] = WHITE
    browns[0] = WHITE
  }
  usePartialLogo({
    canvas,
    rotate: 0,
    colors: browns,
  })
  usePartialLogo({
    canvas,
    rotate: Math.PI / 2,
    colors: blues,
  })
  usePartialLogo({
    canvas,
    rotate: Math.PI,
    colors: blues,
  })
  usePartialLogo({
    canvas,
    rotate: -Math.PI / 2,
    colors: blues,
  })
}
