import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment-page',
  standalone: true,
  template: `
    <section class="page">
      <header class="hero">
        <div>
          <p class="eyebrow">Interactive AI Assessment Results</p>
          <h2>Executive Scorecard</h2>
          <p>Proof of platform intelligence for corporate buyers, with score breakdown, gap mapping, and recruitment visibility control.</p>
        </div>
        <div class="visibility-panel">
          <div class="visibility-meta">
            <strong>Profile visibility</strong>
            <p>{{ visibilityText }}</p>
          </div>
          <button class="toggle" (click)="toggleVisibility()">
            <span class="switch" [class.on]="visibilityOn"></span>
            {{ visibilityOn ? 'Available for Recruitment' : 'Private' }}
          </button>
        </div>
      </header>

      <div class="grid">
        <section class="card scorecard">
          <div class="score-header">
            <div>
              <p class="card-label">Overall Score</p>
              <h3>{{ overallScore }} / 100</h3>
            </div>
            <div class="score-chip">Candidate Profile</div>
          </div>
          <div class="breakdown">
            <h4>Skill breakdown</h4>
            <ul>
              <li *ngFor="let skill of skillBreakdown">
                <span>{{ skill.name }}</span>
                <strong>{{ skill.value }}</strong>
              </li>
            </ul>
          </div>
        </section>

        <section class="card gap-report">
          <div class="report-head">
            <p class="card-label">Skill Gap & Recommended Training</p>
            <h3>Targeted improvement roadmap</h3>
          </div>
          <div class="gap-list">
            <div *ngFor="let item of gapReport" class="gap-item">
              <div>
                <strong>{{ item.skill }}</strong>
                <p>{{ item.reason }}</p>
              </div>
              <div class="recommendation">
                <p>Recommended course</p>
                <strong>{{ item.training }}</strong>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="panel insights">
        <h3>Executive delivery</h3>
        <p>Simulated report highlights areas recruiters care about: qualitative weakness mapping, training alignment, and the candidate’s readiness in key operational domains.</p>
        <div class="insights-grid">
          <div class="insight-card">
            <p class="small-label">Top Opportunity</p>
            <strong>Financial Management</strong>
            <p>Improve budgeting and margin forecasting for manufacturing operations.</p>
          </div>
          <div class="insight-card">
            <p class="small-label">Hiring signal</p>
            <strong>{{ visibilityOn ? 'Live recruiter pool' : 'Not visible yet' }}</strong>
            <p>Profiles set to public are immediately discoverable by recruiters in candidate search.</p>
          </div>
          <div class="insight-card">
            <p class="small-label">AI confidence</p>
            <strong>{{ aiConfidence }}%</strong>
            <p>Quality insights generated from multi-dimensional evaluation metrics.</p>
          </div>
        </div>
      </section>
    </section>
  `,
  styles: [
    `.page { max-width: 1040px; margin: 0 auto; padding: 1.5rem; font-family: Inter, system-ui, sans-serif; color: #0f172a; }
    .hero { display: flex; justify-content: space-between; gap: 1rem; align-items: start; margin-bottom: 1.5rem; }
    .eyebrow { margin: 0 0 0.45rem; color: #2563eb; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.8rem; }
    h2 { margin: 0 0 0.5rem; font-size: clamp(2rem, 2.4vw, 2.4rem); }
    .hero p { margin: 0; color: #475569; max-width: 620px; }
    .visibility-panel { display: flex; gap: 1rem; align-items: center; }
    .visibility-meta p { margin: 0.4rem 0 0; color: #475569; max-width: 210px; }
    .toggle { display: inline-flex; align-items: center; gap: 0.75rem; border: none; background: #eef2ff; color: #1d4ed8; border-radius: 999px; padding: 0.85rem 1.1rem; cursor: pointer; font-weight: 600; }
    .switch { width: 2rem; height: 1.1rem; border-radius: 999px; background: #c7d2fe; position: relative; transition: background-color 0.2s ease; }
    .switch::after { content: ''; position: absolute; top: 0.15rem; left: 0.15rem; width: 0.8rem; height: 0.8rem; border-radius: 50%; background: white; transition: transform 0.2s ease; }
    .switch.on { background: #22c55e; }
    .switch.on::after { transform: translateX(0.9rem); }
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; }
    .card { padding: 1.5rem; border-radius: 24px; background: #ffffff; border: 1px solid #e2e8f0; box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05); }
    .score-header, .report-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; }
    .card-label { margin: 0 0 0.6rem; color: #94a3b8; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; }
    .scorecard h3, .report-head h3 { margin: 0; font-size: 1.8rem; }
    .score-chip { padding: 0.55rem 0.9rem; border-radius: 999px; background: #eff6ff; color: #1d4ed8; font-weight: 700; font-size: 0.9rem; }
    .breakdown ul { list-style: none; padding: 0; margin: 1rem 0 0; display: grid; gap: 0.85rem; }
    .breakdown li { display: flex; justify-content: space-between; align-items: center; padding: 0.85rem 1rem; border-radius: 16px; background: #f8fafc; border: 1px solid #e2e8f0; }
    .gap-list { display: grid; gap: 1rem; margin-top: 1rem; }
    .gap-item { display: grid; gap: 1rem; padding: 1rem 1.1rem; border-radius: 18px; background: #f8fafc; border: 1px solid #e2e8f0; }
    .recommendation p { margin: 0 0 0.35rem; color: #475569; font-size: 0.9rem; }
    .recommendation strong { display: block; color: #0f172a; }
    .insights { margin-top: 1.25rem; }
    .insights-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; margin-top: 1rem; }
    .insight-card { padding: 1.2rem; border-radius: 20px; background: #eff6ff; border: 1px solid #dbeafe; }
    .small-label { margin: 0 0 0.5rem; color: #475569; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; }
    .insight-card strong { display: block; margin: 0.35rem 0 0.55rem; font-size: 1.05rem; }
    .insight-card p { margin: 0; color: #475569; line-height: 1.5; }
    @media (max-width: 900px) { .grid, .insights-grid { grid-template-columns: 1fr; } }
    `
  ]
})
export class AssessmentPageComponent {
  visibilityOn = true;
  overallScore = 82;
  aiConfidence = 88;
  skillBreakdown = [
    { name: 'Leadership', value: 90 },
    { name: 'Planning', value: 85 },
    { name: 'Technical', value: 80 },
    { name: 'Communication', value: 78 },
    { name: 'Operations', value: 84 }
  ];
  gapReport = [
    {
      skill: 'Financial Management',
      reason: 'Medium gap in budgeting and cost control for manufacturing leaders.',
      training: 'Budgeting for Manufacturing Managers'
    },
    {
      skill: 'Quality Assurance',
      reason: 'Needs stronger tools for driving consistent product quality across teams.',
      training: 'Quality Systems for FMCG Production'
    },
    {
      skill: 'Risk Planning',
      reason: 'Additional planning maturity needed for supply chain disruptions.',
      training: 'Operational Risk Management for Leaders'
    }
  ];

  get visibilityText() {
    return this.visibilityOn ? 'Live in recruiter database.' : 'Hidden from recruiter search.';
  }

  toggleVisibility() {
    this.visibilityOn = !this.visibilityOn;
  }
}
