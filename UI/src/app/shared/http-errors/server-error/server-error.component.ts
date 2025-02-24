import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../translate/language.service';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})

export class ServerErrorComponent implements OnInit {

  constructor(
    private readonly languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.languageService.setInitialLanguage();
  }
}
