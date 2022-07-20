import type { Point } from './types'

/**
 * 将左上角为原点的坐标系映射到以中点为原点的坐标系
 * @param width canvas 宽度
 * @param height canvas 高度
 * @param points 传入的一系列点
 * @returns Point[]
 */
export default function (width: number, height: number, ...points: Point[]): Point[] {
  const center: Point = { x: width / 2, y: height / 2 }
  return points.map((p) => {
    return { x: center.x + p.x, y: center.y - p.y }
  })
}
