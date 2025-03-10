import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";

export class ImageController {
  constructor() {
    console.log('Images Loaded');
    this.getImage()
    AppState.on('Image', this.drawBackground)
  }

  async getImage() {
    try {
      await imageService.getImage()
    } catch (error) {
      Pop.error(error)

    }
  }

  // drawImage() {
  //   const image = AppState.Image
  //   let content = ''
  //   content += image.thing
  //   const imageElem = document.getElementById('image')
  //   imageElem.innerHTML = content
  //   document.main.style.backgroundImage = `url(${image.full})`
  // }

  async drawBackground() {
    const image = AppState.Image
    let background = image.thing
    let imageElem = document.getElementById('image')
    imageElem.innerHTML = background
    document.body.style.setProperty('--background-image', `url(${image.full})`)
    // document.body.style.backgroundImage = `url(${image.regular})`

  }


}