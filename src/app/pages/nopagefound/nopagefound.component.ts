import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css']
})
export class NopagefoundComponent implements OnInit {


  year = new Date().getFullYear();



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




}
