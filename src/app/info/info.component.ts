import { Component, OnInit } from '@angular/core';

import { MassageService } from '../massage.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(public messageService: MassageService) { }

  ngOnInit(): void {}
}
