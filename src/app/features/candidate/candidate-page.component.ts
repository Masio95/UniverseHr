import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidate-page.component.html',
  styleUrls: ['./candidate-page.component.css']
})
export class CandidatePageComponent {
  @ViewChild('previewVideo') previewVideo?: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  setup = {
    job: 'Production Manager',
    industry: 'Seeds',
    product: 'Hybrid Corn Seeds',
    country: 'India',
    companyType: 'AgriTech',
    language: 'English'
  };

  jobOptions = ['Production Manager', 'Quality Manager', 'Operations Lead', 'Supply Chain Manager'];
  industryOptions = ['Seeds', 'FMCG', 'Pharma', 'Automotive', 'Food'];
  productOptions = ['Hybrid Corn Seeds', 'Organic Food', 'Pharma Supplies', 'EV Components'];
  countryOptions = ['India', 'USA', 'UAE', 'Saudi Arabia', 'Egypt'];
  companyTypeOptions = ['Startup', 'Corporate', 'Agritech', 'Manufacturing', 'Distribution'];
  languageOptions = ['English', 'Arabic'];

  interviewQuestions = [
    { text: 'How would you improve OEE in a seed processing plant?' },
    { text: 'What steps would you take to reduce downtime on a high-speed packaging line?' },
    { text: 'How do you align production targets with quality standards in an FMCG operation?' }
  ];

  currentQuestionIndex = 0;
  interviewStarted = false;
  interviewFinished = false;
  recording = false;
  mediaStream: MediaStream | null = null;
  mediaRecorder: MediaRecorder | null = null;
  recordedChunks: Blob[] = [];
  recordedUrl: string | null = null;
  progress = 0;
  timerInterval: any;

  isDragging = false;
  extracting = false;
  extractedData: any = null;
  fileName = '';

  get hasRecordingSupport() {
    return typeof navigator !== 'undefined' && 'mediaDevices' in navigator && typeof (window as any).MediaRecorder !== 'undefined';
  }

  get currentQuestion() {
    return this.interviewQuestions[this.currentQuestionIndex];
  }

  startInterview() {
    this.interviewStarted = true;
    this.interviewFinished = false;
    this.currentQuestionIndex = 0;
    this.recordedUrl = null;
    this.progress = 0;
    this.clearTimer();
    this.startProgress();
  }

  resetInterview() {
    this.interviewStarted = false;
    this.interviewFinished = false;
    this.currentQuestionIndex = 0;
    this.recordedUrl = null;
    this.stopRecording();
    this.clearTimer();
    this.progress = 0;
  }

  previousQuestion() {
    if (this.currentQuestionIndex === 0) {
      return;
    }
    this.currentQuestionIndex -= 1;
    this.recordedUrl = null;
    this.clearTimer();
    this.startProgress();
  }

  nextQuestion() {
    if (this.currentQuestionIndex >= this.interviewQuestions.length - 1) {
      return;
    }
    this.currentQuestionIndex += 1;
    this.recordedUrl = null;
    this.clearTimer();
    this.startProgress();
  }

  finishInterview() {
    this.interviewFinished = true;
    this.stopRecording();
    this.clearTimer();
  }

  async toggleRecording() {
    if (this.recording) {
      this.stopRecording();
    } else {
      await this.startRecording();
    }
  }

  async startRecording() {
    if (!this.hasRecordingSupport) {
      return;
    }

    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      if (this.previewVideo?.nativeElement) {
        this.previewVideo.nativeElement.srcObject = this.mediaStream;
      }

      this.recordedChunks = [];
      this.mediaRecorder = new MediaRecorder(this.mediaStream);
      this.mediaRecorder.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      };
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
        this.recordedUrl = URL.createObjectURL(blob);
      };

      this.mediaRecorder.start();
      this.recording = true;
    } catch (error) {
      console.error('Recording failed', error);
      this.recording = false;
    }
  }

  stopRecording() {
    if (this.mediaRecorder && this.recording) {
      this.mediaRecorder.stop();
    }
    this.recording = false;

    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }

    if (this.previewVideo?.nativeElement) {
      this.previewVideo.nativeElement.srcObject = null;
    }
  }

  startProgress() {
    this.clearTimer();
    this.progress = 0;
    const duration = 15000;
    const interval = 100;
    const step = 100 / (duration / interval);

    this.timerInterval = setInterval(() => {
      this.progress = Math.min(100, Math.round(this.progress + step));
      if (this.progress >= 100) {
        this.clearTimer();
      }
    }, interval);
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  onDragOver(e: DragEvent) {
    e.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(e: DragEvent) {
    e.preventDefault();
    this.isDragging = false;
  }

  onDrop(e: DragEvent) {
    e.preventDefault();
    this.isDragging = false;
    const files = e.dataTransfer?.files;
    if (files && files.length) this.handleFile(files[0]);
  }

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length) this.handleFile(input.files[0]);
  }

  handleFile(file: File) {
    this.fileName = file.name;
    this.extractedData = null;
    this.simulateExtraction(file);
  }

  simulateExtraction(file: File) {
    this.extracting = true;
    setTimeout(() => {
      this.extracting = false;
      this.extractedData = {
        fileName: file.name,
        jobHistory: [
          { title: 'Software Engineer', company: 'Acme Corp', years: '2019 - 2023' },
          { title: 'Frontend Developer', company: 'Beta LLC', years: '2016 - 2019' }
        ],
        skills: [
          { name: 'JavaScript', evaluated: false },
          { name: 'TypeScript', evaluated: false },
          { name: 'Angular', evaluated: false },
          { name: 'HTML', evaluated: false },
          { name: 'CSS', evaluated: false }
        ],
        certifications: ['AWS Certified Developer', 'Scrum Master (simulated)'],
        education: ['B.Sc. Computer Science — State University'],
        languages: ['English', 'Spanish']
      };
    }, 1200);
  }

  clear() {
    this.fileName = '';
    this.extractedData = null;
  }

  startAssessment(skill: any) {
    this.router.navigate(['/assessments'], { queryParams: { skill: skill.name } });
  }

  viewProfile() {
    this.router.navigate(['/candidate/profile']);
  }
}
