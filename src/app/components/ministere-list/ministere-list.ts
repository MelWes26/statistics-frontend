import { Component, OnInit } from '@angular/core';
import { MinistereService, Ministere } from '../../services/ministere';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ministere-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ministere-list.html',
  styleUrl: './ministere-list.scss',
})
export class MinistereList implements OnInit {
  ministeres: Ministere[] = [];

  constructor(private ministereService: MinistereService) {}

  ngOnInit(): void {
    this.loadMinisteres();
  }

  loadMinisteres(): void {
    this.ministereService.getMinisteres().subscribe((data) => {
      this.ministeres = data;
    });
  }
}
