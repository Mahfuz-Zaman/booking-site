import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination,Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);
@Component({
  selector: 'app-explore-bangladesh',
  templateUrl: './explore-bangladesh.component.html',
  styleUrls: ['./explore-bangladesh.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExploreBangladeshComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
