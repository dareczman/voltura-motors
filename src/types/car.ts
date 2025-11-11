export enum CarType {
  Sedan = 'sedan',
  SUV = 'SUV',
}

export enum DriveType {
  AWD = 'AWD',
  FWD = 'FWD',
  RWD = 'RWD',
}

export interface CarVersion {
  id: string
  label: string
  price?: number
  maxSpeed: number
  acceleration: number
  charging: string
  trunkCapacity: number
  warranty: string
}

export interface CarColor {
  id: string
  label: string
  hex: string
  price?: number
}

export interface CarAddon {
  id: string
  label: string
  price: number
}

export interface CarModel {
  id: string
  name: string
  price: number
  type: string
  range: number
  drive: string
  image: string
  gallery: string[]
  defaultVersion: string
  versions: CarVersion[]
  defaultColor: string
  colors: CarColor[]
  addons: CarAddon[]
}
