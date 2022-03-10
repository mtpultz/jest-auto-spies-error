import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BonnieService } from './bonnie.service';

@Component({
  selector: 'bonnie-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bonninator';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private bonnieService: BonnieService
  ) { }

    public ngOnInit(): void {
      const bonnieId = this.bonnieService.bonnieId;
      if (!bonnieId) {
        console.error('No Bonnie ID was provided');
        this.router.navigate(['denied']);
        return;
      }

      console.log('Welcome to Llama Land!');
    }
}
