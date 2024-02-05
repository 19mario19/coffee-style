import { writable, type Writable } from "svelte/store"

const cartToggle: Writable<boolean> = writable(true)

// Log changes to the store
// cartToggle.subscribe((value) => console.log("Toggle", value))

interface IToggle {
  on(): void
  off(): void
  switch(): void
}

class Toggle implements IToggle {
  private _toggle = false
  constructor() {
    cartToggle.subscribe((value) => (this._toggle = value))
  }

  on(): void {
    this._toggle = true
    this.update()
  }
  off(): void {
    this._toggle = false
    this.update()
  }
  switch(): void {
    this._toggle = !this._toggle
    this.update()
  }
  private update(): void {
    cartToggle.set(this._toggle)
  }
}

export { Toggle, cartToggle }
