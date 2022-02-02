import { Controller } from "stimulus"

export default class extends Controller {
  initialize() {
    console.log('Hello from stimulus!');
  }

  delete(event) {
    let confirmed = confirm("Are you sure?")

    if(!confirmed) {
      event.preventDefault()
      event.stopImmediatePropagation()
    }
  }
}
