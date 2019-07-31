import { Component, OnInit } from "@angular/core";
import { WorkOrderService } from "../../services/work-order.service";
import { WorkerService } from "../../services/worker.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  work = [];
  Workers = [];
  WorkersList: any;
  name;
  sorted = [];
  first = true;
  search;

  //brings in the services necessary for making the api call
  constructor(
    private workOrder: WorkOrderService,
    private worker: WorkerService
  ) {
    this.getInfo();
  }

  async ngOnInit() {
    //gets the two different apis and combines them based on the ID.
     this.getInfo();

  }

  async getInfo() {
    await this.worker.getWorker().then(data => {
      data.subscribe(data => {
         this.WorkersList = data;
      });
    });
    await this.workOrder.getWorkOrder().then(data => {
      data.subscribe(data => {
        console.log(data);
        data["orders"].map(order => {
           this.WorkersList.map(worker => {
            console.log(worker.id);
            console.log(order["workerId"]);
            if (worker.id === order["workerId"]) {
              this.name = worker.name;
              this.Workers.push({
                fullName: this.name,
                ...worker,
                ...order
              });
            }
          });
          this.sortFunction();
        });
      });
    });
  }

  //sorts the array by date and time
  sortFunction() {
    if (this.first) {
      this.sorted = this.Workers.sort((a, b) => a.deadline - b.deadline);
    } else {
      this.sorted = this.Workers.sort((a, b) => b.deadline - a.deadline);
    }
  }

  //toggles the list to show the earliest/latest deadlines
  toggle() {
    this.first = !this.first;
    this.sortFunction();
  }
}
