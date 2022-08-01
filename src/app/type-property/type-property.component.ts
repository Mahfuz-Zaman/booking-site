import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination,Navigation } from 'swiper';
SwiperCore.use([Pagination,Navigation]);
@Component({
  selector: 'app-type-property',
  templateUrl: './type-property.component.html',
  styleUrls: ['./type-property.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TypePropertyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
