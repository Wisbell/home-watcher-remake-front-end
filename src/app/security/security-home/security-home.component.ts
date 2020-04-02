import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { Image } from '../image.model';

@Component({
  selector: 'app-security-home',
  templateUrl: './security-home.component.html',
  styleUrls: ['./security-home.component.scss']
})
export class SecurityHomeComponent implements OnInit {

  constructor(
    private securityService: SecurityService
  ) { }

  images: Image[];

  ngOnInit(): void {
    this.getAllImages();
  }

  getAllImages() {
    this.securityService.getAllImages()
    .then( (data) => {
      console.log('data', data);
      const theImages = data as Image[];
      this.images = theImages;
    });
  }

  async deleteImage(id: string) {
    var result = confirm("Are you sure you want to delete this image?");
    if (result) {
      await this.securityService.deleteImage(id);
      this.getAllImages();
    }
  }
}
