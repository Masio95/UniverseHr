import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  department: string;
  assessment: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  progress: number;
  skillGap: string;
}

interface SkillGap {
  skill: string;
  employees: number;
}

@Component({
  selector: 'app-company-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent {

  // ==========================
  // Search & Filters
  // ==========================

  search = '';
  selectedDepartment = 'All';
  selectedStatus = 'All';

  departments = [
    'All',
    'Finance',
    'Human Resources',
    'IT',
    'Marketing',
    'Operations',
    'Engineering'
  ];

  statuses = [
    'All',
    'Completed',
    'In Progress',
    'Not Started'
  ];

  // ==========================
  // Dashboard KPIs
  // ==========================

  totalEmployees = 120;
  activeAssessments = 38;
  completedAssessments = 82;
  averageProgress = 74;

  // ==========================
  // Modal State
  // ==========================

  showAssignModal = false;
  selectedEmployee?: Employee;

  // ==========================
  // Employee Data
  // ==========================

  employees: Employee[] = [

    {
      id: 1001,
      name: 'Ahmed Hassan',
      department: 'Finance',
      assessment: 'Advanced Excel',
      status: 'Completed',
      progress: 100,
      skillGap: '-'
    },

    {
      id: 1002,
      name: 'Sara Mohamed',
      department: 'Human Resources',
      assessment: 'Leadership Essentials',
      status: 'In Progress',
      progress: 60,
      skillGap: 'Communication'
    },

    {
      id: 1003,
      name: 'Omar Ali',
      department: 'IT',
      assessment: 'Angular Fundamentals',
      status: 'Not Started',
      progress: 0,
      skillGap: 'Angular'
    },

    {
      id: 1004,
      name: 'Mariam Ibrahim',
      department: 'Marketing',
      assessment: 'Digital Marketing',
      status: 'In Progress',
      progress: 40,
      skillGap: 'SEO'
    },

    {
      id: 1005,
      name: 'Youssef Adel',
      department: 'Operations',
      assessment: 'Power BI Basics',
      status: 'Completed',
      progress: 100,
      skillGap: '-'
    },

    {
      id: 1006,
      name: 'Nour Ibrahim',
      department: 'Engineering',
      assessment: 'Node.js Advanced',
      status: 'In Progress',
      progress: 72,
      skillGap: 'Microservices'
    },

    {
      id: 1007,
      name: 'Mona Samir',
      department: 'Finance',
      assessment: 'Financial Analysis',
      status: 'Completed',
      progress: 100,
      skillGap: '-'
    },

    {
      id: 1008,
      name: 'Karim Fathy',
      department: 'IT',
      assessment: 'Cloud Fundamentals',
      status: 'In Progress',
      progress: 55,
      skillGap: 'AWS'
    }

  ];

  // ==========================
  // Skill Gap Summary
  // ==========================

  skillGaps: SkillGap[] = [

    {
      skill: 'Angular',
      employees: 18
    },

    {
      skill: 'Leadership',
      employees: 14
    },

    {
      skill: 'Communication',
      employees: 11
    },

    {
      skill: 'Power BI',
      employees: 9
    },

    {
      skill: 'Excel',
      employees: 7
    }

  ];
    // ==========================
  // Filtered Employees
  // ==========================

  get filteredEmployees(): Employee[] {

    return this.employees.filter(employee => {

      const matchesSearch =
        employee.name.toLowerCase().includes(this.search.toLowerCase()) ||
        employee.department.toLowerCase().includes(this.search.toLowerCase()) ||
        employee.assessment.toLowerCase().includes(this.search.toLowerCase());

      const matchesDepartment =
        this.selectedDepartment === 'All' ||
        employee.department === this.selectedDepartment;

      const matchesStatus =
        this.selectedStatus === 'All' ||
        employee.status === this.selectedStatus;

      return matchesSearch && matchesDepartment && matchesStatus;

    });

  }

  // ==========================
  // Dashboard Helpers
  // ==========================

  get completedPercentage(): number {
    return Math.round(
      (this.completedAssessments / this.totalEmployees) * 100
    );
  }

  getBarWidth(value: number): number {
    return (value / 20) * 100;
  }

  // ==========================
  // Employee Actions
  // ==========================

  openAssignModal(employee?: Employee): void {
    this.selectedEmployee = employee;
    this.showAssignModal = true;
  }

  closeAssignModal(): void {
    this.showAssignModal = false;
    this.selectedEmployee = undefined;
  }

  assignAssessment(): void {

    if (this.selectedEmployee) {
      alert(
        `Assessment assigned successfully to ${this.selectedEmployee.name}`
      );
    } else {
      alert('Assessment assigned successfully.');
    }

    this.closeAssignModal();

  }

  viewDetails(employee: Employee): void {

    alert(
`Employee Details

Name: ${employee.name}

Department: ${employee.department}

Assessment: ${employee.assessment}

Status: ${employee.status}

Progress: ${employee.progress}%

Skill Gap: ${employee.skillGap}`
    );

  }

}