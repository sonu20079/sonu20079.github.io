function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
    // import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';


    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./core/header/header.component */
    "./src/app/core/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _employee_employee_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./employee/employee.module */
    "./src/app/employee/employee.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _employee_employee_module__WEBPACK_IMPORTED_MODULE_9__["EmployeeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _employee_employee_module__WEBPACK_IMPORTED_MODULE_9__["EmployeeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _employee_employee_module__WEBPACK_IMPORTED_MODULE_9__["EmployeeModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/core/header/header.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/header/header.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/header/header.component.ts ***!
    \*************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCoreHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //Angular Imports


    function HeaderComponent_span_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_span_4_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.gotToEmployees();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Employees");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_span_5_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.sharedService.addEmployeeClicked = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+ Add Member");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(sharedService, router) {
        _classCallCheck(this, HeaderComponent);

        this.sharedService = sharedService;
        this.router = router;
        this.isHomeUrl = true;
      } //Checking for current route


      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this.isHomeUrl = _this.router.url.includes('employees');
            }
          });
        } // Redirect to employees.

      }, {
        key: "gotToEmployees",
        value: function gotToEmployees() {
          this.router.navigate(['/']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 6,
      vars: 2,
      consts: [[1, "main-header"], [1, "navigation-buttons"], ["class", "header-button go-to-employees", 3, "click", 4, "ngIf"], ["class", "header-button create-new-member", 3, "click", 4, "ngIf"], [1, "header-button", "go-to-employees", 3, "click"], [1, "header-button", "create-new-member", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employee Management System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_span_4_Template, 2, 0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_span_5_Template, 2, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isHomeUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHomeUrl);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".main-header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #fff;\n  padding: 0.5rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.navigation-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.header-button[_ngcontent-%COMP%] {\n  width: auto;\n  height: 32px;\n  position: relative;\n  float: right;\n  text-align: center;\n  font-size: 14px;\n  font-weight: normal;\n  color: #fff;\n  padding: 6px 15px;\n  border-radius: 2px;\n  background-color: #6c00ea;\n  cursor: pointer;\n}\n\n.create-new-member[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VuZ2luZWVyYWktc29udS9lbmdpbmVlci5haS9lbXBsb3llZS1tYW5hZ2VtZW50L3NyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZW5naW5lZXJhaS1zb251L2VuZ2luZWVyLmFpL2VtcGxveWVlLW1hbmFnZW1lbnQvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL2FwcC1jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQ05NO0VET04sb0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRURGOztBRkdFO0VBQ0UsYUFBQTtBRUFKOztBRkdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdDeEJNO0VEeUJOLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkM1QlU7RUQ2QlYsZUFBQTtBRUFGOztBRkdBO0VBQ0UsaUJBQUE7QUVBRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9hcHAtY29sb3JzLnNjc3MnO1xuXG4ubWFpbi1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiAgLm5hdmlnYXRpb24tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4uaGVhZGVyLWJ1dHRvbiB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgcGFkZGluZzogNnB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmx1ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3JlYXRlLW5ldy1tZW1iZXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iLCIkZGFyay1ibHVlOiAjNmMwMGVhO1xuJHdoaXRlOiAjZmZmO1xuJHRoQ29sb3I6ICM2YzdhZTA7XG4kYmFzZUNvbG9yOiAjMzk4QjkzO1xuIiwiLm1haW4taGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2aWdhdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1idXR0b24ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA2cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmMwMGVhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jcmVhdGUtbmV3LW1lbWJlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/add-employee/add-employee.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/employee/add-employee/add-employee.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AddEmployeeComponent */

  /***/
  function srcAppEmployeeAddEmployeeAddEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function () {
      return AddEmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/employee.service */
    "./src/app/shared/services/employee.service.ts");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../employee-form/employee-form.component */
    "./src/app/employee/employee-form/employee-form.component.ts"); //Angular imports


    var AddEmployeeComponent = /*#__PURE__*/function () {
      function AddEmployeeComponent(employeeService, notificatioService, sharedService) {
        _classCallCheck(this, AddEmployeeComponent);

        this.employeeService = employeeService;
        this.notificatioService = notificatioService;
        this.sharedService = sharedService;
      }

      _createClass(AddEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit(employee) {
          employee.id = Date.now().toString();
          this.employeeService.saveEmployee(employee);
          this.sharedService.addEmployeeClicked = false;
          this.notificatioService.showSuccess("Employee added successfully.", 'Add Employee');
        }
      }]);

      return AddEmployeeComponent;
    }();

    AddEmployeeComponent.ɵfac = function AddEmployeeComponent_Factory(t) {
      return new (t || AddEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]));
    };

    AddEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddEmployeeComponent,
      selectors: [["app-add-employee"]],
      decls: 2,
      vars: 0,
      consts: [[1, "backdrop", 3, "click"], [3, "formEmit"]],
      template: function AddEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEmployeeComponent_Template_div_click_0_listener() {
            return ctx.sharedService.addEmployeeClicked = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-employee-form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formEmit", function AddEmployeeComponent_Template_app_employee_form_formEmit_1_listener($event) {
            return ctx.submit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-employee',
          templateUrl: './add-employee.component.html',
          styleUrls: ['./add-employee.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
        }, {
          type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/edit-employee/edit-employee.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/employee/edit-employee/edit-employee.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EditEmployeeComponent */

  /***/
  function srcAppEmployeeEditEmployeeEditEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function () {
      return EditEmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/employee.service */
    "./src/app/shared/services/employee.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../employee-form/employee-form.component */
    "./src/app/employee/employee-form/employee-form.component.ts"); // Angular Imports


    var EditEmployeeComponent = /*#__PURE__*/function () {
      function EditEmployeeComponent(employeeService, sharedService, notificatioService) {
        _classCallCheck(this, EditEmployeeComponent);

        this.employeeService = employeeService;
        this.sharedService = sharedService;
        this.notificatioService = notificatioService;
      }

      _createClass(EditEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Updating employee and close edit modal.

      }, {
        key: "submit",
        value: function submit(employee) {
          employee.id = this.sharedService.editEmployeeClicked.employeeId;
          this.employeeService.updateEmployee(employee);
          this.closeModal();
          this.notificatioService.showSuccess("Employee Edit successfully.", 'Edit Employee');
        } //Close edit modal

      }, {
        key: "closeModal",
        value: function closeModal() {
          this.sharedService.editEmployeeClicked = {
            show: false,
            employeeId: ''
          };
        }
      }]);

      return EditEmployeeComponent;
    }();

    EditEmployeeComponent.ɵfac = function EditEmployeeComponent_Factory(t) {
      return new (t || EditEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]));
    };

    EditEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditEmployeeComponent,
      selectors: [["app-edit-employee"]],
      inputs: {
        employeeId: "employeeId"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "backdrop", 3, "click"], [3, "formEmit"]],
      template: function EditEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditEmployeeComponent_Template_div_click_0_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-employee-form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formEmit", function EditEmployeeComponent_Template_app_employee_form_formEmit_1_listener($event) {
            return ctx.submit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VkaXQtZW1wbG95ZWUvZWRpdC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-employee',
          templateUrl: './edit-employee.component.html',
          styleUrls: ['./edit-employee.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
        }, {
          type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
        }];
      }, {
        employeeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/employee/employee-detail/employee-detail.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/employee/employee-detail/employee-detail.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EmployeeDetailComponent */

  /***/
  function srcAppEmployeeEmployeeDetailEmployeeDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function () {
      return EmployeeDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/employee.service */
    "./src/app/shared/services/employee.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //Angular imports


    function EmployeeDetailComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Id: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Company Name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact Number: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Designation: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.employee.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.email, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.company_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.contact_no, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.designation, "");
      }
    }

    function EmployeeDetailComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Result not found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EmployeeDetailComponent = /*#__PURE__*/function () {
      function EmployeeDetailComponent(activatedRoute, employeeService) {
        _classCallCheck(this, EmployeeDetailComponent);

        this.activatedRoute = activatedRoute;
        this.employeeService = employeeService;
      } //Getting employee id from route and fetching record for that ID.


      _createClass(EmployeeDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.activatedRoute.params.subscribe(function (parmas) {
            var employeeId = parmas['id'];

            _this2.employeeService.employees();

            _this2.employee = _this2.employeeService.getEmployee(employeeId);
          });
        }
      }]);

      return EmployeeDetailComponent;
    }();

    EmployeeDetailComponent.ɵfac = function EmployeeDetailComponent_Factory(t) {
      return new (t || EmployeeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]));
    };

    EmployeeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeDetailComponent,
      selectors: [["app-employee-detail"]],
      decls: 4,
      vars: 2,
      consts: [[1, "employee-detail-container"], ["class", "employee-details", 4, "ngIf", "ngIfElse"], ["noResult", ""], [1, "employee-details"], ["id", "employee-image", 1, "employee-image"], ["alt", "employee.name", 3, "src"], ["id", "employee-info", 1, "employee-info"], [1, "no-result"]],
      template: function EmployeeDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeDetailComponent_div_1_Template, 28, 7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeDetailComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employee)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".employee-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 12rem;\n}\n\n.employee-detail-container[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n}\n\n.employee-image[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n.employee-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 230px;\n  width: 230px;\n  border: 1px solid grey;\n}\n\n.employee-info[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.employee-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VuZ2luZWVyYWktc29udS9lbmdpbmVlci5haS9lbXBsb3llZS1tYW5hZ2VtZW50L3NyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGV0YWlsL2VtcGxveWVlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGV0YWlsL2VtcGxveWVlLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUU7RUFDRSxnQkFBQTtBQ0RKOztBRElFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDREo7O0FER0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNETjs7QURLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0U7RUFDRyxrQkFBQTtBQ0ZMIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZGV0YWlsL2VtcGxveWVlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9hcHAtY29sb3JzLnNjc3MnO1xuICBcbiAgLmVtcGxveWVlLWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgfVxuICBcbiAgLmVtcGxveWVlLWRldGFpbC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDdyZW07XG4gIH1cbiAgXG4gIC5lbXBsb3llZS1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBpbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgaGVpZ2h0OiAyMzBweDtcbiAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgfVxuICB9XG4gIFxuICAuZW1wbG95ZWUtaW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cblxuICAuZW1wbG95ZWUtaW5mbyBkaXYge1xuICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH0iLCIuZW1wbG95ZWUtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDEycmVtO1xufVxuXG4uZW1wbG95ZWUtZGV0YWlsLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDdyZW07XG59XG5cbi5lbXBsb3llZS1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wbG95ZWUtaW1hZ2UgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMjMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbi5lbXBsb3llZS1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmVtcGxveWVlLWluZm8gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employee-detail',
          templateUrl: './employee-detail.component.html',
          styleUrls: ['./employee-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/employee-form/employee-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/employee/employee-form/employee-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EmployeeFormComponent */

  /***/
  function srcAppEmployeeEmployeeFormEmployeeFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeFormComponent", function () {
      return EmployeeFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_dataTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/dataTypes */
    "./src/app/shared/dataTypes.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/employee.service */
    "./src/app/shared/services/employee.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //Angular Imports


    function EmployeeFormComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeFormComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeFormComponent_div_9_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getFormControl("name").errors.required);
      }
    }

    function EmployeeFormComponent_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeFormComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeFormComponent_div_14_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getFormControl("company_name").errors.required);
      }
    }

    function EmployeeFormComponent_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeFormComponent_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email should be in correct format");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeFormComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeFormComponent_div_19_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeFormComponent_div_19_div_2_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getFormControl("email").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.getFormControl("email").errors.pattern);
      }
    }

    function EmployeeFormComponent_div_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeFormComponent_div_24_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact Number should be in correct format");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeFormComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeFormComponent_div_24_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeFormComponent_div_24_div_2_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getFormControl("contact_no").errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getFormControl("contact_no").errors.pattern);
      }
    }

    function EmployeeFormComponent_ul_33_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeFormComponent_ul_33_li_1_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var avatar_r14 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.selectAvatar(avatar_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var avatar_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", avatar_r14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function EmployeeFormComponent_ul_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeFormComponent_ul_33_li_1_Template, 2, 1, "li", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.avatars);
      }
    }

    function EmployeeFormComponent_option_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dsgn_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dsgn_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dsgn_r17);
      }
    }

    function EmployeeFormComponent_div_40_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Designation is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeFormComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeFormComponent_div_40_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getFormControl("designation").errors.required);
      }
    }

    var EmployeeFormComponent = /*#__PURE__*/function () {
      function EmployeeFormComponent(sharedService, formBuilder, employeeService) {
        _classCallCheck(this, EmployeeFormComponent);

        this.sharedService = sharedService;
        this.formBuilder = formBuilder;
        this.employeeService = employeeService;
        this.avatars = _shared_dataTypes__WEBPACK_IMPORTED_MODULE_2__["AVATARS"];
        this.selectedAvatar = _shared_dataTypes__WEBPACK_IMPORTED_MODULE_2__["AVATARS"][0];
        this.showAvatarDropdown = false;
        this.formEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      } //Initialized form for add and edit both cases


      _createClass(EmployeeFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeForm();
        } //Prepare form for add and edit and in case of edit set values in form.

      }, {
        key: "initializeForm",
        value: function initializeForm() {
          this.employeeForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            contact_no: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[0-9]{10}")]],
            designation: [_shared_dataTypes__WEBPACK_IMPORTED_MODULE_2__["Designation"].SoftwareDeveloper],
            avatar: [null]
          });
          var employeeId = this.sharedService.editEmployeeClicked.employeeId;

          if (employeeId) {
            var employee = this.employeeService.getEmployee(employeeId);
            this.selectedAvatar = employee.avatar;
            this.employeeForm.patchValue(employee);
          }
        } // get designations

      }, {
        key: "getFormControl",
        // getting form control on the basis of key
        value: function getFormControl(key) {
          return this.employeeForm.get(key);
        } //Select avatar

      }, {
        key: "selectAvatar",
        value: function selectAvatar(avatar) {
          this.showAvatarDropdown = false;
          this.selectedAvatar = avatar;
        } //Checking if click on avatar select box header, then shows dropdown.

      }, {
        key: "onClick",
        value: function onClick(event) {
          var element = event.target;

          if (element.classList.contains('avatarRow')) {
            this.showAvatarDropdown = !this.showAvatarDropdown;
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          console.log(this.employeeForm);
          this.formEmit.emit(this.employeeForm.value);
        } //cancel dialog

      }, {
        key: "cancel",
        value: function cancel() {
          if (this.sharedService.editEmployeeClicked.employeeId) {
            this.sharedService.editEmployeeClicked = {
              show: false,
              employeeId: ''
            };
          } else {
            this.sharedService.addEmployeeClicked = false;
          }
        }
      }, {
        key: "designations",
        get: function get() {
          return _shared_dataTypes__WEBPACK_IMPORTED_MODULE_2__["DESIGNATIONS"];
        }
      }]);

      return EmployeeFormComponent;
    }();

    EmployeeFormComponent.ɵfac = function EmployeeFormComponent_Factory(t) {
      return new (t || EmployeeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]));
    };

    EmployeeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeFormComponent,
      selectors: [["app-employee-form"]],
      hostBindings: function EmployeeFormComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeFormComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        formEmit: "formEmit"
      },
      decls: 46,
      vars: 12,
      consts: [[1, "employee-modal"], [1, "employee-modal-title"], [1, "employee-form"], [3, "formGroup"], [1, "input-block"], ["for", "name"], ["formControlName", "name", "type", "text", "id", "name"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "company_name"], ["formControlName", "company_name", "type", "text", "id", "company-name"], ["for", "email"], ["formControlName", "email", "type", "email", "id", "email"], ["for", "contact_no"], ["formControlName", "contact_no", "type", "text", "id", "contact_no"], [1, "input-block", "flexRow"], [1, "halfWidth", "avatarRowGroup"], [1, "avatarRow"], [3, "src"], ["type", "text", "formControlName", "avatar", 2, "display", "none", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "spacer-h"], [1, "halfWidth", "designationRowGroup"], ["for", "designation"], ["formControlName", "designation", "id", "designation"], [3, "value", 4, "ngFor", "ngForOf"], [1, "employee-modal-actions"], [1, "employee-modal-action", "employee-modal-action-submit", 3, "disabled", "click"], ["type", "button", 1, "employee-modal-action", "employee-modal-action-cancel", 3, "click"], [1, "invalid-feedback"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "value"]],
      template: function EmployeeFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmployeeFormComponent_div_9_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Company Name *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmployeeFormComponent_div_14_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "E-Mail *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EmployeeFormComponent_div_19_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact Number *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EmployeeFormComponent_div_24_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Avatar *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeeFormComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.selectedAvatar = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EmployeeFormComponent_ul_33_Template, 2, 1, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Designation *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, EmployeeFormComponent_option_39_Template, 2, 2, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, EmployeeFormComponent_div_40_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeFormComponent_Template_button_click_42_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeFormComponent_Template_button_click_44_listener() {
            return ctx.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx.sharedService.editEmployeeClicked == null ? null : ctx.sharedService.editEmployeeClicked.employeeId) ? "Edit " : "Add ", " Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.employeeForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getFormControl("name").valid && ctx.getFormControl("name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getFormControl("company_name").valid && ctx.getFormControl("company_name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getFormControl("email").valid && ctx.getFormControl("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getFormControl("contact_no").valid && ctx.getFormControl("contact_no").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAvatarDropdown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.designations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getFormControl("designation").valid && ctx.getFormControl("designation").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.employeeForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".employee-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 200;\n  top: 5%;\n  left: 30%;\n  width: 40%;\n  background: #fff;\n  box-shadow: 0 10px 80px rgba(0, 0, 0, 0.05);\n  border-radius: 20px;\n  padding: 35px;\n}\n\n.employee-modal-title[_ngcontent-%COMP%] {\n  padding: 0 0 12px;\n  font-size: 24px;\n  font-weight: 500;\n  text-align: left;\n  color: #212121;\n}\n\n.employee-form[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow: auto;\n}\n\n.employee-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #333;\n  margin-bottom: 5px;\n}\n\n.input-block[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.input-block.flexRow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.input-block.flexRow[_ngcontent-%COMP%]   .halfWidth[_ngcontent-%COMP%] {\n  width: calc(50% - 10px);\n}\n\n.input-block.flexRow[_ngcontent-%COMP%]   .halfWidth[_ngcontent-%COMP%]   .avatarRow[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 4px;\n  padding: 8px;\n  height: 43px;\n  border: 1px solid #e9e9f0;\n  margin-top: 1rem;\n  position: relative;\n}\n\n.input-block.flexRow[_ngcontent-%COMP%]   .halfWidth[_ngcontent-%COMP%]   .avatarRow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100%;\n  width: auto;\n  cursor: pointer;\n}\n\n.input-block.flexRow[_ngcontent-%COMP%]   .halfWidth[_ngcontent-%COMP%]   .avatarRow[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  width: 100%;\n  max-height: 150px;\n  overflow-y: auto;\n  top: 100%;\n  left: 0;\n  display: none;\n  background: #fff;\n}\n\n.input-block.flexRow[_ngcontent-%COMP%]   .halfWidth[_ngcontent-%COMP%]   .avatarRow[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  list-style-type: none;\n  height: 30px;\n  padding: 5px;\n  text-align: center;\n  border: 1px solid #e9e9f0;\n}\n\n.input-block.flexRow[_ngcontent-%COMP%]   .halfWidth[_ngcontent-%COMP%]   .avatarRow[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.designationRowGroup[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 40%;\n}\n\n.avatarRowGroup[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 60%;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  width: 10px;\n}\n\n.employee-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .employee-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n  height: 43px;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 400;\n  color: #333;\n  padding: 0 12px;\n  border-radius: 4px;\n  border: 1px solid #e9e9f0;\n  background-color: #fff;\n}\n\n.employee-form[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%], .employee-form[_ngcontent-%COMP%]   select.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VuZ2luZWVyYWktc29udS9lbmdpbmVlci5haS9lbXBsb3llZS1tYW5hZ2VtZW50L3NyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZm9ybS9lbXBsb3llZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZW5naW5lZXJhaS1zb251L2VuZ2luZWVyLmFpL2VtcGxveWVlLW1hbmFnZW1lbnQvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL2FwcC1jb2xvcnMuc2NzcyIsInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtZm9ybS9lbXBsb3llZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkNQSTtFRFFKLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FFREo7O0FGS0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRUZKOztBRktFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUVGSjs7QUZLRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUVGSjs7QUZLRTtFQUNFLGdCQUFBO0FFRko7O0FGSUk7RUFBVyxhQUFBO0VBQWUsOEJBQUE7QUVBOUI7O0FGQ007RUFBWSx1QkFBQTtBRUVsQjs7QUZEUTtFQUFZLFdBQUE7RUFBYSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsWUFBQTtFQUFjLHlCQUFBO0VBQTBCLGdCQUFBO0VBQWlCLGtCQUFBO0FFVTVIOztBRlRVO0VBQUssZ0JBQUE7RUFBa0IsV0FBQTtFQUFhLGVBQUE7QUVjOUM7O0FGYlU7RUFBSSxTQUFBO0VBQVcsVUFBQTtFQUFZLGtCQUFBO0VBQW9CLFdBQUE7RUFBWSxpQkFBQTtFQUFtQixnQkFBQTtFQUFrQixTQUFBO0VBQVUsT0FBQTtFQUFRLGFBQUE7RUFBZSxnQkMxQ25JO0FDbUVSOztBRnhCWTtFQUFJLGNBQUE7RUFBZ0IscUJBQUE7RUFBdUIsWUFBQTtFQUFjLFlBQUE7RUFBYyxrQkFBQTtFQUFvQix5QkFBQTtBRWdDdkc7O0FGNUJZO0VBQUksY0FBQTtBRStCaEI7O0FGeEJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUUyQkY7O0FGeEJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUUyQkY7O0FGeEJBO0VBQ0UsV0FBQTtBRTJCRjs7QUZ4QkE7O0VBRUksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkNoRkk7QUMyR1I7O0FGeEJBOztFQUVJLDRCQUFBO0FFMkJKOztBRnhCQTtFQUNFLFVBQUE7QUUyQkYiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS1mb3JtL2VtcGxveWVlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3NoYXJlZC9zdHlsZXMvYXBwLWNvbG9ycy5zY3NzJztcblxuLmVtcGxveWVlLW1vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMjAwO1xuICAgIHRvcDogNSU7XG4gICAgbGVmdDogMzAlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCA4MHB4IHJnYmEoMCwwLDAsLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDM1cHg7XG5cbiAgfVxuXG4gIC5lbXBsb3llZS1tb2RhbC10aXRsZSB7XG4gICAgcGFkZGluZzogMCAwIDEycHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzIxMjEyMTtcbiAgfVxuICBcbiAgLmVtcGxveWVlLWZvcm0ge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAuZW1wbG95ZWUtZm9ybSBsYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLmlucHV0LWJsb2NrIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gICAgJi5mbGV4Um93IHtkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAuaGFsZldpZHRoIHt3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgICAgLmF2YXRhclJvdyB7d2lkdGg6IDEwMCU7IGJvcmRlci1yYWRpdXM6IDRweDsgcGFkZGluZzogOHB4OyBoZWlnaHQ6IDQzcHg7IGJvcmRlcjoxcHggc29saWQgI2U5ZTlmMDsgbWFyZ2luLXRvcDoxcmVtOyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaW1nIHttYXgtaGVpZ2h0OiAxMDAlOyB3aWR0aDogYXV0bzsgY3Vyc29yOiBwb2ludGVyO31cbiAgICAgICAgICB1bCB7bWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOjEwMCU7IG1heC1oZWlnaHQ6IDE1MHB4OyBvdmVyZmxvdy15OiBhdXRvOyB0b3A6MTAwJTsgbGVmdDowOyBkaXNwbGF5OiBub25lOyBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICAgICAgICBsaSB7ZGlzcGxheTogYmxvY2s7IGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgaGVpZ2h0OiAzMHB4OyBwYWRkaW5nOiA1cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyOjFweCBzb2xpZCAjZTllOWYwO31cbiAgICAgICAgICAgIC8vICY6aG92ZXIge2JhY2tncm91bmQ6IGdyZXl9XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdWwge2Rpc3BsYXk6IGJsb2NrO31cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuLmRlc2lnbmF0aW9uUm93R3JvdXAge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG5cbi5hdmF0YXJSb3dHcm91cCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cblxuLnNwYWNlciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4uZW1wbG95ZWUtZm9ybSBpbnB1dCxcbi5lbXBsb3llZS1mb3JtIHNlbGVjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWYwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbn1cblxuLmVtcGxveWVlLWZvcm0gaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxuLmVtcGxveWVlLWZvcm0gc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBjb2xvcjogcmVkO1xufVxuIiwiJGRhcmstYmx1ZTogIzZjMDBlYTtcbiR3aGl0ZTogI2ZmZjtcbiR0aENvbG9yOiAjNmM3YWUwO1xuJGJhc2VDb2xvcjogIzM5OEI5MztcbiIsIi5lbXBsb3llZS1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjAwO1xuICB0b3A6IDUlO1xuICBsZWZ0OiAzMCU7XG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG59XG5cbi5lbXBsb3llZS1tb2RhbC10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMCAxMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuXG4uZW1wbG95ZWUtZm9ybSB7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZW1wbG95ZWUtZm9ybSBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbnB1dC1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4uaW5wdXQtYmxvY2suZmxleFJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5pbnB1dC1ibG9jay5mbGV4Um93IC5oYWxmV2lkdGgge1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbn1cbi5pbnB1dC1ibG9jay5mbGV4Um93IC5oYWxmV2lkdGggLmF2YXRhclJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWYwO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5wdXQtYmxvY2suZmxleFJvdyAuaGFsZldpZHRoIC5hdmF0YXJSb3cgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbnB1dC1ibG9jay5mbGV4Um93IC5oYWxmV2lkdGggLmF2YXRhclJvdyB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5pbnB1dC1ibG9jay5mbGV4Um93IC5oYWxmV2lkdGggLmF2YXRhclJvdyB1bCBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZjA7XG59XG4uaW5wdXQtYmxvY2suZmxleFJvdyAuaGFsZldpZHRoIC5hdmF0YXJSb3c6aG92ZXIgdWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRlc2lnbmF0aW9uUm93R3JvdXAge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG5cbi5hdmF0YXJSb3dHcm91cCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cblxuLnNwYWNlciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4uZW1wbG95ZWUtZm9ybSBpbnB1dCxcbi5lbXBsb3llZS1mb3JtIHNlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBoZWlnaHQ6IDQzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTlmMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmVtcGxveWVlLWZvcm0gaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxuLmVtcGxveWVlLWZvcm0gc2VsZWN0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employee-form',
          templateUrl: './employee-form.component.html',
          styleUrls: ['./employee-form.component.scss'],
          host: {
            '(document:click)': 'onClick($event)'
          }
        }]
      }], function () {
        return [{
          type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
        }];
      }, {
        formEmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/employee/employee-list/employee-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/employee/employee-list/employee-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EmployeeListComponent */

  /***/
  function srcAppEmployeeEmployeeListEmployeeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
      return EmployeeListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/employee.service */
    "./src/app/shared/services/employee.service.ts");
    /* harmony import */


    var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/notification.service */
    "./src/app/shared/services/notification.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/search/search.component */
    "./src/app/shared/components/search/search.component.ts");
    /* harmony import */


    var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../add-employee/add-employee.component */
    "./src/app/employee/add-employee/add-employee.component.ts");
    /* harmony import */


    var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../edit-employee/edit-employee.component */
    "./src/app/employee/edit-employee/edit-employee.component.ts");
    /* harmony import */


    var _shared_pipes_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/pipes/filter */
    "./src/app/shared/pipes/filter.ts"); //Angular imports


    function EmployeeListComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.hideDeleteModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeListComponent_app_search_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEmit", function EmployeeListComponent_app_search_2_Template_app_search_searchEmit_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.searchText = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeListComponent_div_3_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_div_3_tr_18_Template_span_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var employee_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.editEmployee(employee_r13.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_div_3_tr_18_Template_span_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var employee_r13 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.showDeleteModal(employee_r13.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_div_3_tr_18_Template_span_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var employee_r13 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.employeeDetail(employee_r13.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employee_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", employee_r13.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r13.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r13.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r13.company_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r13.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r13.contact_no);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r13.designation);
      }
    }

    function EmployeeListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Designation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EmployeeListComponent_div_3_tr_18_Template, 22, 7, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 1, ctx_r2.employees, ctx_r2.searchText));
      }
    }

    function EmployeeListComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Result not found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeListComponent_app_add_employee_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-employee");
      }
    }

    function EmployeeListComponent_app_edit_employee_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-edit-employee");
      }
    }

    function EmployeeListComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You want to delete?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_div_8_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.deleteEmployee();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_div_8_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.hideDeleteModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EmployeeListComponent = /*#__PURE__*/function () {
      function EmployeeListComponent(employeeService, notificatioService, sharedService, router) {
        _classCallCheck(this, EmployeeListComponent);

        this.employeeService = employeeService;
        this.notificatioService = notificatioService;
        this.sharedService = sharedService;
        this.router = router;
        this.employees = [];
        this.searchText = '';
        this.deleteModal = {
          show: false,
          id: ''
        };
      }

      _createClass(EmployeeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEmployees();
        } //Fetch Employees from local storage

      }, {
        key: "getEmployees",
        value: function getEmployees() {
          this.employees = this.employeeService.employees();
        } //Show delete modal

      }, {
        key: "showDeleteModal",
        value: function showDeleteModal(employeeId) {
          this.deleteModal.show = true;
          this.deleteModal.id = employeeId;
        } //Hide Delete modal

      }, {
        key: "hideDeleteModal",
        value: function hideDeleteModal() {
          this.deleteModal = {
            show: false,
            id: ''
          };
        } //Delete Employee from local stoarge and get emplyees again.

      }, {
        key: "deleteEmployee",
        value: function deleteEmployee() {
          this.employeeService.deleteEmployee(this.deleteModal.id);
          this.notificatioService.showSuccess("Employee Delete successfully.", 'Delete Employee');
          this.getEmployees();
          this.hideDeleteModal();
        } //Show update employee popup.

      }, {
        key: "editEmployee",
        value: function editEmployee(employeeId) {
          this.sharedService.editEmployeeClicked.show = true;
          this.sharedService.editEmployeeClicked.employeeId = employeeId;
        } //Redirect to Employee detail

      }, {
        key: "employeeDetail",
        value: function employeeDetail(employeeId) {
          this.router.navigate(['/employee', employeeId]);
        }
      }]);

      return EmployeeListComponent;
    }();

    EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) {
      return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeListComponent,
      selectors: [["app-employee-list"]],
      decls: 9,
      vars: 7,
      consts: [[1, "employee-list"], ["class", "backdrop", 3, "click", 4, "ngIf"], [3, "searchEmit", 4, "ngIf"], ["class", "table-users", 4, "ngIf", "ngIfElse"], ["noResult", ""], [4, "ngIf"], ["class", "employee-delete-modal", 4, "ngIf"], [1, "backdrop", 3, "click"], [3, "searchEmit"], [1, "table-users"], ["cellspacing", "0"], [4, "ngFor", "ngForOf"], [3, "src"], [1, "action-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], ["aria-hidden", "true", 1, "fa", "fa-info-circle"], [1, "no-result"], [1, "employee-delete-modal"], [1, "employee-delete-modal-title"], [1, "employee-modal-actions"], [1, "employee-modal-action", "employee-modal-action-submit", 3, "click"], [1, "employee-modal-action", "employee-modal-action-cancel", 3, "click"]],
      template: function EmployeeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeListComponent_div_1_Template, 1, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeListComponent_app_search_2_Template, 1, 0, "app-search", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeeListComponent_div_3_Template, 20, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeeListComponent_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmployeeListComponent_app_add_employee_6_Template, 1, 0, "app-add-employee", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmployeeListComponent_app_edit_employee_7_Template, 1, 0, "app-edit-employee", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EmployeeListComponent_div_8_Template, 8, 0, "div", 6);
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteModal == null ? null : ctx.deleteModal.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employees.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employees.length > 0)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sharedService.addEmployeeClicked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sharedService.editEmployeeClicked == null ? null : ctx.sharedService.editEmployeeClicked.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteModal == null ? null : ctx.deleteModal.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_7__["AddEmployeeComponent"], _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_8__["EditEmployeeComponent"]],
      pipes: [_shared_pipes_filter__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"]],
      styles: ["body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.employee-list[_ngcontent-%COMP%] {\n  margin-top: 7rem;\n}\n\n.employee-delete-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 200;\n  top: 25%;\n  left: 30%;\n  width: 40%;\n  background: #fff;\n  box-shadow: 0 10px 80px rgba(0, 0, 0, 0.05);\n  border-radius: 20px;\n  padding: 35px;\n}\n\n.employee-delete-modal-title[_ngcontent-%COMP%] {\n  padding: 0 0 12px;\n  font-size: 24px;\n  font-weight: 500;\n  text-align: left;\n  color: #212121;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n\n.table-users[_ngcontent-%COMP%] {\n  border: 1px solid #327a81;\n  border-radius: 10px;\n  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);\n  max-width: calc(100% - 2em);\n  margin: 0 auto;\n  overflow: auto;\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-family: sans-serif;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: middle;\n  font-size: 0.95em;\n  color: #808080;\n  line-height: 1.4;\n  padding: 1rem 0;\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #6c7ae0;\n  font-weight: 300;\n  color: #fff;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n+1) {\n  background-color: #f8f6ff;\n}\n\n.action-button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VuZ2luZWVyYWktc29udS9lbmdpbmVlci5haS9lbXBsb3llZS1tYW5hZ2VtZW50L3NyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9lbmdpbmVlcmFpLXNvbnUvZW5naW5lZXIuYWkvZW1wbG95ZWUtbWFuYWdlbWVudC9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvYXBwLWNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNHO0VBQUksc0JBQUE7QUNQUDs7QURVQTtFQUNJLGdCQUFBO0FDUEo7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCRXJCTTtFRnNCTiwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNQRjs7QURVQTtFQUNHLGtCQUFBO0VBQ0EsWUFsQ1U7RUFtQ1YsV0FuQ1U7QUM0QmI7O0FEVUE7RUFDRyx5QkFBQTtFQUNBLG1CQTFDWTtFQTJDWix3Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDUEg7O0FEVUE7RUFDRyxXQUFBO0FDUEg7O0FEU0c7RUFDRyxhQW5ESTtFQW9ESix1QkFBQTtBQ1BOOztBRFVHO0VBQ0csa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1JOOztBRFdHO0VBQ0cseUJFcEVJO0VGcUVKLGdCQUFBO0VBQ0EsV0V2RUU7QUQ4RFI7O0FEYU07RUFBa0IsdUJBQUE7QUNWeEI7O0FEV007RUFBd0IseUJBQUE7QUNSOUI7O0FEWUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9hcHAtY29sb3JzLnNjc3MnO1xuXG4kYm9yZGVyUmFkaXVzOiAxMHB4O1xuJGltYWdlQmlnOiAxMDBweDtcbiRpbWFnZVNtYWxsOiA2MHB4O1xuJHBhZGRpbmc6IDEwcHg7XG5cblxuYm9keSB7XG4gICAqIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxufVxuXG4uZW1wbG95ZWUtbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogN3JlbTtcbn1cblxuLmVtcGxveWVlLWRlbGV0ZS1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjAwO1xuICB0b3A6IDI1JTtcbiAgbGVmdDogMzAlO1xuICB3aWR0aDogNDAlO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA4MHB4IHJnYmEoMCwwLDAsLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzVweDtcbn1cblxuLmVtcGxveWVlLWRlbGV0ZS1tb2RhbC10aXRsZSB7XG4gIHBhZGRpbmc6IDAgMCAxMnB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMjEyMTIxO1xufVxuXG5pbWcge1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgaGVpZ2h0OiAkaW1hZ2VTbWFsbDtcbiAgIHdpZHRoOiAkaW1hZ2VTbWFsbDtcbn1cblxuLnRhYmxlLXVzZXJzIHtcbiAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigkYmFzZUNvbG9yLCA1JSk7XG4gICBib3JkZXItcmFkaXVzOiAkYm9yZGVyUmFkaXVzO1xuICAgYm94LXNoYWRvdzogM3B4IDNweCAwIHJnYmEoMCwwLDAsMC4xKTtcbiAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcbiAgIG1hcmdpbjogMCBhdXRvO1xuICAgb3ZlcmZsb3c6IGF1dG87XG4gICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUge1xuICAgd2lkdGg6IDEwMCU7XG4gICBcbiAgIHRkLCB0aCB7IFxuICAgICAgcGFkZGluZzogJHBhZGRpbmc7IFxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICB9XG4gICBcbiAgIHRkIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgIH1cbiAgIFxuICAgdGggeyBcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aENvbG9yO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICB9XG4gICBcbiAgIHRyIHsgICAgIFxuICAgICAgJjpudGgtY2hpbGQoMm4pIHsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cbiAgICAgICY6bnRoLWNoaWxkKDJuKzEpIHsgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY2ZmY7IH1cbiAgIH1cbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsImJvZHkgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5lbXBsb3llZS1saXN0IHtcbiAgbWFyZ2luLXRvcDogN3JlbTtcbn1cblxuLmVtcGxveWVlLWRlbGV0ZS1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjAwO1xuICB0b3A6IDI1JTtcbiAgbGVmdDogMzAlO1xuICB3aWR0aDogNDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDEwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzNXB4O1xufVxuXG4uZW1wbG95ZWUtZGVsZXRlLW1vZGFsLXRpdGxlIHtcbiAgcGFkZGluZzogMCAwIDEycHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuLnRhYmxlLXVzZXJzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMyN2E4MTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUgdGQsIHRhYmxlIHRoIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG50YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG4gIGNvbG9yOiAjODA4MDgwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBwYWRkaW5nOiAxcmVtIDA7XG59XG50YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzdhZTA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxudGFibGUgdHI6bnRoLWNoaWxkKDJuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxudGFibGUgdHI6bnRoLWNoaWxkKDJuKzEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjZmZjtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIiRkYXJrLWJsdWU6ICM2YzAwZWE7XG4kd2hpdGU6ICNmZmY7XG4kdGhDb2xvcjogIzZjN2FlMDtcbiRiYXNlQ29sb3I6ICMzOThCOTM7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employee-list',
          templateUrl: './employee-list.component.html',
          styleUrls: ['./employee-list.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]
        }, {
          type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]
        }, {
          type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/employee-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/employee/employee-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: EmployeeRoutingModule */

  /***/
  function srcAppEmployeeEmployeeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function () {
      return EmployeeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./employee-list/employee-list.component */
    "./src/app/employee/employee-list/employee-list.component.ts");
    /* harmony import */


    var _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employee-detail/employee-detail.component */
    "./src/app/employee/employee-detail/employee-detail.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'employees',
      pathMatch: 'full'
    }, {
      path: "employees",
      component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"]
    }, {
      path: "employee/:id",
      component: _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeDetailComponent"]
    }, {
      path: "**",
      redirectTo: 'employees'
    }];

    var EmployeeRoutingModule = function EmployeeRoutingModule() {
      _classCallCheck(this, EmployeeRoutingModule);
    };

    EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmployeeRoutingModule
    });
    EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmployeeRoutingModule_Factory(t) {
        return new (t || EmployeeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee/employee.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/employee/employee.module.ts ***!
    \*********************************************/

  /*! exports provided: EmployeeModule */

  /***/
  function srcAppEmployeeEmployeeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () {
      return EmployeeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./employee-routing.module */
    "./src/app/employee/employee-routing.module.ts");
    /* harmony import */


    var _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employee-form/employee-form.component */
    "./src/app/employee/employee-form/employee-form.component.ts");
    /* harmony import */


    var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-employee/edit-employee.component */
    "./src/app/employee/edit-employee/edit-employee.component.ts");
    /* harmony import */


    var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-employee/add-employee.component */
    "./src/app/employee/add-employee/add-employee.component.ts");
    /* harmony import */


    var _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./employee-detail/employee-detail.component */
    "./src/app/employee/employee-detail/employee-detail.component.ts");
    /* harmony import */


    var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./employee-list/employee-list.component */
    "./src/app/employee/employee-list/employee-list.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var EmployeeModule = function EmployeeModule() {
      _classCallCheck(this, EmployeeModule);
    };

    EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmployeeModule
    });
    EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmployeeModule_Factory(t) {
        return new (t || EmployeeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeModule, {
        declarations: [_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeListComponent"], _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeDetailComponent"], _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_5__["AddEmployeeComponent"], _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__["EditEmployeeComponent"], _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeListComponent"], _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeDetailComponent"], _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_5__["AddEmployeeComponent"], _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_4__["EditEmployeeComponent"], _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/Utils/storage.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/Utils/storage.service.ts ***!
    \*************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppSharedUtilsStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StorageService = /*#__PURE__*/function () {
      function StorageService() {
        _classCallCheck(this, StorageService);
      }

      _createClass(StorageService, null, [{
        key: "setLocalStorage",
        value: function setLocalStorage(key, value) {
          localStorage.setItem(key, JSON.stringify(value));
        }
      }, {
        key: "getLocalStorage",
        value: function getLocalStorage(key) {
          var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var item = localStorage.getItem(key);
          return item ? JSON.parse(item) : defaultValue;
        }
      }]);

      return StorageService;
    }();

    StorageService.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)();
    };

    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/search/search.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/search/search.component.ts ***!
    \**************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSharedComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);

        this.searchText = '';
        this.searchEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //Emit search text for parent components.

      }, {
        key: "searchEmployees",
        value: function searchEmployees() {
          this.searchEmit.emit(this.searchText);
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)();
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      outputs: {
        searchEmit: "searchEmit"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "search-employees"], ["type", "search", "placeholder", "Search", "name", "search", "autocomplete", "off", 1, "search-employees-input", 3, "ngModel", "ngModelChange", "input"], [1, "search-employees-button"], ["aria-hidden", "true", 1, "fa", "fa-search", "search-icon"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.searchText = $event;
          })("input", function SearchComponent_Template_input_input_1_listener() {
            return ctx.searchEmployees();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: [".search-employees[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  float: right;\n  position: relative;\n  margin: 0 1.25rem 1.5rem 0;\n}\n\n.search-employees-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 34px;\n  position: relative;\n  display: block;\n  font-size: 13px;\n  font-weight: normal;\n  color: #555555;\n  padding: 0 10px 0 40px;\n  border: 1px solid #DFE0E6;\n  border-radius: 3px;\n  background-color: #fff;\n}\n\n.search-employees-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline-block;\n  text-align: center;\n  line-height: 35px;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  z-index: 1;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #83889e;\n}\n\nem[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2VuZ2luZWVyYWktc29udS9lbmdpbmVlci5haS9lbXBsb3llZS1tYW5hZ2VtZW50L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2VuZ2luZWVyYWktc29udS9lbmdpbmVlci5haS9lbXBsb3llZS1tYW5hZ2VtZW50L3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9hcHAtY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ0RKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JFckJJO0FEbUJSOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3NoYXJlZC9zdHlsZXMvYXBwLWNvbG9ycy5zY3NzJztcblxuICAuc2VhcmNoLWVtcGxveWVlc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDEuMjVyZW0gMS41cmVtIDA7XG4gICAgfVxuXG5cbi5zZWFyY2gtZW1wbG95ZWVzLWlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgcGFkZGluZzogMCAxMHB4IDAgNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREZFMEU2O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG59XG5cbi5zZWFyY2gtZW1wbG95ZWVzLWJ1dHRvbntcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcHg7XG4gICAgbGVmdDogMXB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzgzODg5ZTtcbn1cblxuZW17XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjOTk5O1xuICB9IiwiLnNlYXJjaC1lbXBsb3llZXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAxLjI1cmVtIDEuNXJlbSAwO1xufVxuXG4uc2VhcmNoLWVtcGxveWVlcy1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNERkUwRTY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaC1lbXBsb3llZXMtYnV0dG9uIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAxcHg7XG4gIHotaW5kZXg6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaC1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzgzODg5ZTtcbn1cblxuZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjOTk5O1xufSIsIiRkYXJrLWJsdWU6ICM2YzAwZWE7XG4kd2hpdGU6ICNmZmY7XG4kdGhDb2xvcjogIzZjN2FlMDtcbiRiYXNlQ29sb3I6ICMzOThCOTM7XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [];
      }, {
        searchEmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/dataTypes.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/dataTypes.ts ***!
    \*************************************/

  /*! exports provided: Designation, DESIGNATIONS, AVATARS */

  /***/
  function srcAppSharedDataTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Designation", function () {
      return Designation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DESIGNATIONS", function () {
      return DESIGNATIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AVATARS", function () {
      return AVATARS;
    });

    var Designation;

    (function (Designation) {
      Designation["SoftwareDeveloper"] = "Software Developer";
      Designation["SeniorSoftwareDeveloper"] = "Senior Software Developer";
      Designation["QualityAssurance"] = "Quality Assurance";
      Designation["TeamLead"] = "Team Lead";
      Designation["Manager"] = "Manager";
    })(Designation || (Designation = {}));

    var DESIGNATIONS = [Designation.SoftwareDeveloper, Designation.SeniorSoftwareDeveloper, Designation.QualityAssurance, Designation.TeamLead, Designation.Manager];
    var AVATARS = ['assets/images/software-developer.jpg', 'assets/images/senior-developer.png', 'assets/images/QA.png', 'assets/images/team-lead.jpg', 'assets/images/manager.jpg'];
    /***/
  },

  /***/
  "./src/app/shared/models/employee.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/models/employee.ts ***!
    \*******************************************/

  /*! exports provided: Employee */

  /***/
  function srcAppSharedModelsEmployeeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Employee", function () {
      return Employee;
    });

    var Employee = function Employee(data) {
      _classCallCheck(this, Employee);

      this.id = data.id;
      this.name = data.name;
      this.company_name = data.company_name;
      this.email = data.email;
      this.contact_no = data.contact_no;
      this.designation = data.designation;
      this.avatar = data.avatar;
    };
    /***/

  },

  /***/
  "./src/app/shared/pipes/filter.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/pipes/filter.ts ***!
    \****************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppSharedPipesFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, searchText) {
          if (!items) return [];
          if (!searchText) return items;
          searchText = searchText.toLowerCase();
          return items.filter(function (it) {
            return it.name.toLowerCase().includes(searchText) || it.id.toLowerCase().includes(searchText) || it.email.toLowerCase().includes(searchText);
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe.ɵfac = function FilterPipe_Factory(t) {
      return new (t || FilterPipe)();
    };

    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filter",
      type: FilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/employee.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/employee.service.ts ***!
    \*****************************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppSharedServicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/employee */
    "./src/app/shared/models/employee.ts");
    /* harmony import */


    var _Utils_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Utils/storage.service */
    "./src/app/shared/Utils/storage.service.ts"); //Angular imports
    //Application imports


    var EmployeeService = /*#__PURE__*/function () {
      function EmployeeService() {
        _classCallCheck(this, EmployeeService);

        this.allEmployees = [];
      } // Get All employees from local storage


      _createClass(EmployeeService, [{
        key: "employees",
        value: function employees() {
          this.allEmployees = _Utils_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].getLocalStorage('employees', []);
          return this.allEmployees;
        } // Save employee in local storage

      }, {
        key: "saveEmployee",
        value: function saveEmployee(employeeData) {
          this.allEmployees.unshift(new _models_employee__WEBPACK_IMPORTED_MODULE_1__["Employee"](employeeData));

          _Utils_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setLocalStorage('employees', this.allEmployees);
        } //Delete employee from local storage

      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(employeeId) {
          this.allEmployees = this.allEmployees.filter(function (employee) {
            return employee.id != employeeId;
          });

          _Utils_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setLocalStorage('employees', this.allEmployees);
        } // Get employee by employee id fromlocal storage

      }, {
        key: "getEmployee",
        value: function getEmployee(employeeId) {
          return this.allEmployees.find(function (employee) {
            return employee.id == employeeId;
          });
        } //Update Employee

      }, {
        key: "updateEmployee",
        value: function updateEmployee(employee) {
          var index = this.allEmployees.findIndex(function (emp) {
            return emp.id === employee.id;
          });
          this.allEmployees[index] = employee;

          _Utils_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setLocalStorage('employees', this.allEmployees);
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.ɵfac = function EmployeeService_Factory(t) {
      return new (t || EmployeeService)();
    };

    EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmployeeService,
      factory: EmployeeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/notification.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/services/notification.service.ts ***!
    \*********************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppSharedServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js"); // ANgular imports


    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(toastr) {
        _classCallCheck(this, NotificationService);

        this.toastr = toastr;
      } // show success toaster message


      _createClass(NotificationService, [{
        key: "showSuccess",
        value: function showSuccess(message, title) {
          this.toastr.success(message, title);
        } // show Error toaster message

      }, {
        key: "showError",
        value: function showError(message, title) {
          this.toastr.error(message, title);
        } // show Info toaster message

      }, {
        key: "showInfo",
        value: function showInfo(message, title) {
          this.toastr.info(message, title);
        } // show warning toaster message

      }, {
        key: "showWarning",
        value: function showWarning(message, title) {
          this.toastr.warning(message, title);
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
    };

    NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/shared.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/shared.service.ts ***!
    \***************************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedServicesSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SharedService = function SharedService() {
      _classCallCheck(this, SharedService);

      // Add employee button is clicked or not
      this.addEmployeeClicked = false; // Edit employee button is clicked or not

      this.editEmployeeClicked = {
        employeeId: '',
        show: false
      };
    };

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)();
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/employee.service */
    "./src/app/shared/services/employee.service.ts");
    /* harmony import */


    var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _pipes_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pipes/filter */
    "./src/app/shared/pipes/filter.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/shared/components/search/search.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/notification.service */
    "./src/app/shared/services/notification.service.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_pipes_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
        exports: [_pipes_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pipes_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
          providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]],
          exports: [_pipes_filter__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/engineerai-sonu/engineer.ai/employee-management/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map