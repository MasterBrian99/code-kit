declare interface Window {
  Neutralino: {
    init: () => void
    clipboard: {
      writeText: (value: string) => Promise<void>
    }
  }
}
