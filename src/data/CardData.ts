export interface Action {
  label: string
  icon: string
  url: string
}

export interface CardData {
  title: string
  description: string
  action: Array<Action>
  previous?: Array<{ label: string; link: string }>
}
