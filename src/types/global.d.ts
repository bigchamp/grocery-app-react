export {}

declare global {
  interface GroceryType {
    id: number
    title: string
    amount: number
    isChecked: boolean
  }

  interface GroceryFormProps {
    grocery: GroceryType
    isNewGrocery: boolean
    onSubmit: (values: GroceryType) => void
  }

  interface GroceryProps {
    id?: number | null | undefined
    closeModal?: () => void
  }
}
