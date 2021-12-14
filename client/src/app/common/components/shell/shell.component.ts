import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
  }

  public logout() {

    this.authService.logout()

  }

}
