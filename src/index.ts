import CesiumClass from './class/CesiumClass'

export const init = (container: HTMLDivElement) => {
  const cesiumClass = new CesiumClass(container)

  cesiumClass.createWorldTerrain()
  cesiumClass.showFramesPerSecond()
}