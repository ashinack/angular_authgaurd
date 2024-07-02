import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  data$ = interval(1000);
  dataSubsciption!: Subscription;

  ngOnInit(): void {
    this.dataSubsciption = this.data$.subscribe((data) => {
      // console.log('data', data);
    });
  }

  ngOnDestroy(): void {
    this.dataSubsciption.unsubscribe();
  }
}
