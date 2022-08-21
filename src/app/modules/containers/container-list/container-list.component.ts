import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ReviewContainer } from '@app-core/store/actions/container.action';
import { BookingState } from '@app-core/store/models/booking.model';
import { ContainersService } from '@app-services/containers/containers.service';
import { Store } from '@ngrx/store';
import { Container } from 'src/app/interfaces/container';

@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.scss']
})
export class ContainerListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['container', 'origin', 'destination', 'status', 'description', 'dimensions', 'book'];
  dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('sort') sort!: MatSort;

  constructor(private containersService: ContainersService, private store: Store<BookingState>, private router: Router) { }

  ngOnInit(): void {
    this.init()
  }

  init(): void {
    this.containersService.getContainers().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response.content);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  getStatusClass(status: string): string {
    const preffix = 'containers__status--'
    let modifier = '';

    if (status.includes('YARD')) {
      modifier = 'yard'
    }

    if (status.includes('GATE')) {
      modifier = 'gate'
    }

    if (status.includes('UNLOAD')) {
      modifier = 'unload'
    }

    return preffix + modifier;
  }

  filter(event: Event) {
    const object: any = event.target;
    this.dataSource.filter = object.value.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.init()
  }

  selectContainer(element: Container) {
    this.store.dispatch(ReviewContainer(element))
    this.router.navigate(['book'])

  }

}
