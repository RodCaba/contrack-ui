import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../api/projects.service';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  imports: [],
  templateUrl: './project-overview.component.html',
  styleUrl: './project-overview.component.css'
})
export class ProjectOverviewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) {}

  ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const projectIdFromRoute = Number(routeParams.get('projectId'));
      this.projectsService.getProject(projectIdFromRoute).subscribe(project => {
        console.log(project);
      });
  }
}
