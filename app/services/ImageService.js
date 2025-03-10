import { api } from "../utils/Axios.js";
import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js"

class ImageService {
  async getImage() {
    const response = await api.get('api/images')
    console.log('got image', response.data);
    const image = response.data.map(pojo => new Image(pojo))
    AppState.Image = image
  }
}



export const imageService = new ImageService()