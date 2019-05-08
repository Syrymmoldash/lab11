import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITaskList, ITask } from '../models/inter';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	apiURL: string = 'http://127.0.0.1:8000';

	constructor(private httpClient: HttpClient) { }


	public getTaskList(){
		return this.httpClient.get(`${this.apiURL}/api/`);
  }

  	public getTask(id: number){
		return this.httpClient.get(`${this.apiURL}/api/${id}/`);
  }

  	public getTaskDetail(id: number, pk: number){
		return this.httpClient.get(`${this.apiURL}/api/${id}/${pk}/`);
  }
}
