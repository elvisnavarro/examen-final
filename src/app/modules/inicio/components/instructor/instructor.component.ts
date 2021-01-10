import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { Instructor } from '../../inferfaces/instructor';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  instructors: Instructor[];
  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.instructorService.getInstructors().subscribe( instructors => this.instructors = instructors );
  }

}
