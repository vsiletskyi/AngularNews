import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-entertainment",
  templateUrl: "./entertainment.component.html",
  styleUrls: ["./entertainment.component.css"]
})
export class EntertainmentComponent implements OnInit {
  APIData: any[];
  constructor(private http: HttpClient) {}
  apiUrl = `https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=18f1c87e444741aca30db0a569bba999`;

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.articles;
      console.log("API Data ", this.APIData);
    });
  }
}
