System.register(['angular2/core', './mobile.service', './designs.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mobile_service_1, designs_service_1;
    var Designs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            },
            function (designs_service_1_1) {
                designs_service_1 = designs_service_1_1;
            }],
        execute: function() {
            Designs = (function () {
                function Designs(mobileService, designsService) {
                    this.mobileService = mobileService;
                    this.designsService = designsService;
                    this.projects = this.designsService.getProjects();
                }
                Designs.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    if (!this.mobileService.isIOS()) {
                        document.addEventListener('scroll', function (e) {
                            setTimeout(function () {
                                var scrollTop = window.pageYOffset;
                                _this.image.nativeElement.style["background-position"] = "right " + (-scrollTop * .1) + "px";
                            }, 1000 / 60);
                        });
                    }
                };
                __decorate([
                    core_1.ViewChild('image'), 
                    __metadata('design:type', core_1.ElementRef)
                ], Designs.prototype, "image", void 0);
                Designs = __decorate([
                    core_1.Component({
                        providers: [designs_service_1.DesignsService],
                        template: "\n        <div class=\"designs fadeIn\">\n            <div #image class=\"intro\">\n\n            </div>\n            <div class=\"container\">\n                <h1 class=\"title\" align=\"center\">Projects</h1>\n                <p class=\"description\" align=\"center\">Below are some of the projects I have developed.</p>\n\n\n            </div>\n            <div class=\"projects-container\">\n                <div class=\"projects-row\">\n                <div *ngFor=\"#project of projects\" class=\"project\">\n                    <a href={{project.url}} target=\"_blank\">\n                        <img src=\"{{project.image}}\">\n                    </a>\n                    <p align=\"center\">{{project.title}}</p>\n                </div>\n                </div>\n            </div>\n        </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [mobile_service_1.MobileService, designs_service_1.DesignsService])
                ], Designs);
                return Designs;
            }());
            exports_1("Designs", Designs);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWducy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlc2lnbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQ0E7Z0JBS0ksaUJBQXFCLGFBQTZCLEVBQVUsY0FBOEI7b0JBQXJFLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtvQkFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBQ3RGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdEQsQ0FBQztnQkFFRCxpQ0FBZSxHQUFmO29CQUFBLGlCQVNDO29CQVJHLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDOzRCQUNsQyxVQUFVLENBQUM7Z0NBQ1AsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQ0FDbkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDOzRCQUNoRyxDQUFDLEVBQUUsSUFBSSxHQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNoQixDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDO2dCQUNMLENBQUM7Z0JBaEJEO29CQUFDLGdCQUFTLENBQUMsT0FBTyxDQUFDOztzREFBQTtnQkE5QnZCO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQzt3QkFDM0IsUUFBUSxFQUFHLGt6QkF1QlY7cUJBQ0osQ0FBQzs7MkJBQUE7Z0JBcUJGLGNBQUM7WUFBRCxDQUFDLEFBbkJELElBbUJDO1lBbkJELDZCQW1CQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7TW9iaWxlU2VydmljZX0gZnJvbSAnLi9tb2JpbGUuc2VydmljZSc7XG5pbXBvcnQge0Rlc2lnbnNTZXJ2aWNlfSBmcm9tICcuL2Rlc2lnbnMuc2VydmljZSc7XG5AQ29tcG9uZW50ICh7XG4gICAgcHJvdmlkZXJzOiBbRGVzaWduc1NlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWducyBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxkaXYgI2ltYWdlIGNsYXNzPVwiaW50cm9cIj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIiBhbGlnbj1cImNlbnRlclwiPlByb2plY3RzPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgYWxpZ249XCJjZW50ZXJcIj5CZWxvdyBhcmUgc29tZSBvZiB0aGUgcHJvamVjdHMgSSBoYXZlIGRldmVsb3BlZC48L3A+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwiI3Byb2plY3Qgb2YgcHJvamVjdHNcIiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17e3Byb2plY3QudXJsfX0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cInt7cHJvamVjdC5pbWFnZX19XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJjZW50ZXJcIj57e3Byb2plY3QudGl0bGV9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXNpZ25zIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdpbWFnZScpIGltYWdlIDogRWxlbWVudFJlZjtcblxuICAgIHByb2plY3RzIDogYW55W107XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgbW9iaWxlU2VydmljZSA6IE1vYmlsZVNlcnZpY2UsIHByaXZhdGUgZGVzaWduc1NlcnZpY2U6IERlc2lnbnNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLmRlc2lnbnNTZXJ2aWNlLmdldFByb2plY3RzKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0ICgpIHtcbiAgICAgICAgaWYoIXRoaXMubW9iaWxlU2VydmljZS5pc0lPUygpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlLm5hdGl2ZUVsZW1lbnQuc3R5bGVbXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCJdID0gXCJyaWdodCBcIiArICgtc2Nyb2xsVG9wICogLjEpICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIH0sIDEwMDAvNjApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=