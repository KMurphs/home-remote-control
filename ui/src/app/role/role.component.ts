import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  @Input() role: string;

  @Input() isSelected: boolean
  @Output() isSelectedChange = new EventEmitter<boolean>();

  handleChange(){
    this.isSelected = !this.isSelected
    this.isSelectedChange.emit(this.isSelected)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
