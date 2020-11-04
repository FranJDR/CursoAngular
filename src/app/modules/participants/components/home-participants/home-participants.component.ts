import { NotificationsService } from './../../../../shared/services/notifications/notifications.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Participant } from 'src/app/shared/models/participant';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ParticipantsService } from 'src/app/shared/services/participants/participants.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-home-participants',
  templateUrl: './home-participants.component.html',
  styleUrls: ['./home-participants.component.scss']
})
export class HomeParticipantsComponent implements OnInit {

  id;
  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'operators'];
  dataSource;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private participantsService: ParticipantsService,
    private notidicationsService: NotificationsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.participantsService.getListParticipants().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


  deleteParticipan(id): void {
    this.participantsService.deleteParcipant(id).then(() => {
      this.notidicationsService.itemDelete();
      window.location.reload();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
