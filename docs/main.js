"use strict";
(self["webpackChunkskilligence_fe_template"] = self["webpackChunkskilligence_fe_template"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 0,
      consts: [[1, "topbar"], [1, "brand"], ["routerLink", "/"], ["routerLink", "/candidate"], ["routerLink", "/recruiter"], ["routerLink", "/company"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skilligence");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav")(4, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Candidate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recruiter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Company");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["[_nghost-%COMP%] { display: block; min-height: 100vh; font-family: Arial, sans-serif; color: #14213d; }\n    .topbar[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: linear-gradient(90deg, #0f172a 0%, #1e3a8a 100%); color: white; box-shadow: 0 4px 18px rgba(15, 23, 42, 0.16); }\n    .brand[_ngcontent-%COMP%] { font-size: 1.25rem; font-weight: 700; letter-spacing: 0.02em; }\n    nav[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 0.75rem; }\n    nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: white; text-decoration: none; padding: 0.35rem 0.7rem; border-radius: 999px; transition: background 0.2s ease; }\n    nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { background: rgba(255,255,255,0.14); }\n    main[_ngcontent-%COMP%] { padding: 2rem; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSw4QkFBOEIsRUFBRSxjQUFjLEVBQUU7SUFDdkYsVUFBVSxhQUFhLEVBQUUsOEJBQThCLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsNERBQTRELEVBQUUsWUFBWSxFQUFFLDZDQUE2QyxFQUFFO0lBQzdOLFNBQVMsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUU7SUFDdkUsTUFBTSxhQUFhLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRTtJQUNwRCxRQUFRLFlBQVksRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSxnQ0FBZ0MsRUFBRTtJQUM5SCxjQUFjLGtDQUFrQyxFQUFFO0lBQ2xELE9BQU8sYUFBYSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgbWluLWhlaWdodDogMTAwdmg7IGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgY29sb3I6ICMxNDIxM2Q7IH1cbiAgICAudG9wYmFyIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nOiAxcmVtIDJyZW07IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBmMTcyYSAwJSwgIzFlM2E4YSAxMDAlKTsgY29sb3I6IHdoaXRlOyBib3gtc2hhZG93OiAwIDRweCAxOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xNik7IH1cbiAgICAuYnJhbmQgeyBmb250LXNpemU6IDEuMjVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAwLjAyZW07IH1cbiAgICBuYXYgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogMC43NXJlbTsgfVxuICAgIG5hdiBhIHsgY29sb3I6IHdoaXRlOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IHBhZGRpbmc6IDAuMzVyZW0gMC43cmVtOyBib3JkZXItcmFkaXVzOiA5OTlweDsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7IH1cbiAgICBuYXYgYTpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCk7IH1cbiAgICBtYWluIHsgcGFkZGluZzogMnJlbTsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 6167);
/* harmony import */ var _features_candidate_candidate_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/candidate/candidate-page.component */ 182);
/* harmony import */ var _features_recruiter_recruiter_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/recruiter/recruiter-page.component */ 3502);
/* harmony import */ var _features_company_company_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/company/company-page.component */ 3750);
/* harmony import */ var _features_jobs_jobs_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/jobs/jobs-page.component */ 2812);
/* harmony import */ var _features_assessments_assessment_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/assessments/assessment-page.component */ 4291);
/* harmony import */ var _features_interviews_interview_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/interviews/interview-page.component */ 2165);







const routes = [{
  path: '',
  component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
}, {
  path: 'candidate',
  component: _features_candidate_candidate_page_component__WEBPACK_IMPORTED_MODULE_1__.CandidatePageComponent
}, {
  path: 'recruiter',
  component: _features_recruiter_recruiter_page_component__WEBPACK_IMPORTED_MODULE_2__.RecruiterPageComponent
}, {
  path: 'company',
  component: _features_company_company_page_component__WEBPACK_IMPORTED_MODULE_3__.CompanyPageComponent
}, {
  path: 'jobs',
  component: _features_jobs_jobs_page_component__WEBPACK_IMPORTED_MODULE_4__.JobsPageComponent
}, {
  path: 'assessments',
  component: _features_assessments_assessment_page_component__WEBPACK_IMPORTED_MODULE_5__.AssessmentPageComponent
}, {
  path: 'interviews',
  component: _features_interviews_interview_page_component__WEBPACK_IMPORTED_MODULE_6__.InterviewPageComponent
}, {
  path: '**',
  redirectTo: ''
}];

/***/ }),

/***/ 4291:
/*!*******************************************************************!*\
  !*** ./src/app/features/assessments/assessment-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssessmentPageComponent: () => (/* binding */ AssessmentPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AssessmentPageComponent {
  static {
    this.ɵfac = function AssessmentPageComponent_Factory(t) {
      return new (t || AssessmentPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AssessmentPageComponent,
      selectors: [["app-assessment-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 0,
      consts: [[1, "page"], [1, "panel"]],
      template: function AssessmentPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assessment Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create test plans, review candidate results, and compare performance trends.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Skill Tests");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Assgn role-specific assessments to candidates and employees.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Evaluation Insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Review scores, pass rates, and completion timelines in one view.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: [".page[_ngcontent-%COMP%] { max-width: 900px; margin: 0 auto; }\n    .panel[_ngcontent-%COMP%] { margin-top: 1rem; padding: 1rem; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXNzZXNzbWVudHMvYXNzZXNzbWVudC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGdCQUFnQixFQUFFLGNBQWMsRUFBRTtJQUN0QyxTQUFTLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHsgbWF4LXdpZHRoOiA5MDBweDsgbWFyZ2luOiAwIGF1dG87IH1cbiAgICAucGFuZWwgeyBtYXJnaW4tdG9wOiAxcmVtOyBwYWRkaW5nOiAxcmVtOyBib3JkZXItcmFkaXVzOiAxMnB4OyBiYWNrZ3JvdW5kOiAjZjhmYWZjOyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 182:
/*!****************************************************************!*\
  !*** ./src/app/features/candidate/candidate-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidatePageComponent: () => (/* binding */ CandidatePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);




function CandidatePageComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Drag & drop a PDF/DOCX here, or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "browse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CandidatePageComponent_p_7_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function CandidatePageComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Selected:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.fileName, "");
  }
}
function CandidatePageComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Extracting data\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CandidatePageComponent_div_13_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const j_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", j_r3.title, " \u2014 ", j_r3.company, " (", j_r3.years, ")");
  }
}
function CandidatePageComponent_div_13_li_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Evaluated Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CandidatePageComponent_div_13_li_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", s_r4.score, "");
  }
}
function CandidatePageComponent_div_13_li_12_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidatePageComponent_div_13_li_12_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const s_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.startAssessment(s_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Professional Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CandidatePageComponent_div_13_li_12_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assessing\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CandidatePageComponent_div_13_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CandidatePageComponent_div_13_li_12_span_3_Template, 2, 0, "span", 16)(4, CandidatePageComponent_div_13_li_12_span_4_Template, 2, 1, "span", 17)(5, CandidatePageComponent_div_13_li_12_button_5_Template, 2, 0, "button", 18)(6, CandidatePageComponent_div_13_li_12_span_6_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !s_r4.evaluated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r4.evaluated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !s_r4.evaluated && !s_r4.evaluating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r4.evaluating);
  }
}
function CandidatePageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Extracted data (simulated)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Job History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CandidatePageComponent_div_13_li_7_Template, 2, 3, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CandidatePageComponent_div_13_li_12_Template, 7, 5, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12)(14, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Certifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12)(19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12)(24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.extractedData.jobHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.extractedData.skills);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.extractedData.certifications.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.extractedData.education.join("; "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.extractedData.languages.join(", "));
  }
}
class CandidatePageComponent {
  constructor(router) {
    this.router = router;
    this.isDragging = false;
    this.extracting = false;
    this.extractedData = null;
    this.fileName = '';
  }
  onDragOver(e) {
    e.preventDefault();
    this.isDragging = true;
  }
  onDragLeave(e) {
    e.preventDefault();
    this.isDragging = false;
  }
  onDrop(e) {
    e.preventDefault();
    this.isDragging = false;
    const files = e.dataTransfer?.files;
    if (files && files.length) this.handleFile(files[0]);
  }
  onFileChange(e) {
    const input = e.target;
    if (input.files && input.files.length) this.handleFile(input.files[0]);
  }
  handleFile(file) {
    this.fileName = file.name;
    this.extractedData = null;
    this.simulateExtraction(file);
  }
  simulateExtraction(file) {
    this.extracting = true;
    // Simulate async AI extraction with static sample data
    setTimeout(() => {
      this.extracting = false;
      this.extractedData = {
        fileName: file.name,
        jobHistory: [{
          title: 'Software Engineer',
          company: 'Acme Corp',
          years: '2019 - 2023'
        }, {
          title: 'Frontend Developer',
          company: 'Beta LLC',
          years: '2016 - 2019'
        }],
        skills: [{
          name: 'JavaScript',
          evaluated: false
        }, {
          name: 'TypeScript',
          evaluated: false
        }, {
          name: 'Angular',
          evaluated: false
        }, {
          name: 'HTML',
          evaluated: false
        }, {
          name: 'CSS',
          evaluated: false
        }],
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
  startAssessment(skill) {
    // Navigate to the assessments page and pass the skill name as a query param
    this.router.navigate(['/assessments'], {
      queryParams: {
        skill: skill.name
      }
    });
  }
  static {
    this.ɵfac = function CandidatePageComponent_Factory(t) {
      return new (t || CandidatePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CandidatePageComponent,
      selectors: [["app-candidate-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 14,
      vars: 7,
      consts: [[1, "page"], [1, "uploader"], [1, "dropzone", 3, "dragover", "dragleave", "drop"], [4, "ngIf"], [1, "actions"], [3, "click", "disabled"], ["class", "extract", 4, "ngIf"], ["class", "result", 4, "ngIf"], [1, "browse"], ["type", "file", "accept", ".pdf,.doc,.docx", 3, "change"], [1, "extract"], [1, "result"], [1, "panel"], [4, "ngFor", "ngForOf"], [1, "skills"], [1, "skill-name"], ["class", "skill-status", 4, "ngIf"], ["class", "skill-score", 4, "ngIf"], [3, "click", 4, "ngIf"], ["class", "evaluating", 4, "ngIf"], [1, "skill-status"], [1, "skill-score"], [3, "click"], [1, "evaluating"]],
      template: function CandidatePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Candidate Workspace");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upload your CV to extract Job History, Skills, Certifications, Education and Languages.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function CandidatePageComponent_Template_div_dragover_6_listener($event) {
            return ctx.onDragOver($event);
          })("dragleave", function CandidatePageComponent_Template_div_dragleave_6_listener($event) {
            return ctx.onDragLeave($event);
          })("drop", function CandidatePageComponent_Template_div_drop_6_listener($event) {
            return ctx.onDrop($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CandidatePageComponent_p_7_Template, 5, 0, "p", 3)(8, CandidatePageComponent_p_8_Template, 4, 1, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidatePageComponent_Template_button_click_10_listener() {
            return ctx.clear();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Clear");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CandidatePageComponent_div_12_Template, 2, 0, "div", 6)(13, CandidatePageComponent_div_13_Template, 28, 5, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dragging", ctx.isDragging);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fileName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.fileName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extracting);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extractedData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".page[_ngcontent-%COMP%] { max-width: 900px; margin: 0 auto; }\n    .uploader[_ngcontent-%COMP%] { margin-top: 1rem; }\n    .dropzone[_ngcontent-%COMP%] { border: 2px dashed #cbd5e1; border-radius: 12px; padding: 2rem; text-align: center; background: #fff; cursor: pointer; }\n    .dropzone.dragging[_ngcontent-%COMP%] { background: #eef2ff; border-color: #6366f1; }\n    .browse[_ngcontent-%COMP%] { color: #2563eb; text-decoration: underline; cursor: pointer; }\n    .browse[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { display: none; }\n    .actions[_ngcontent-%COMP%] { margin-top: 0.6rem; }\n    button[_ngcontent-%COMP%] { padding: 0.4rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0; background: white; cursor: pointer; }\n    .extract[_ngcontent-%COMP%] { margin-top: 0.8rem; font-style: italic; }\n    .result[_ngcontent-%COMP%] { margin-top: 1rem; }\n    .panel[_ngcontent-%COMP%] { margin-top: 0.6rem; padding: 0.8rem; border-radius: 10px; background: #f8fafc; border: 1px solid #e2e8f0; }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2FuZGlkYXRlL2NhbmRpZGF0ZS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGdCQUFnQixFQUFFLGNBQWMsRUFBRTtJQUN0QyxZQUFZLGdCQUFnQixFQUFFO0lBQzlCLFlBQVksMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRTtJQUNuSSxxQkFBcUIsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUU7SUFDakUsVUFBVSxjQUFjLEVBQUUsMEJBQTBCLEVBQUUsZUFBZSxFQUFFO0lBQ3ZFLGdCQUFnQixhQUFhLEVBQUU7SUFDL0IsV0FBVyxrQkFBa0IsRUFBRTtJQUMvQixTQUFTLHNCQUFzQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRTtJQUNwSCxXQUFXLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFO0lBQ25ELFVBQVUsZ0JBQWdCLEVBQUU7SUFDNUIsU0FBUyxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7IG1heC13aWR0aDogOTAwcHg7IG1hcmdpbjogMCBhdXRvOyB9XG4gICAgLnVwbG9hZGVyIHsgbWFyZ2luLXRvcDogMXJlbTsgfVxuICAgIC5kcm9wem9uZSB7IGJvcmRlcjogMnB4IGRhc2hlZCAjY2JkNWUxOyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAycmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJhY2tncm91bmQ6ICNmZmY7IGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5kcm9wem9uZS5kcmFnZ2luZyB7IGJhY2tncm91bmQ6ICNlZWYyZmY7IGJvcmRlci1jb2xvcjogIzYzNjZmMTsgfVxuICAgIC5icm93c2UgeyBjb2xvcjogIzI1NjNlYjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5icm93c2UgaW5wdXQgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgLmFjdGlvbnMgeyBtYXJnaW4tdG9wOiAwLjZyZW07IH1cbiAgICBidXR0b24geyBwYWRkaW5nOiAwLjRyZW0gMC44cmVtOyBib3JkZXItcmFkaXVzOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IGJhY2tncm91bmQ6IHdoaXRlOyBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAuZXh0cmFjdCB7IG1hcmdpbi10b3A6IDAuOHJlbTsgZm9udC1zdHlsZTogaXRhbGljOyB9XG4gICAgLnJlc3VsdCB7IG1hcmdpbi10b3A6IDFyZW07IH1cbiAgICAucGFuZWwgeyBtYXJnaW4tdG9wOiAwLjZyZW07IHBhZGRpbmc6IDAuOHJlbTsgYm9yZGVyLXJhZGl1czogMTBweDsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3750:
/*!************************************************************!*\
  !*** ./src/app/features/company/company-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyPageComponent: () => (/* binding */ CompanyPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





const _c0 = (a0, a1, a2) => ({
  completed: a0,
  progress: a1,
  pending: a2
});
function CompanyPageComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const department_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r1, " ");
  }
}
function CompanyPageComponent_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r2, " ");
  }
}
function CompanyPageComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td")(15, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td")(18, "div", 23)(19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 26)(26, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyPageComponent_tr_65_Template_button_click_26_listener() {
      const employee_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.viewDetails(employee_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyPageComponent_tr_65_Template_button_click_28_listener() {
      const employee_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.openAssignModal(employee_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Assign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const employee_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r4.name.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Employee #", employee_r4.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r4.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r4.assessment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c0, employee_r4.status === "Completed", employee_r4.status === "In Progress", employee_r4.status === "Not Started"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r4.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", employee_r4.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", employee_r4.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r4.skillGap, " ");
  }
}
function CompanyPageComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No employees found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function CompanyPageComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r6.skill);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r6.employees, " Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.getBarWidth(skill_r6.employees), "%");
  }
}
function CompanyPageComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Assign Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyPageComponent_div_76_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.closeAssignModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38)(8, "div", 39)(9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 39)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select")(16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Angular Fundamentals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Leadership Essentials");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Advanced Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Power BI Basics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Digital Marketing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 39)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 42)(31, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyPageComponent_div_76_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.closeAssignModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyPageComponent_div_76_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.assignAssessment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Assign Assessment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (ctx_r4.selectedEmployee == null ? null : ctx_r4.selectedEmployee.name) || "New Assignment");
  }
}
class CompanyPageComponent {
  constructor() {
    // ==========================
    // Search & Filters
    // ==========================
    this.search = '';
    this.selectedDepartment = 'All';
    this.selectedStatus = 'All';
    this.departments = ['All', 'Finance', 'Human Resources', 'IT', 'Marketing', 'Operations', 'Engineering'];
    this.statuses = ['All', 'Completed', 'In Progress', 'Not Started'];
    // ==========================
    // Dashboard KPIs
    // ==========================
    this.totalEmployees = 120;
    this.activeAssessments = 38;
    this.completedAssessments = 82;
    this.averageProgress = 74;
    // ==========================
    // Modal State
    // ==========================
    this.showAssignModal = false;
    // ==========================
    // Employee Data
    // ==========================
    this.employees = [{
      id: 1001,
      name: 'Ahmed Hassan',
      department: 'Finance',
      assessment: 'Advanced Excel',
      status: 'Completed',
      progress: 100,
      skillGap: '-'
    }, {
      id: 1002,
      name: 'Sara Mohamed',
      department: 'Human Resources',
      assessment: 'Leadership Essentials',
      status: 'In Progress',
      progress: 60,
      skillGap: 'Communication'
    }, {
      id: 1003,
      name: 'Omar Ali',
      department: 'IT',
      assessment: 'Angular Fundamentals',
      status: 'Not Started',
      progress: 0,
      skillGap: 'Angular'
    }, {
      id: 1004,
      name: 'Mariam Ibrahim',
      department: 'Marketing',
      assessment: 'Digital Marketing',
      status: 'In Progress',
      progress: 40,
      skillGap: 'SEO'
    }, {
      id: 1005,
      name: 'Youssef Adel',
      department: 'Operations',
      assessment: 'Power BI Basics',
      status: 'Completed',
      progress: 100,
      skillGap: '-'
    }, {
      id: 1006,
      name: 'Nour Ibrahim',
      department: 'Engineering',
      assessment: 'Node.js Advanced',
      status: 'In Progress',
      progress: 72,
      skillGap: 'Microservices'
    }, {
      id: 1007,
      name: 'Mona Samir',
      department: 'Finance',
      assessment: 'Financial Analysis',
      status: 'Completed',
      progress: 100,
      skillGap: '-'
    }, {
      id: 1008,
      name: 'Karim Fathy',
      department: 'IT',
      assessment: 'Cloud Fundamentals',
      status: 'In Progress',
      progress: 55,
      skillGap: 'AWS'
    }];
    // ==========================
    // Skill Gap Summary
    // ==========================
    this.skillGaps = [{
      skill: 'Angular',
      employees: 18
    }, {
      skill: 'Leadership',
      employees: 14
    }, {
      skill: 'Communication',
      employees: 11
    }, {
      skill: 'Power BI',
      employees: 9
    }, {
      skill: 'Excel',
      employees: 7
    }];
  }
  // ==========================
  // Filtered Employees
  // ==========================
  get filteredEmployees() {
    return this.employees.filter(employee => {
      const matchesSearch = employee.name.toLowerCase().includes(this.search.toLowerCase()) || employee.department.toLowerCase().includes(this.search.toLowerCase()) || employee.assessment.toLowerCase().includes(this.search.toLowerCase());
      const matchesDepartment = this.selectedDepartment === 'All' || employee.department === this.selectedDepartment;
      const matchesStatus = this.selectedStatus === 'All' || employee.status === this.selectedStatus;
      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }
  // ==========================
  // Dashboard Helpers
  // ==========================
  get completedPercentage() {
    return Math.round(this.completedAssessments / this.totalEmployees * 100);
  }
  getBarWidth(value) {
    return value / 20 * 100;
  }
  // ==========================
  // Employee Actions
  // ==========================
  openAssignModal(employee) {
    this.selectedEmployee = employee;
    this.showAssignModal = true;
  }
  closeAssignModal() {
    this.showAssignModal = false;
    this.selectedEmployee = undefined;
  }
  assignAssessment() {
    if (this.selectedEmployee) {
      alert(`Assessment assigned successfully to ${this.selectedEmployee.name}`);
    } else {
      alert('Assessment assigned successfully.');
    }
    this.closeAssignModal();
  }
  viewDetails(employee) {
    alert(`Employee Details

Name: ${employee.name}

Department: ${employee.department}

Assessment: ${employee.assessment}

Status: ${employee.status}

Progress: ${employee.progress}%

Skill Gap: ${employee.skillGap}`);
  }
  static {
    this.ɵfac = function CompanyPageComponent_Factory(t) {
      return new (t || CompanyPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompanyPageComponent,
      selectors: [["app-company-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 77,
      vars: 15,
      consts: [[1, "page"], [1, "hero"], [1, "tag"], [1, "assign-btn", 3, "click"], [1, "stats"], [1, "card"], [1, "filters"], ["type", "text", "placeholder", "Search employee...", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-container"], [4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], [1, "skill-gap-section"], [1, "section-header"], [1, "section-description"], ["class", "skill-item", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 4, "ngIf"], [3, "value"], [1, "employee"], [1, "avatar"], [1, "sub-text"], [1, "status", 3, "ngClass"], [1, "progress-wrapper"], [1, "progress-bar"], [1, "progress-fill"], [1, "actions"], [1, "secondary", 3, "click"], [1, "primary", 3, "click"], [1, "empty"], [1, "skill-item"], [1, "skill-header"], [1, "skill-bar"], [1, "skill-fill"], [1, "modal-overlay"], [1, "modal"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "field"], ["type", "text", "readonly", "", 3, "value"], ["type", "date"], [1, "modal-footer"]],
      template: function CompanyPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div")(3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Corporate Internal Appraisal Portal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Employee Assessment Hub");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Assign assessments, identify organizational skill gaps, and monitor employee development to support internal performance appraisals. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyPageComponent_Template_button_click_9_listener() {
            return ctx.openAssignModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " + Assign Assessment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "div", 5)(13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total Employees");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Across all departments");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5)(20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Active Assessments");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Currently in progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5)(27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5)(34, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Average Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Organization wide");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6)(41, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function CompanyPageComponent_Template_input_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.search, $event) || (ctx.search = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function CompanyPageComponent_Template_select_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.selectedDepartment, $event) || (ctx.selectedDepartment = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CompanyPageComponent_option_43_Template, 2, 2, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function CompanyPageComponent_Template_select_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CompanyPageComponent_option_45_Template, 2, 2, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10)(47, "table")(48, "thead")(49, "tr")(50, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Department");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Assessment");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Progress");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Skill Gap");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CompanyPageComponent_tr_65_Template, 30, 15, "tr", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, CompanyPageComponent_div_66_Template, 2, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13)(68, "div", 14)(69, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Organizational Skill Gap Summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Identify the most common skill gaps across departments to help HR teams prioritize learning and development initiatives. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, CompanyPageComponent_div_75_Template, 8, 4, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, CompanyPageComponent_div_76_Template, 35, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalEmployees);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activeAssessments);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.completedAssessments);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.completedPercentage, "% completion");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.averageProgress, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.search);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDepartment);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredEmployees);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredEmployees.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.skillGaps.length, " Skills Tracked");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillGaps);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAssignModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: [".page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 32px;\n  background: #f8fafc;\n  min-height: 100vh;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #1e293b;\n}\n\n\n\n\n\n\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 32px;\n}\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-size: 2.3rem;\n  font-weight: 700;\n}\n\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 700px;\n  color: #64748b;\n  line-height: 1.7;\n}\n\n.tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 14px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  border-radius: 30px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n\n\n\n\n\n.assign-btn[_ngcontent-%COMP%], .primary[_ngcontent-%COMP%] {\n  border: none;\n  background: #2563eb;\n  color: white;\n  padding: 11px 20px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: .25s;\n}\n\n.assign-btn[_ngcontent-%COMP%]:hover, .primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n\n.secondary[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  background: white;\n  color: #2563eb;\n  padding: 10px 18px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: .25s;\n}\n\n.secondary[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n\n\n\n\n\n\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4,1fr);\n  gap: 20px;\n  margin-bottom: 32px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  padding: 24px;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 8px 24px rgba(15,23,42,.05);\n}\n\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 14px;\n}\n\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 12px 0 6px;\n  font-size: 34px;\n  color: #2563eb;\n}\n\n.card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n\n\n\n\n\n\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 28px;\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  background: white;\n  font-size: 14px;\n  outline: none;\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 320px;\n}\n\n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n\n\n\n\n\n\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 14px;\n  overflow: hidden;\n  box-shadow: 0 8px 24px rgba(15,23,42,.05);\n  margin-bottom: 32px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nthead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\n\nth[_ngcontent-%COMP%] {\n  padding: 18px;\n  text-align: left;\n  color: #475569;\n  font-size: 14px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 18px;\n  border-top: 1px solid #f1f5f9;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n\n\n\n\n\n\n.employee[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: #2563eb;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.sub-text[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n\n\n\n\n\n.status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  white-space: nowrap;\n  min-width: 110px;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.completed[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n\n.progress[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.pending[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n\n\n\n\n\n\n.progress-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 10px;\n  border-radius: 999px;\n  background: #e2e8f0;\n  overflow: hidden;\n}\n\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #2563eb, #60a5fa);\n  border-radius: 999px;\n}\n\n\n\n\n\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n\n\n\n\n\n.empty[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #94a3b8;\n}\n\n\n\n\n\n\n.skill-gap-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 28px;\n  border-radius: 14px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, .05);\n}\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n}\n\n.section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n\n.section-description[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  color: #64748b;\n  line-height: 1.6;\n}\n\n.skill-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.skill-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.skill-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n\n.skill-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12px;\n  background: #e2e8f0;\n  border-radius: 999px;\n  overflow: hidden;\n}\n\n.skill-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #2563eb, #3b82f6);\n  border-radius: 999px;\n  transition: width .3s ease;\n}\n\n\n\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, .45);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n}\n\n.modal[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: calc(100% - 32px);\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 50px rgba(15, 23, 42, .25);\n  overflow: hidden;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 22px 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 20px;\n  color: #64748b;\n}\n\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n}\n\n.field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 10px;\n  outline: none;\n  font-size: 14px;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px 24px;\n  border-top: 1px solid #e2e8f0;\n}\n\n\n\n\n\n\n@media (max-width: 992px) {\n\n  .hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n\n  table[_ngcontent-%COMP%] {\n    min-width: 950px;\n  }\n}\n\n@media (max-width: 640px) {\n\n  .page[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .modal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29tcGFueS9jb21wYW55LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUNBQXlDO0VBQ3pDLGNBQWM7QUFDaEI7O0FBRUE7OzRCQUU0Qjs7QUFFNUI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7NEJBRTRCOztBQUU1Qjs7RUFFRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7NEJBRTRCOztBQUU1QjtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OzRCQUU0Qjs7QUFFNUI7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBOzs0QkFFNEI7O0FBRTVCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7NEJBRTRCOztBQUU1QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBOzs0QkFFNEI7O0FBRTVCO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7OzRCQUU0Qjs7QUFFNUI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0RBQW9EO0VBQ3BELG9CQUFvQjtBQUN0Qjs7QUFFQTs7NEJBRTRCOztBQUU1QjtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7OzRCQUU0Qjs7QUFFNUI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7OzRCQUU0Qjs7QUFFNUI7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvREFBb0Q7RUFDcEQsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1Qjs7QUFFQTs7NEJBRTRCOztBQUU1QjtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0MsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTs7NEJBRTRCOztBQUU1Qjs7RUFFRTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTs7SUFFRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFFBQVE7RUFDVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzFlMjkzYjtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgSGVyb1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmhlcm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuXHJcbi5oZXJvIGgxIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBmb250LXNpemU6IDIuM3JlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uaGVybyBwIHtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbn1cclxuXHJcbi50YWcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjZGJlYWZlO1xyXG4gIGNvbG9yOiAjMWQ0ZWQ4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEJ1dHRvbnNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5hc3NpZ24tYnRuLFxyXG4ucHJpbWFyeSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDExcHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogLjI1cztcclxufVxyXG5cclxuLmFzc2lnbi1idG46aG92ZXIsXHJcbi5wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMWQ0ZWQ4O1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjU2M2ViO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiAjMjU2M2ViO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IC4yNXM7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlZmY2ZmY7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEtQSSBDYXJkc1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnN0YXRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsMWZyKTtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxNSwyMyw0MiwuMDUpO1xyXG59XHJcblxyXG4uY2FyZCBzcGFuIHtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jYXJkIGgyIHtcclxuICBtYXJnaW46IDEycHggMCA2cHg7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGNvbG9yOiAjMjU2M2ViO1xyXG59XHJcblxyXG4uY2FyZCBzbWFsbCB7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEZpbHRlcnNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5maWx0ZXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTZweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLmZpbHRlcnMgaW5wdXQsXHJcbi5maWx0ZXJzIHNlbGVjdCB7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZpbHRlcnMgaW5wdXQge1xyXG4gIHdpZHRoOiAzMjBweDtcclxufVxyXG5cclxuLmZpbHRlcnMgaW5wdXQ6Zm9jdXMsXHJcbi5maWx0ZXJzIHNlbGVjdDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBUYWJsZVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxNSwyMyw0MiwuMDUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxufVxyXG5cclxudGgge1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzQ3NTU2OTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG59XHJcblxyXG50Ym9keSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgRW1wbG95ZWVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5lbXBsb3llZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTRweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc3ViLXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbn1cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgU3RhdHVzXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uc3RhdHVzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbWluLXdpZHRoOiAxMTBweDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNvbXBsZXRlZCB7XHJcbiAgYmFja2dyb3VuZDogI2RjZmNlNztcclxuICBjb2xvcjogIzE1ODAzZDtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xyXG4gIGNvbG9yOiAjYjQ1MzA5O1xyXG59XHJcblxyXG4ucGVuZGluZyB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZTJlMjtcclxuICBjb2xvcjogI2RjMjYyNjtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgUHJvZ3Jlc3NcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5wcm9ncmVzcy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlMmU4ZjA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByb2dyZXNzLWZpbGwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyNTYzZWIsICM2MGE1ZmEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBBY3Rpb25zXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEVtcHR5IFN0YXRlXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uZW1wdHkge1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBTa2lsbCBHYXAgU2VjdGlvblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnNraWxsLWdhcC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE1LCAyMywgNDIsIC4wNSk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG5cclxuLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLnNraWxsLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5za2lsbC1pdGVtOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5za2lsbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5za2lsbC1iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5za2lsbC1maWxsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjU2M2ViLCAjM2I4MmY2KTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAuM3MgZWFzZTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgTW9kYWxcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5tb2RhbC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAuNDUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDE1LCAyMywgNDIsIC4yNSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMnB4IDI0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgaDMge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNsb3NlLWJ0biB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbn1cclxuXHJcbi5jbG9zZS1idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMjRweDtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLmZpZWxkOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5maWVsZCBsYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQsXHJcbi5maWVsZCBzZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6Zm9jdXMsXHJcbi5maWVsZCBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzI1NjNlYjtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMTJweDtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFJlc3BvbnNpdmVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAuaGVybyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuc3RhdHMge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcblxyXG4gIC50YWJsZS1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIG1pbi13aWR0aDogOTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuXHJcbiAgLnBhZ2Uge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC5zdGF0cyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5maWx0ZXJzIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuZmlsdGVycyBpbnB1dCxcclxuICAuZmlsdGVycyBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubW9kYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2165:
/*!*****************************************************************!*\
  !*** ./src/app/features/interviews/interview-page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterviewPageComponent: () => (/* binding */ InterviewPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class InterviewPageComponent {
  static {
    this.ɵfac = function InterviewPageComponent_Factory(t) {
      return new (t || InterviewPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InterviewPageComponent,
      selectors: [["app-interview-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 0,
      consts: [[1, "page"], [1, "panel"]],
      template: function InterviewPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Interview Workflow");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Guide interviews from scheduling to feedback collection with a structured process.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Scheduling");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Coordinate interview slots and keep participants informed.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Feedback");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Capture notes, recommendations, and next-step decisions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: [".page[_ngcontent-%COMP%] { max-width: 900px; margin: 0 auto; }\n    .panel[_ngcontent-%COMP%] { margin-top: 1rem; padding: 1rem; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaW50ZXJ2aWV3cy9pbnRlcnZpZXctcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUU7SUFDdEMsU0FBUyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7IG1heC13aWR0aDogOTAwcHg7IG1hcmdpbjogMCBhdXRvOyB9XG4gICAgLnBhbmVsIHsgbWFyZ2luLXRvcDogMXJlbTsgcGFkZGluZzogMXJlbTsgYm9yZGVyLXJhZGl1czogMTJweDsgYmFja2dyb3VuZDogI2Y4ZmFmYzsgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDsgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2812:
/*!******************************************************!*\
  !*** ./src/app/features/jobs/jobs-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobsPageComponent: () => (/* binding */ JobsPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class JobsPageComponent {
  static {
    this.ɵfac = function JobsPageComponent_Factory(t) {
      return new (t || JobsPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JobsPageComponent,
      selectors: [["app-jobs-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 15,
      vars: 0,
      consts: [[1, "page"], [1, "panel"]],
      template: function JobsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Job Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Coordinate postings, shortlist talent, and keep hiring goals visible for the team.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Open Roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Track active job openings and required skill profiles.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Hiring Funnel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Monitor applications, screening progress, and interview readiness.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: [".page[_ngcontent-%COMP%] { max-width: 900px; margin: 0 auto; }\n    .panel[_ngcontent-%COMP%] { margin-top: 1rem; padding: 1rem; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvam9icy9qb2JzLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFO0lBQ3RDLFNBQVMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UgeyBtYXgtd2lkdGg6IDkwMHB4OyBtYXJnaW46IDAgYXV0bzsgfVxuICAgIC5wYW5lbCB7IG1hcmdpbi10b3A6IDFyZW07IHBhZGRpbmc6IDFyZW07IGJvcmRlci1yYWRpdXM6IDEycHg7IGJhY2tncm91bmQ6ICNmOGZhZmM7IGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7IH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3502:
/*!****************************************************************!*\
  !*** ./src/app/features/recruiter/recruiter-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecruiterPageComponent: () => (/* binding */ RecruiterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





function RecruiterPageComponent_div_13_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3, " ");
  }
}
function RecruiterPageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterPageComponent_div_13_Template_select_ngModelChange_3_listener($event) {
      const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](filter_r2.value, $event) || (filter_r2.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecruiterPageComponent_div_13_option_6_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", filter_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Select ", filter_r2.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", filter_r2.options);
  }
}
function RecruiterPageComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function RecruiterPageComponent_div_17_Template_input_ngModelChange_3_listener($event) {
      const score_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](score_r5.value, $event) || (score_r5.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const score_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", score_r5.label, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", score_r5.value);
  }
}
function RecruiterPageComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecruiterPageComponent_div_29_Template_div_click_0_listener() {
      const candidate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.viewProfile(candidate_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div")(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const candidate_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", candidate_r7.name.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", candidate_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", candidate_r7.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", candidate_r7.industry, " \u2022 ", candidate_r7.country, " \u2022 ", candidate_r7.experience, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", candidate_r7.overallScore, " ");
  }
}
function RecruiterPageComponent_div_30_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r9.score, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", skill_r9.score, "%");
  }
}
function RecruiterPageComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Verified Skill Scores");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RecruiterPageComponent_div_30_div_15_Template, 8, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\uD83E\uDD16 AI Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 32)(20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\uD83D\uDCC4 Parsed CV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 33)(26, "div", 34)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 34)(32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Experience");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 35)(37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\uD83C\uDFA5 Interview Recording");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "video", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "source", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Your browser does not support HTML5 video. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.selectedCandidate.name.charAt(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.selectedCandidate.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.selectedCandidate.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u2B50 Overall Score: ", ctx_r7.selectedCandidate.overallScore, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.selectedCandidate.verifiedSkills);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.selectedCandidate.aiSummary, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.selectedCandidate.parsedCv.education, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.selectedCandidate.parsedCv.experience, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.selectedCandidate.parsedCv.skills.join(", "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.selectedCandidate.interviewRecording, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class RecruiterPageComponent {
  constructor() {
    this.filters = [{
      key: 'jobTitle',
      label: 'Job Title',
      value: '',
      options: ['Production Manager', 'Plant Manager', 'Operations Manager']
    }, {
      key: 'industry',
      label: 'Industry',
      value: '',
      options: ['Seeds', 'Agriculture', 'Food Manufacturing']
    }, {
      key: 'country',
      label: 'Country',
      value: '',
      options: ['Egypt', 'Saudi Arabia', 'UAE']
    }, {
      key: 'experience',
      label: 'Experience',
      value: '',
      options: ['0-2 Years', '3-5 Years', '5-10 Years', '10+ Years']
    }];
    this.scoreFilters = [{
      key: 'overallScore',
      label: 'Overall Score',
      value: 0
    }, {
      key: 'leadership',
      label: 'Leadership',
      value: 0
    }];
    this.allCandidates = [{
      id: 1,
      name: 'Mohamed Serag',
      role: 'Production Manager',
      overallScore: 87,
      aiSummary: 'Experienced Production Manager with more than 8 years in seed manufacturing. Strong leadership, production planning, and quality improvement skills.',
      parsedCv: {
        education: 'B.Sc. Agriculture',
        experience: '8 Years',
        skills: ['Leadership', 'Production Planning', 'Lean Manufacturing', 'Quality Control']
      },
      verifiedSkills: [{
        name: 'Leadership',
        score: 90
      }, {
        name: 'Communication',
        score: 84
      }, {
        name: 'Problem Solving',
        score: 88
      }, {
        name: 'Technical Knowledge',
        score: 86
      }],
      interviewRecording: 'assets/interview-demo.mp4'
    }, {
      id: 2,
      name: 'Ahmed Ali',
      role: 'Production Supervisor',
      overallScore: 83,
      aiSummary: 'Production Supervisor experienced in manufacturing operations and continuous improvement.',
      parsedCv: {
        education: 'B.Sc. Engineering',
        experience: '6 Years',
        skills: ['Team Management', 'Safety', 'Operations']
      },
      verifiedSkills: [{
        name: 'Leadership',
        score: 82
      }, {
        name: 'Communication',
        score: 85
      }, {
        name: 'Problem Solving',
        score: 81
      }, {
        name: 'Technical Knowledge',
        score: 84
      }],
      interviewRecording: 'assets/interview-demo.mp4'
    }, {
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
        skills: ['Leadership', 'Operations', 'Planning']
      },
      verifiedSkills: [{
        name: 'Leadership',
        score: 94
      }, {
        name: 'Communication',
        score: 90
      }, {
        name: 'Problem Solving',
        score: 92
      }, {
        name: 'Technical Knowledge',
        score: 89
      }],
      interviewRecording: 'assets/interview-demo.mp4'
    }, {
      id: 4,
      name: 'Omar Nabil',
      role: 'Operations Manager',
      industry: 'Seeds',
      country: 'Egypt',
      experience: '10+ Years',
      overallScore: 89,
      leadership: 88,
      aiSummary: 'Operations manager specialized in seed production.',
      parsedCv: {
        education: 'B.Sc. Engineering',
        experience: '11 Years',
        skills: ['Lean', 'Management', 'Planning']
      },
      verifiedSkills: [{
        name: 'Leadership',
        score: 88
      }, {
        name: 'Communication',
        score: 85
      }, {
        name: 'Problem Solving',
        score: 87
      }, {
        name: 'Technical Knowledge',
        score: 90
      }],
      interviewRecording: 'assets/interview-demo.mp4'
    }, {
      id: 5,
      name: 'Mariam Adel',
      role: 'Production Manager',
      industry: 'Seeds',
      country: 'UAE',
      experience: '5-10 Years',
      overallScore: 84,
      leadership: 86,
      aiSummary: 'Production manager with strong manufacturing background.',
      parsedCv: {
        education: 'B.Sc. Industrial Engineering',
        experience: '7 Years',
        skills: ['Production', 'Quality', 'Leadership']
      },
      verifiedSkills: [{
        name: 'Leadership',
        score: 86
      }, {
        name: 'Communication',
        score: 82
      }, {
        name: 'Problem Solving',
        score: 84
      }, {
        name: 'Technical Knowledge',
        score: 85
      }],
      interviewRecording: 'assets/interview-demo.mp4'
    }];
    this.candidates = [...this.allCandidates];
    this.selectedCandidate = this.candidates[0];
  }
  viewProfile(candidate) {
    this.selectedCandidate = candidate;
  }
  search() {
    const jobTitle = this.filters.find(f => f.key === 'jobTitle')?.value;
    const industry = this.filters.find(f => f.key === 'industry')?.value;
    const country = this.filters.find(f => f.key === 'country')?.value;
    const experience = this.filters.find(f => f.key === 'experience')?.value;
    const overall = this.scoreFilters.find(f => f.key === 'overallScore')?.value ?? 0;
    const leadership = this.scoreFilters.find(f => f.key === 'leadership')?.value ?? 0;
    this.candidates = this.allCandidates.filter(candidate => (!jobTitle || candidate.role === jobTitle) && (!industry || candidate.industry === industry) && (!country || candidate.country === country) && (!experience || candidate.experience === experience) && candidate.overallScore >= (overall ?? 0) && (candidate.leadership ?? 0) >= leadership);
    this.selectedCandidate = this.candidates.length ? this.candidates[0] : null;
  }
  reset() {
    this.filters.forEach(filter => filter.value = '');
    this.scoreFilters.forEach(score => score.value = 0);
    this.candidates = [...this.allCandidates];
    this.selectedCandidate = this.candidates[0];
  }
  static {
    this.ɵfac = function RecruiterPageComponent_Factory(t) {
      return new (t || RecruiterPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecruiterPageComponent,
      selectors: [["app-recruiter-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 52,
      vars: 7,
      consts: [[1, "page"], [1, "page-header"], [1, "panel"], [1, "subtitle"], [1, "filter-grid"], ["class", "field", 4, "ngFor", "ngForOf"], [1, "score-title"], [1, "score-grid"], [1, "actions"], [1, "secondary", 3, "click"], [1, "primary", 3, "click"], [1, "section-header"], ["class", "candidate-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "panel", 4, "ngIf"], [1, "shortlist-info"], [1, "shortlist-box"], [1, "field"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "number", "min", "0", "max", "100", 3, "ngModelChange", "ngModel"], [1, "candidate-card", 3, "click"], [1, "candidate-info"], [1, "avatar"], [1, "score-badge"], [1, "profile-header"], [1, "avatar", "large"], [1, "profile-info"], [1, "overall-score"], [1, "skills"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "summary-card"], [1, "cv-grid"], [1, "cv-item"], [1, "cv-item", "full-width"], ["controls", ""], ["type", "video/mp4", 3, "src"], [1, "skill"], [1, "skill-header"], [1, "progress"], [1, "progress-fill"]],
      template: function RecruiterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Recruiter Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Find pre-vetted candidates, review AI insights and shortlist top talent. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2)(8, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\uD83D\uDD0D Smart Candidate Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Filter candidates by role, industry, experience and verified scores. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RecruiterPageComponent_div_13_Template, 7, 4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Verified Scores ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RecruiterPageComponent_div_17_Template, 4, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8)(19, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecruiterPageComponent_Template_button_click_19_listener() {
            return ctx.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Reset ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecruiterPageComponent_Template_button_click_21_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Search ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2)(24, "div", 11)(25, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u2B50 Shortlisted Candidates");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RecruiterPageComponent_div_29_Template, 13, 7, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RecruiterPageComponent_div_30_Template, 47, 10, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2)(32, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\uD83D\uDCCC Shortlisting");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Keep track of candidates who are ready for interviews or the next stage. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14)(37, "div", 15)(38, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Visible Candidates");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15)(43, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Selected Score");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15)(48, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Ready");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Interview Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scoreFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.candidates.length, " Candidate(s) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.candidates);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedCandidate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.candidates.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.selectedCandidate == null ? null : ctx.selectedCandidate.overallScore) || "-", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: ["body[_ngcontent-%COMP%]{\n    background:#f4f7fb;\n}\n\n.page[_ngcontent-%COMP%]{\n    max-width:1200px;\n    margin:auto;\n    padding:40px;\n    font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;\n    color:#1f2937;\n}\n\n.page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom:8px;\n}\n\n.page[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    color:#64748b;\n    margin-bottom:30px;\n}\n\n\n\n\n.panel[_ngcontent-%COMP%]{\n    background:#fff;\n    border-radius:18px;\n    padding:28px;\n    margin-bottom:28px;\n    box-shadow:0 10px 25px rgba(15,23,42,.08);\n    border:none;\n}\n\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-bottom:8px;\n}\n\n.subtitle[_ngcontent-%COMP%]{\n    color:#64748b;\n    margin-bottom:25px;\n}\n\n\n\n\n.filter-grid[_ngcontent-%COMP%], .score-grid[_ngcontent-%COMP%]{\n    display:grid;\n    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));\n    gap:18px;\n}\n\n.field[_ngcontent-%COMP%]{\n    display:flex;\n    flex-direction:column;\n}\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    margin-bottom:8px;\n    font-size:14px;\n    font-weight:600;\n    color:#475569;\n}\n\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    height:44px;\n    border-radius:10px;\n    border:1px solid #dbe3ec;\n    padding:0 14px;\n    transition:.25s;\n    background:white;\n}\n\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover, .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{\n    border-color:#2563eb;\n}\n\n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{\n    outline:none;\n    border-color:#2563eb;\n    box-shadow:0 0 0 4px rgba(37,99,235,.15);\n}\n\n\n\n\n.actions[_ngcontent-%COMP%]{\n    margin-top:25px;\n    display:flex;\n    justify-content:flex-end;\n    gap:12px;\n}\n\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    height:44px;\n    padding:0 22px;\n    border:none;\n    border-radius:10px;\n    cursor:pointer;\n    font-weight:600;\n    transition:.25s;\n}\n\n.primary[_ngcontent-%COMP%]{\n    background:#2563eb;\n    color:white;\n}\n\n.primary[_ngcontent-%COMP%]:hover{\n    transform:translateY(-2px);\n    box-shadow:0 8px 18px rgba(37,99,235,.35);\n}\n\n.secondary[_ngcontent-%COMP%]{\n    background:#eef2f7;\n}\n\n.secondary[_ngcontent-%COMP%]:hover{\n    background:#dbe3ec;\n}\n\n\n\n\n.candidate-card[_ngcontent-%COMP%]{\n\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n\n    background:white;\n\n    border:1px solid #edf2f7;\n\n    border-radius:14px;\n\n    padding:18px 22px;\n\n    margin-top:18px;\n\n    cursor:pointer;\n\n    transition:.25s;\n\n}\n\n.candidate-card[_ngcontent-%COMP%]:hover{\n\n    transform:translateY(-3px);\n\n    box-shadow:0 12px 24px rgba(0,0,0,.08);\n\n}\n\n.candidate-info[_ngcontent-%COMP%]{\n\n    display:flex;\n\n    align-items:center;\n\n    gap:18px;\n\n}\n\n.avatar[_ngcontent-%COMP%]{\n\n    width:55px;\n\n    height:55px;\n\n    border-radius:50%;\n\n    background:#2563eb;\n\n    color:white;\n\n    display:flex;\n\n    justify-content:center;\n\n    align-items:center;\n\n    font-size:22px;\n\n    font-weight:bold;\n\n}\n\n.score-badge[_ngcontent-%COMP%]{\n\n    width:70px;\n\n    height:70px;\n\n    border-radius:50%;\n\n    background:linear-gradient(135deg,#2563eb,#3b82f6);\n\n    display:flex;\n\n    justify-content:center;\n\n    align-items:center;\n\n    color:white;\n\n    font-size:24px;\n\n    font-weight:bold;\n\n}\n\n\n\n\n.profile-header[_ngcontent-%COMP%]{\n\n    display:flex;\n\n    align-items:center;\n\n    gap:20px;\n\n    margin-bottom:20px;\n\n}\n\n.profile-header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{\n\n    width:75px;\n\n    height:75px;\n\n    font-size:30px;\n\n}\n\n.overall-score[_ngcontent-%COMP%]{\n\n    display:inline-block;\n\n    margin:15px 0;\n\n    background:#e0f2fe;\n\n    color:#0369a1;\n\n    padding:10px 18px;\n\n    border-radius:30px;\n\n    font-weight:600;\n\n}\n\n\n\n\n.skills[_ngcontent-%COMP%]{\n\n    display:grid;\n\n    gap:18px;\n\n}\n\n.skill[_ngcontent-%COMP%]{\n\n    background:#f8fafc;\n\n    border-radius:12px;\n\n    padding:15px;\n\n}\n\n.skill-header[_ngcontent-%COMP%]{\n\n    display:flex;\n\n    justify-content:space-between;\n\n    margin-bottom:10px;\n\n    font-weight:600;\n\n}\n\n.progress[_ngcontent-%COMP%]{\n\n    width:100%;\n\n    height:10px;\n\n    border-radius:20px;\n\n    background:#e2e8f0;\n\n    overflow:hidden;\n\n}\n\n.progress-fill[_ngcontent-%COMP%]{\n\n    height:100%;\n\n    background:linear-gradient(90deg,#2563eb,#60a5fa);\n\n}\n\n\n\n\nvideo[_ngcontent-%COMP%]{\n\n    width:100%;\n\n    margin-top:18px;\n\n    border-radius:14px;\n\n    overflow:hidden;\n\n}\n\nhr[_ngcontent-%COMP%]{\n\n    border:none;\n\n    height:1px;\n\n    background:#edf2f7;\n\n    margin:28px 0;\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjcnVpdGVyL3JlY3J1aXRlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixxREFBcUQ7SUFDckQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQSxZQUFZOztBQUVaOztJQUVJLFlBQVk7SUFDWix3REFBd0Q7SUFDeEQsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsd0NBQXdDO0FBQzVDOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsb0JBQW9COztBQUVwQjs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2Qjs7SUFFN0IsZ0JBQWdCOztJQUVoQix3QkFBd0I7O0lBRXhCLGtCQUFrQjs7SUFFbEIsaUJBQWlCOztJQUVqQixlQUFlOztJQUVmLGNBQWM7O0lBRWQsZUFBZTs7QUFFbkI7O0FBRUE7O0lBRUksMEJBQTBCOztJQUUxQixzQ0FBc0M7O0FBRTFDOztBQUVBOztJQUVJLFlBQVk7O0lBRVosa0JBQWtCOztJQUVsQixRQUFROztBQUVaOztBQUVBOztJQUVJLFVBQVU7O0lBRVYsV0FBVzs7SUFFWCxpQkFBaUI7O0lBRWpCLGtCQUFrQjs7SUFFbEIsV0FBVzs7SUFFWCxZQUFZOztJQUVaLHNCQUFzQjs7SUFFdEIsa0JBQWtCOztJQUVsQixjQUFjOztJQUVkLGdCQUFnQjs7QUFFcEI7O0FBRUE7O0lBRUksVUFBVTs7SUFFVixXQUFXOztJQUVYLGlCQUFpQjs7SUFFakIsa0RBQWtEOztJQUVsRCxZQUFZOztJQUVaLHNCQUFzQjs7SUFFdEIsa0JBQWtCOztJQUVsQixXQUFXOztJQUVYLGNBQWM7O0lBRWQsZ0JBQWdCOztBQUVwQjs7QUFFQSxZQUFZOztBQUVaOztJQUVJLFlBQVk7O0lBRVosa0JBQWtCOztJQUVsQixRQUFROztJQUVSLGtCQUFrQjs7QUFFdEI7O0FBRUE7O0lBRUksVUFBVTs7SUFFVixXQUFXOztJQUVYLGNBQWM7O0FBRWxCOztBQUVBOztJQUVJLG9CQUFvQjs7SUFFcEIsYUFBYTs7SUFFYixrQkFBa0I7O0lBRWxCLGFBQWE7O0lBRWIsaUJBQWlCOztJQUVqQixrQkFBa0I7O0lBRWxCLGVBQWU7O0FBRW5COztBQUVBLFdBQVc7O0FBRVg7O0lBRUksWUFBWTs7SUFFWixRQUFROztBQUVaOztBQUVBOztJQUVJLGtCQUFrQjs7SUFFbEIsa0JBQWtCOztJQUVsQixZQUFZOztBQUVoQjs7QUFFQTs7SUFFSSxZQUFZOztJQUVaLDZCQUE2Qjs7SUFFN0Isa0JBQWtCOztJQUVsQixlQUFlOztBQUVuQjs7QUFFQTs7SUFFSSxVQUFVOztJQUVWLFdBQVc7O0lBRVgsa0JBQWtCOztJQUVsQixrQkFBa0I7O0lBRWxCLGVBQWU7O0FBRW5COztBQUVBOztJQUVJLFdBQVc7O0lBRVgsaURBQWlEOztBQUVyRDs7QUFFQSxVQUFVOztBQUVWOztJQUVJLFVBQVU7O0lBRVYsZUFBZTs7SUFFZixrQkFBa0I7O0lBRWxCLGVBQWU7O0FBRW5COztBQUVBOztJQUVJLFdBQVc7O0lBRVgsVUFBVTs7SUFFVixrQkFBa0I7O0lBRWxCLGFBQWE7O0FBRWpCIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGJhY2tncm91bmQ6I2Y0ZjdmYjtcclxufVxyXG5cclxuLnBhZ2V7XHJcbiAgICBtYXgtd2lkdGg6MTIwMHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwYWRkaW5nOjQwcHg7XHJcbiAgICBmb250LWZhbWlseTpTZWdvZSBVSSxUYWhvbWEsR2VuZXZhLFZlcmRhbmEsc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiMxZjI5Mzc7XHJcbn1cclxuXHJcbi5wYWdlIGgye1xyXG4gICAgbWFyZ2luLWJvdHRvbTo4cHg7XHJcbn1cclxuXHJcbi5wYWdlPnB7XHJcbiAgICBjb2xvcjojNjQ3NDhiO1xyXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG59XHJcblxyXG4vKiBQYW5lbHMgKi9cclxuXHJcbi5wYW5lbHtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6MThweDtcclxuICAgIHBhZGRpbmc6MjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206MjhweDtcclxuICAgIGJveC1zaGFkb3c6MCAxMHB4IDI1cHggcmdiYSgxNSwyMyw0MiwuMDgpO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbi5wYW5lbCBoM3tcclxuICAgIG1hcmdpbi1ib3R0b206OHB4O1xyXG59XHJcblxyXG4uc3VidGl0bGV7XHJcbiAgICBjb2xvcjojNjQ3NDhiO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyNXB4O1xyXG59XHJcblxyXG4vKiBGaWx0ZXJzICovXHJcblxyXG4uZmlsdGVyLWdyaWQsXHJcbi5zY29yZS1ncmlke1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMjIwcHgsMWZyKSk7XHJcbiAgICBnYXA6MThweDtcclxufVxyXG5cclxuLmZpZWxke1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG59XHJcblxyXG4uZmllbGQgbGFiZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOjhweDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgY29sb3I6IzQ3NTU2OTtcclxufVxyXG5cclxuLmZpZWxkIHNlbGVjdCxcclxuLmZpZWxkIGlucHV0e1xyXG4gICAgaGVpZ2h0OjQ0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNkYmUzZWM7XHJcbiAgICBwYWRkaW5nOjAgMTRweDtcclxuICAgIHRyYW5zaXRpb246LjI1cztcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbn1cclxuXHJcbi5maWVsZCBzZWxlY3Q6aG92ZXIsXHJcbi5maWVsZCBpbnB1dDpob3ZlcntcclxuICAgIGJvcmRlci1jb2xvcjojMjU2M2ViO1xyXG59XHJcblxyXG4uZmllbGQgc2VsZWN0OmZvY3VzLFxyXG4uZmllbGQgaW5wdXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IzI1NjNlYjtcclxuICAgIGJveC1zaGFkb3c6MCAwIDAgNHB4IHJnYmEoMzcsOTksMjM1LC4xNSk7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbnMgKi9cclxuXHJcbi5hY3Rpb25ze1xyXG4gICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xyXG4gICAgZ2FwOjEycHg7XHJcbn1cclxuXHJcbi5hY3Rpb25zIGJ1dHRvbntcclxuICAgIGhlaWdodDo0NHB4O1xyXG4gICAgcGFkZGluZzowIDIycHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgdHJhbnNpdGlvbjouMjVzO1xyXG59XHJcblxyXG4ucHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQ6IzI1NjNlYjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4ucHJpbWFyeTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzowIDhweCAxOHB4IHJnYmEoMzcsOTksMjM1LC4zNSk7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnl7XHJcbiAgICBiYWNrZ3JvdW5kOiNlZWYyZjc7XHJcbn1cclxuXHJcbi5zZWNvbmRhcnk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNkYmUzZWM7XHJcbn1cclxuXHJcbi8qIENhbmRpZGF0ZSBDYXJkcyAqL1xyXG5cclxuLmNhbmRpZGF0ZS1jYXJke1xyXG5cclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcblxyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZWRmMmY3O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6MTRweDtcclxuXHJcbiAgICBwYWRkaW5nOjE4cHggMjJweDtcclxuXHJcbiAgICBtYXJnaW4tdG9wOjE4cHg7XHJcblxyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcblxyXG4gICAgdHJhbnNpdGlvbjouMjVzO1xyXG5cclxufVxyXG5cclxuLmNhbmRpZGF0ZS1jYXJkOmhvdmVye1xyXG5cclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0zcHgpO1xyXG5cclxuICAgIGJveC1zaGFkb3c6MCAxMnB4IDI0cHggcmdiYSgwLDAsMCwuMDgpO1xyXG5cclxufVxyXG5cclxuLmNhbmRpZGF0ZS1pbmZve1xyXG5cclxuICAgIGRpc3BsYXk6ZmxleDtcclxuXHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcblxyXG4gICAgZ2FwOjE4cHg7XHJcblxyXG59XHJcblxyXG4uYXZhdGFye1xyXG5cclxuICAgIHdpZHRoOjU1cHg7XHJcblxyXG4gICAgaGVpZ2h0OjU1cHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcblxyXG4gICAgYmFja2dyb3VuZDojMjU2M2ViO1xyXG5cclxuICAgIGNvbG9yOndoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6ZmxleDtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHJcbiAgICBmb250LXNpemU6MjJweDtcclxuXHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG5cclxufVxyXG5cclxuLnNjb3JlLWJhZGdle1xyXG5cclxuICAgIHdpZHRoOjcwcHg7XHJcblxyXG4gICAgaGVpZ2h0OjcwcHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcblxyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNTYzZWIsIzNiODJmNik7XHJcblxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cclxuICAgIGNvbG9yOndoaXRlO1xyXG5cclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG5cclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblxyXG59XHJcblxyXG4vKiBQcm9maWxlICovXHJcblxyXG4ucHJvZmlsZS1oZWFkZXJ7XHJcblxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHJcbiAgICBnYXA6MjBweDtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcblxyXG59XHJcblxyXG4ucHJvZmlsZS1oZWFkZXIgLmF2YXRhcntcclxuXHJcbiAgICB3aWR0aDo3NXB4O1xyXG5cclxuICAgIGhlaWdodDo3NXB4O1xyXG5cclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG5cclxufVxyXG5cclxuLm92ZXJhbGwtc2NvcmV7XHJcblxyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgbWFyZ2luOjE1cHggMDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiNlMGYyZmU7XHJcblxyXG4gICAgY29sb3I6IzAzNjlhMTtcclxuXHJcbiAgICBwYWRkaW5nOjEwcHggMThweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOjMwcHg7XHJcblxyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG5cclxufVxyXG5cclxuLyogU2tpbGxzICovXHJcblxyXG4uc2tpbGxze1xyXG5cclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuXHJcbiAgICBnYXA6MThweDtcclxuXHJcbn1cclxuXHJcbi5za2lsbHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiNmOGZhZmM7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czoxMnB4O1xyXG5cclxuICAgIHBhZGRpbmc6MTVweDtcclxuXHJcbn1cclxuXHJcbi5za2lsbC1oZWFkZXJ7XHJcblxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuXHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcblxyXG59XHJcblxyXG4ucHJvZ3Jlc3N7XHJcblxyXG4gICAgd2lkdGg6MTAwJTtcclxuXHJcbiAgICBoZWlnaHQ6MTBweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDojZTJlOGYwO1xyXG5cclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuXHJcbn1cclxuXHJcbi5wcm9ncmVzcy1maWxse1xyXG5cclxuICAgIGhlaWdodDoxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCMyNTYzZWIsIzYwYTVmYSk7XHJcblxyXG59XHJcblxyXG4vKiBWaWRlbyAqL1xyXG5cclxudmlkZW97XHJcblxyXG4gICAgd2lkdGg6MTAwJTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOjE4cHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czoxNHB4O1xyXG5cclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuXHJcbn1cclxuXHJcbmhye1xyXG5cclxuICAgIGJvcmRlcjpub25lO1xyXG5cclxuICAgIGhlaWdodDoxcHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDojZWRmMmY3O1xyXG5cclxuICAgIG1hcmdpbjoyOHB4IDA7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6167:
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageComponent: () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class HomePageComponent {
  static {
    this.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 40,
      vars: 0,
      consts: [[1, "hero"], [1, "hero-copy"], [1, "eyebrow"], [1, "subtitle"], [1, "stats"], [1, "stat"], [1, "cards", "cards-actors"], ["routerLink", "/candidate", 1, "card", "actor"], ["routerLink", "/recruiter", 1, "card", "actor"], ["routerLink", "/company", 1, "card", "actor"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Intelligent hiring operations");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hire smarter with a connected talent platform.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bring candidates, recruiters, companies, interviews, and assessments into one streamlined workflow.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "120+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Active roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5)(15, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "94%");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Match accuracy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5)(20, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "24/7");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Workflow visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6)(25, "a", 7)(26, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Candidate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Upload CVs, extract skills and take assessments.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8)(31, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Recruiter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Search profiles, review summaries and shortlist talent.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9)(36, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Corporate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Manage assessments, track performance and reporting.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".hero[_ngcontent-%COMP%] { max-width: 1200px; margin: 0 auto; }\n    .hero-copy[_ngcontent-%COMP%] { margin-bottom: 1.5rem; }\n    .eyebrow[_ngcontent-%COMP%] { text-transform: uppercase; letter-spacing: 0.2em; font-size: 0.8rem; color: #3b82f6; font-weight: 700; margin-bottom: 0.4rem; }\n    h1[_ngcontent-%COMP%] { font-size: 2.35rem; margin: 0 0 0.5rem; line-height: 1.2; }\n    .subtitle[_ngcontent-%COMP%] { font-size: 1.02rem; color: #475569; max-width: 760px; }\n    .stats[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin: 1.5rem 0 2rem; }\n    .stat[_ngcontent-%COMP%] { padding: 1rem 1.1rem; border-radius: 14px; background: white; box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06); }\n    .stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; font-size: 1.2rem; color: #0f172a; }\n    .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: #64748b; font-size: 0.95rem; }\n    .cards[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }\n    .cards-actors[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); align-items: stretch; }\n    .card[_ngcontent-%COMP%] { display: block; padding: 1.2rem; border: 1px solid #e2e8f0; border-radius: 16px; text-decoration: none; color: inherit; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04); transition: transform 0.18s ease, box-shadow 0.18s ease; }\n    .card.actor[_ngcontent-%COMP%] { padding: 2rem; min-height: 180px; display:flex; flex-direction:column; justify-content:center; text-align:center; }\n    .card[_ngcontent-%COMP%]:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(15, 23, 42, 0.1); }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxpQkFBaUIsRUFBRSxjQUFjLEVBQUU7SUFDdkMsYUFBYSxxQkFBcUIsRUFBRTtJQUNwQyxXQUFXLHlCQUF5QixFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRTtJQUN6SSxLQUFLLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFO0lBQy9ELFlBQVksa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFO0lBQ2xFLFNBQVMsYUFBYSxFQUFFLDJEQUEyRCxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRTtJQUN2SCxRQUFRLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLDZDQUE2QyxFQUFFO0lBQ3JILGVBQWUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRTtJQUNsRSxhQUFhLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtJQUNqRCxTQUFTLGFBQWEsRUFBRSwyREFBMkQsRUFBRSxTQUFTLEVBQUU7SUFDaEcsZ0JBQWdCLHFDQUFxQyxFQUFFLG9CQUFvQixFQUFFO0lBQzdFLFFBQVEsY0FBYyxFQUFFLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxjQUFjLEVBQUUsNkRBQTZELEVBQUUsNkNBQTZDLEVBQUUsdURBQXVELEVBQUU7SUFDdlMsY0FBYyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFO0lBQ2hJLGNBQWMsMkJBQTJCLEVBQUUsNkNBQTZDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyB7IG1heC13aWR0aDogMTIwMHB4OyBtYXJnaW46IDAgYXV0bzsgfVxuICAgIC5oZXJvLWNvcHkgeyBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cbiAgICAuZXllYnJvdyB7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjJlbTsgZm9udC1zaXplOiAwLjhyZW07IGNvbG9yOiAjM2I4MmY2OyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tYm90dG9tOiAwLjRyZW07IH1cbiAgICBoMSB7IGZvbnQtc2l6ZTogMi4zNXJlbTsgbWFyZ2luOiAwIDAgMC41cmVtOyBsaW5lLWhlaWdodDogMS4yOyB9XG4gICAgLnN1YnRpdGxlIHsgZm9udC1zaXplOiAxLjAycmVtOyBjb2xvcjogIzQ3NTU2OTsgbWF4LXdpZHRoOiA3NjBweDsgfVxuICAgIC5zdGF0cyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTgwcHgsIDFmcikpOyBnYXA6IDFyZW07IG1hcmdpbjogMS41cmVtIDAgMnJlbTsgfVxuICAgIC5zdGF0IHsgcGFkZGluZzogMXJlbSAxLjFyZW07IGJvcmRlci1yYWRpdXM6IDE0cHg7IGJhY2tncm91bmQ6IHdoaXRlOyBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7IH1cbiAgICAuc3RhdCBzdHJvbmcgeyBkaXNwbGF5OiBibG9jazsgZm9udC1zaXplOiAxLjJyZW07IGNvbG9yOiAjMGYxNzJhOyB9XG4gICAgLnN0YXQgc3BhbiB7IGNvbG9yOiAjNjQ3NDhiOyBmb250LXNpemU6IDAuOTVyZW07IH1cbiAgICAuY2FyZHMgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTsgZ2FwOiAxcmVtOyB9XG4gICAgLmNhcmRzLWFjdG9ycyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7IGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLmNhcmQgeyBkaXNwbGF5OiBibG9jazsgcGFkZGluZzogMS4ycmVtOyBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiAxNnB4OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiBpbmhlcml0OyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmIDAlLCAjZjhmYWZjIDEwMCUpOyBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNCk7IHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE4cyBlYXNlLCBib3gtc2hhZG93IDAuMThzIGVhc2U7IH1cbiAgICAuY2FyZC5hY3RvciB7IHBhZGRpbmc6IDJyZW07IG1pbi1oZWlnaHQ6IDE4MHB4OyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cbiAgICAuY2FyZDpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEpOyB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.routes */ 2181);




(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_1__.routes)]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map