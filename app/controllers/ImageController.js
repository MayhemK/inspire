import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";

export class ImageController {
  constructor() {
    console.log('Images Loaded');
    this.getImage()
  }

  async getImage() {
    try {
      await imageService.getImage()
    } catch (error) {
      Pop.error(error)

    }
  }

  drawImage() {
    const image = AppState.Image
    let content = ''
    content += image.thing
    const imageElem = document.getElementById('image')
    imageElem.innerHTML = content

    // document.getElementById('img').innerHTML = image
  }
}