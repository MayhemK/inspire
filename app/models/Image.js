export class Image {
  constructor(data) {
    this.id = data.id
    this.attribution = data.attribution
    this.small = data.imgUrls.small
    this.regular = data.imgUrls.regular
    this.full = data.imgUrls.full
    this.description = data.description
  }

  get thing() {
    return ` 
    <div >
              <img src="${this.full}" class="img-fluid" alt="">
              <p>${this.attribution}</p>
              <p>${this.description}</p>
            </div>
    `
  }


}


// {
//   "status": "200 ",
//   "data": {
//     "id": "qTR9fCzyc_M",
//     "collection": "noon",
//     "slug": "snow-covered-mountain-under-blue-sky-qTR9fCzyc_M",
//     "height": 3456,
//     "width": 5184,
//     "originalLink": "https://unsplash.com/photos/snow-covered-mountain-under-blue-sky-qTR9fCzyc_M",
//     "imgUrls": {
//       "raw": "https://images.unsplash.com/photo-1523787061338-ce19f773e6cc?ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NjA1fGpZLVFQX24wcnBNfHx8fHwyfHwxNzQxNTQ2OTc4fA&ixlib=rb-4.0.3",
//       "full": "https://images.unsplash.com/photo-1523787061338-ce19f773e6cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NjA1fGpZLVFQX24wcnBNfHx8fHwyfHwxNzQxNTQ2OTc4fA&ixlib=rb-4.0.3&q=85",
//       "regular": "https://images.unsplash.com/photo-1523787061338-ce19f773e6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NjA1fGpZLVFQX24wcnBNfHx8fHwyfHwxNzQxNTQ2OTc4fA&ixlib=rb-4.0.3&q=80&w=1080",
//       "small": "https://images.unsplash.com/photo-1523787061338-ce19f773e6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NjA1fGpZLVFQX24wcnBNfHx8fHwyfHwxNzQxNTQ2OTc4fA&ixlib=rb-4.0.3&q=80&w=400",
//       "thumb": "https://images.unsplash.com/photo-1523787061338-ce19f773e6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NjA1fGpZLVFQX24wcnBNfHx8fHwyfHwxNzQxNTQ2OTc4fA&ixlib=rb-4.0.3&q=80&w=200",
//       "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1523787061338-ce19f773e6cc"
//     },
//     "description": "We found ourselves in an area of active volcanism in the north of Iceland and all I could do was hold my nose because the sulfur smell was making me sick.",
//     "altDescription": null,
//     "attribution": "Eleni Afiontzi",
//     "color": "#734026",
//     "cached": true
//   }
// }