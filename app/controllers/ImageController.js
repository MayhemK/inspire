import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";

export class ImageController {
  constructor() {
    console.log('Images Loaded');
    this.getImage()
  }

  async getImage() {
    try {
      await imageService.getImage()
    } catch (error) {

    }
  }

  drawImage() {
    const image = AppState.Image
    console.log(image);

    // document.getElementById('img').innerHTML = image
  }
}