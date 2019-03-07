import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  nombre = 'Barbara';
  apellido = 'Marquina';
  nombre2 = 'Carlos';
  apellido2 = 'Diaz';

  ngOnInit() {
  }

}
