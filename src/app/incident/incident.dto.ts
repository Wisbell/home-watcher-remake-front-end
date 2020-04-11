export class IncidentDto {
  constructor()
  constructor(
    id: string,
    text: string,
    dateCreated: string,
    imageId: string
  )
  constructor(
    id?: string,
    text?: string,
    dateCreated?: string,
    imageId?: string
  ) {
    this.id = id;
    this.text = text;
    this.dateCreated = dateCreated;
    this.imageId = imageId;
  }

  id: string;
  text: string;
  dateCreated: string;
  imageId: string;
  
}
