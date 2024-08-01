import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { CampusService } from '../../service/campus.service';
import { Campus } from '../../models/campus';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  campusList: Campus[] | undefined;
  selectedCampus: Campus = new Campus;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campusService: CampusService,
    
  ) {}
  ngOnInit(): void {
      this.loadCampus();
  }
  // load danh sach campus ra
  loadCampus(){
    // lay danh sach campus tu api thong qua service
    // this.campusService.getCampuses().subscribe((cam: Campus[]) =>{
    //   this.campusList = cam;
    // });
    this.campusList = this.campusService.getCampuses();
  }
}
