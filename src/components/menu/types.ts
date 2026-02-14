export interface ProgramBar {
  color: string
  width: number
}

export interface MenuItemData {
  label: string
  href?: string
  bars?: ProgramBar[]
}
