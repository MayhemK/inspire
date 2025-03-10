import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";

export class ImageController {
  constructor() {
    console.log('Images Loaded');
    this.getImage()
    AppState.on('Image', this.drawImage)
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
    document.body.style.backgroundImage = `url(${image.full})`
  }
}