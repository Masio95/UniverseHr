import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-recruiter-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter-page.component.html',
  styleUrls: ['./recruiter-page.component.css']
})
export class RecruiterPageComponent {

  filters = [
    {
      key: 'jobTitle',
      label: 'Job Title',
      value: '',
      options: [
        'Production Manager',
        'Plant Manager',
        'Operations Manager'
      ]
    },
    {
      key: 'industry',
      label: 'Industry',
      value: '',
      options: [
        'Seeds',
        'Agriculture',
        'Food Manufacturing'
      ]
    },
    {
      key: 'country',
      label: 'Country',
      value: '',
      options: [
        'Egypt',
        'Saudi Arabia',
        'UAE'
      ]
    },
    {
      key: 'experience',
      label: 'Experience',
      value: '',
      options: [
        '0-2 Years',
        '3-5 Years',
        '5-10 Years',
        '10+ Years'
      ]
    }
  ];

  scoreFilters = [
    {
      key: 'overallScore',
      label: 'Overall Score',
      value: 0
    },
    {
      key: 'leadership',
      label: 'Leadership',
      value: 0
    }
  ];

   allCandidates = [
    {
      id: 1,
      name: 'Mohamed Serag',
      role: 'Production Manager',
      overallScore: 87,

      aiSummary:
        'Experienced Production Manager with more than 8 years in seed manufacturing. Strong leadership, production planning, and quality improvement skills.',

      parsedCv: {
        education: 'B.Sc. Agriculture',
        experience: '8 Years',
        skills: [
          'Leadership',
          'Production Planning',
          'Lean Manufacturing',
          'Quality Control'
        ]
      },
       verifiedSkills: [
        {
          name: 'Leadership',
          score: 90
        },
        {
          name: 'Communication',
          score: 84
        },
        {
          name: 'Problem Solving',
          score: 88
        },
        {
          name: 'Technical Knowledge',
          score: 86
        }
      ],

      interviewRecording:
        'assets/interview-demo.mp4'
    },
     {
      id: 2,
      name: 'Ahmed Ali',
      role: 'Production Supervisor',
      overallScore: 83,

      aiSummary:
        'Production Supervisor experienced in manufacturing operations and continuous improvement.',

      parsedCv: {
        education: 'B.Sc. Engineering',
        experience: '6 Years',
        skills: [
          'Team Management',
          'Safety',
          'Operations'
        ]
      },
       verifiedSkills: [
        {
          name: 'Leadership',
          score: 82
        },
        {
          name: 'Communication',
          score: 85
        },
        {
          name: 'Problem Solving',
          score: 81
        },
        {
          name: 'Technical Knowledge',
          score: 84
        }
      ],

      interviewRecording:
        'assets/interview-demo.mp4'
    },
    {
  id: 3,
  name: 'Sara Hassan',
  role: 'Plant Manager',
  industry: 'Agriculture',
  country: 'Saudi Arabia',
  experience: '10+ Years',
  overallScore: 91,
  leadership: 94,

  aiSummary: 'Experienced Plant Manager with extensive background in agriculture.',

  parsedCv: {
    education: 'B.Sc. Agriculture',
    experience: '12 Years',
    skills: ['Leadership','Operations','Planning']
  },

  verifiedSkills: [
    { 
      name:'Leadership',
      score:94 
    },
    { 
      name:'Communication',
      score:90 
    },
    { 
      name:'Problem Solving',
      score:92 
    },
    { 
      name:'Technical Knowledge',
      score:89 
    }
  ],

  interviewRecording:'assets/interview-demo.mp4'
},
{
  id:4,
  name:'Omar Nabil',
  role:'Operations Manager',
  industry:'Seeds',
  country:'Egypt',
  experience:'10+ Years',
  overallScore:89,
  leadership:88,
  aiSummary:'Operations manager specialized in seed production.',
  parsedCv:{
    education:'B.Sc. Engineering',
    experience:'11 Years',
    skills:['Lean','Management','Planning']
  },
  verifiedSkills:
  [
    {
      name:'Leadership',
      score:88
    },
    {
      name:'Communication',
      score:85
    },
    {
      name:'Problem Solving',
      score:87
    },
    {
      name:'Technical Knowledge',
      score:90
    }
  ],
  interviewRecording:'assets/interview-demo.mp4'
},
{
  id:5,
  name:'Mariam Adel',
  role:'Production Manager',
  industry:'Seeds',
  country:'UAE',
  experience:'5-10 Years',
  overallScore:84,
  leadership:86,
  aiSummary:'Production manager with strong manufacturing background.',
  parsedCv:{
    education:'B.Sc. Industrial Engineering',
    experience:'7 Years',
    skills:['Production','Quality','Leadership']
  },
  verifiedSkills:[
    {
      name:'Leadership',
      score:86
    },
    {
      name:'Communication',
      score:82
    },
    {
      name:'Problem Solving',
      score:84
    },
    {
      name:'Technical Knowledge',
      score:85
    }
  ],

  interviewRecording:'assets/interview-demo.mp4'
}
  ];

  candidates = [...this.allCandidates];

  selectedCandidate: any = this.candidates[0];

  viewProfile(candidate: any) {
    this.selectedCandidate = candidate;
  }

   search() {

  const jobTitle =
    this.filters.find(f => f.key === 'jobTitle')?.value;

  const industry =
    this.filters.find(f => f.key === 'industry')?.value;

  const country =
    this.filters.find(f => f.key === 'country')?.value;

  const experience =
    this.filters.find(f => f.key === 'experience')?.value;

  const overall =
    this.scoreFilters.find(f => f.key === 'overallScore')?.value ?? 0;

  const leadership =
    this.scoreFilters.find(f => f.key === 'leadership')?.value ?? 0;

  this.candidates = this.allCandidates.filter(candidate =>

    (!jobTitle || candidate.role === jobTitle) &&

    (!industry || candidate.industry === industry) &&

    (!country || candidate.country === country) &&

    (!experience || candidate.experience === experience) &&

    candidate.overallScore >= (overall ?? 0) && (candidate.leadership ?? 0) >= leadership
  );

  this.selectedCandidate =
    this.candidates.length ? this.candidates[0] : null;

  }

 reset() {

  this.filters.forEach(filter => filter.value = '');

  this.scoreFilters.forEach(score => score.value = 0);

  this.candidates = [...this.allCandidates];

  this.selectedCandidate = this.candidates[0];

}

}