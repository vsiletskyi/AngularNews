import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-sport",
  templateUrl: "./sport.component.html",
  styleUrls: ["./sport.component.css"]
})
export class SportComponent implements OnInit {
  APIData: any[];
  constructor(private http: HttpClient) {}
  apiUrl = `https://newsapi.org/v2/top-headlines?country=ua&category=sport&apiKey=18f1c87e444741aca30db0a569bba999`;

  ngOnInit() {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.APIData = data.articles;
      console.log("API Data ", this.APIData);
    });
  }
}
