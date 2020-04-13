import { Injectable } from '@angular/core';
import { Image } from '../models/image';

//@Injectable nos permite utilizar este servicio en otros componentes
@Injectable()
export class ImageService {

	images: Image[] = [
		new Image('1','Primera imagen', 'Descripción primera imagen',
	 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/1.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/1.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
	 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/2.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/2.jpg?raw=true'),
		new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/4.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/5.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/6.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/7.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/8.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/9.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/10.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/11.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/12.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/13.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/14.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/15.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/16.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/17.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/18.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/19.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/20.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/21.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/22.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/23.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/24.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/25.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/26.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/27.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/28.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/29.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/30.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/31.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
   'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/32.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true'),
   new Image('1','Primera imagen', 'Descripción primera imagen',
	 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/33.jpg?raw=true', 'https://github.com/dastorga/gallery/blob/master/nggallery/src/assets/img/3.jpg?raw=true')
	];
  constructor() { }

  getImages(){
  	return this.images;
  }

}
