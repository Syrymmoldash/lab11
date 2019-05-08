import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	tasklists: any;
	tasks: any;
  taskdetail: any;
  taskid: number;
  status = true;
  view = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  	this.apiService.getTaskList().subscribe(res =>{
      this.tasklists = res;
    }
    )}

    myTasklist(pk: number) {
       this.taskid = pk;
      this.status = false;
    	this.apiService.getTask(pk).subscribe(res =>{
    		this.tasks = res;
    }
    )
    }

    myTask(pk: number, id: number) {

      this.view = false;
      this.apiService.getTaskDetail(pk, id).subscribe(res =>{
        this.taskdetail = res;
    }
    )
    }
}
