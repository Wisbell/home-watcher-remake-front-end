import { Image } from '../security/image.model';

export class Incident {
  constructor()
  constructor(
    text: string
  )
  constructor(
    text?: string
  ) {
    this.text = text;
  }

  id: string;
  text: string;
  dateCreated: string;
  image: Image;
}
