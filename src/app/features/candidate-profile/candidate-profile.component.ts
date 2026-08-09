import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page">
      <header class="profile-hero">
        <div>
          <p class="eyebrow">Candidate Profile</p>
          <h2>Personal assessment profile</h2>
          <p>Parsed skills, assessment readiness, and skill-specific development guidance for the candidate.</p>
        </div>
        <a routerLink="/candidate" class="back-link">Back to Candidate Workspace</a>
      </header>

      <div class="profile-grid">
        <section class="card summary-card">
          <h3>Profile snapshot</h3>
          <dl>
            <div>
              <dt>Name</dt>
              <dd>Amira El-Sayed</dd>
            </div>
            <div>
              <dt>Target role</dt>
              <dd>Production Manager</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Cairo, Egypt</dd>
            </div>
            <div>
              <dt>Assessment status</dt>
              <dd>Ready for recruiter review</dd>
            </div>
          </dl>
        </section>

        <section class="card score-card">
          <h3>Assessment Result</h3>
          <div class="score-value">82 / 100</div>
          <p class="score-note">Executive scorecard reflects candidate strength and readiness.</p>
          <ul>
            <li *ngFor="let item of assessmentSkills">
              <span>{{ item.name }}</span>
              <strong>{{ item.value }}</strong>
            </li>
          </ul>
        </section>
      </div>

      <section class="card skills-card">
        <div class="section-header">
          <div>
            <h3>Parsed skills</h3>
            <p>Any skill can be selected to see its current level and recommended next step.</p>
          </div>
          <p class="skill-count">{{ parsedSkills.length }} skills parsed</p>
        </div>

        <div class="skills-list">
          <button *ngFor="let skill of parsedSkills" class="skill-item" [class.selected]="skill.name === selectedSkill.name" (click)="selectSkill(skill)">
            <div>
              <strong>{{ skill.name }}</strong>
              <p>{{ skill.levelLabel }}</p>
            </div>
            <span>{{ skill.score }}%</span>
          </button>
        </div>

        <div class="skill-detail" *ngIf="selectedSkill.name">
          <h4>{{ selectedSkill.name }}</h4>
          <p>{{ selectedSkill.description }}</p>
          <div class="detail-row">
            <div>
              <span>Current competency</span>
              <strong>{{ selectedSkill.levelLabel }}</strong>
            </div>
            <div>
              <span>Recommended training</span>
              <strong>{{ selectedSkill.recommendation }}</strong>
            </div>
          </div>
        </div>
      </section>
    </section>
  `,
  styles: [
    `.page { max-width: 1000px; margin: 0 auto; padding: 1.5rem; font-family: Inter, system-ui, sans-serif; color: #0f172a; }
    .profile-hero { display: flex; justify-content: space-between; gap: 1rem; align-items: flex-start; margin-bottom: 1.5rem; }
    .eyebrow { margin: 0 0 0.45rem; color: #2563eb; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
    h2 { margin: 0; font-size: clamp(2rem, 2.4vw, 2.4rem); }
    .profile-hero p { margin: 0; color: #475569; max-width: 620px; }
    .back-link { color: #2563eb; text-decoration: none; font-weight: 600; border: 1px solid #c7d2fe; padding: 0.75rem 1rem; border-radius: 999px; background: #eff6ff; }
    .profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.5rem; }
    .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 24px; padding: 1.5rem; box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05); }
    .summary-card dl { display: grid; gap: 1rem; margin: 1rem 0 0; }
    dt { font-size: 0.9rem; color: #64748b; }
    dd { margin: 0.25rem 0 0; font-size: 1rem; font-weight: 600; }
    .score-card h3 { margin: 0 0 0.75rem; }
    .score-value { font-size: 2.75rem; font-weight: 800; color: #1d4ed8; margin-bottom: 0.5rem; }
    .score-note { margin: 0 0 1rem; color: #475569; }
    .score-card ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem; }
    .score-card li { display: flex; justify-content: space-between; padding: 0.85rem 1rem; border-radius: 16px; border: 1px solid #e2e8f0; background: #f8fafc; }
    .skills-card .section-header { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
    .skill-count { margin: 0; color: #64748b; }
    .skills-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; margin: 1rem 0; }
    .skill-item { width: 100%; text-align: left; border: 1px solid #e2e8f0; background: #f8fafc; border-radius: 18px; padding: 1rem; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; }
    .skill-item:hover { transform: translateY(-1px); border-color: #2563eb; }
    .skill-item.selected { border-color: #2563eb; background: #eff6ff; }
    .skill-item strong { display: block; margin-top: 0.35rem; color: #475569; font-weight: 500; }
    .skill-detail { margin-top: 1rem; padding: 1.2rem; border-radius: 20px; background: #eff6ff; border: 1px solid #dbeafe; }
    .skill-detail h4 { margin: 0 0 0.6rem; }
    .detail-row { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); margin-top: 1rem; }
    .detail-row div { padding: 1rem; border-radius: 18px; background: white; border: 1px solid #e2e8f0; }
    .detail-row span { color: #64748b; font-size: 0.88rem; }
    .detail-row strong { display: block; margin-top: 0.45rem; font-size: 1rem; }
    @media (max-width: 800px) { .profile-grid { grid-template-columns: 1fr; } }
    `
  ]
})
export class CandidateProfileComponent {
  selectedCandidate: any = {
    name: 'Amira El-Sayed',
    role: 'Production Manager',
    overallScore: 82,
    aiSummary: 'Experienced Production Manager with strong skills in manufacturing operations and candidate readiness.',
    parsedCv: {
      education: 'B.Sc. Agriculture',
      experience: '8 Years',
      skills: ['Leadership', 'Planning', 'Quality Control']
    },
    verifiedSkills: [
      { name: 'Leadership', score: 90 },
      { name: 'Communication', score: 84 },
      { name: 'Problem Solving', score: 88 },
      { name: 'Technical Knowledge', score: 86 }
    ]
  };

  constructor(private router: Router) {
    const navigationCandidate = this.router.getCurrentNavigation()?.extras.state?.['candidate'];
    if (navigationCandidate) {
      this.selectedCandidate = navigationCandidate;
    }
  }

  parsedSkills = [
    {
      name: 'Operational Excellence',
      score: 92,
      levelLabel: 'Advanced',
      description: 'Experienced in streamlining plant operations and raising overall equipment effectiveness.',
      recommendation: 'Operational Excellence for Manufacturers'
    },
    {
      name: 'Financial Management',
      score: 68,
      levelLabel: 'Intermediate',
      description: 'Solid budgeting fundamentals, but needs stronger costing and margin control for manufacturing teams.',
      recommendation: 'Budgeting for Manufacturing Managers'
    },
    {
      name: 'Leadership',
      score: 88,
      levelLabel: 'Advanced',
      description: 'Strong team and stakeholder leadership skills, with good decision-making in operations environments.',
      recommendation: 'Leadership for Production Managers'
    },
    {
      name: 'Quality Assurance',
      score: 74,
      levelLabel: 'Competent',
      description: 'Able to maintain quality standards, but can improve defect reduction and audit readiness.',
      recommendation: 'Quality Systems for FMCG Production'
    },
    {
      name: 'Supply Chain Planning',
      score: 79,
      levelLabel: 'Competent',
      description: 'Understands planning processes well yet can increase responsiveness to disruptions.',
      recommendation: 'Operational Risk Management for Leaders'
    }
  ];

  selectedSkill = this.parsedSkills[0];

  assessmentSkills = [
    { name: 'Leadership', value: 90 },
    { name: 'Planning', value: 85 },
    { name: 'Technical', value: 80 }
  ];

  selectSkill(skill: any) {
    this.selectedSkill = skill;
  }
}
