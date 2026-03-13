import { useState } from "react"

export function useToast() {
  const [toasts, setToasts] = useState([])

  function toast(message) {
    setToasts((prev) => [...prev, message])
    console.log("Toast:", message)
  }

  return { toast, toasts }
}