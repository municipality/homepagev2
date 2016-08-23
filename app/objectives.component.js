System.register(['angular2/core', './scrolling.service', './mobile.service'], function(exports_1, context_1) {
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
    var core_1, scrolling_service_1, mobile_service_1;
    var Objectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            Objectives = (function () {
                function Objectives(scrollingService, mobileService) {
                    this.scrollingService = scrollingService;
                    this.mobileService = mobileService;
                    this.loaded = false;
                    this.loadedCount = 0;
                    this.imageCount = 3;
                }
                Objectives.prototype.ngAfterViewInit = function () {
                    if (this.mobileService.isDesktop()) {
                        if (this.container == null) {
                            document.addEventListener("scroll", function func(e) {
                                this.panels = document.getElementsByClassName("outro-panel");
                                var panel = this.panels[this.panels.length / 2];
                                this.container = document.getElementsByClassName("outro-container")[0];
                                if (this.container && !this.container.className.includes("desktop")) {
                                    this.container.className += " desktop";
                                }
                                if (this.container && panel && panel.getBoundingClientRect().top > 0) {
                                    this.container.style["background-image"] = "url(images/outro1.jpg)";
                                }
                                else if (this.container) {
                                    this.container.style["background-image"] = "url(images/outro2.jpg)";
                                }
                            });
                        }
                    }
                };
                Objectives = __decorate([
                    core_1.Component({
                        selector: 'objectives',
                        providers: [scrolling_service_1.ScrollingService, mobile_service_1.MobileService],
                        template: "\n        <div class=\"outro-container\">\n\n            <div class=\"title\">\n                <h1 align=\"center\" class=\"blue\">Objectives</h1>\n            </div>\n            <div class=\"outro-panel first\">\n\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h1>Influence</h1>\n                        <p>Positively influence my surroundings and peers</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel left\">\n                    <div>\n                        <h1>Connect</h1>\n                        <p>Unite others through positive attitude and friendly vibes</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h1>Inspire</h1>\n                        <p>Be a role model amongst peers and inspire others</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel center\">\n                    <div>\n                        <h1>Change the World</h1>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService, mobile_service_1.MobileService])
                ], Objectives);
                return Objectives;
            }());
            exports_1("Objectives", Objectives);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0aXZlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvYmplY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlEQTtnQkFXSSxvQkFBcUIsZ0JBQW1DLEVBQ25DLGFBQTZCO29CQUQ3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO29CQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7b0JBVmxELFdBQU0sR0FBRyxLQUFLLENBQUM7b0JBRWYsZ0JBQVcsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLGVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBU2YsQ0FBQztnQkFFRCxvQ0FBZSxHQUFmO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDO2dDQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQ0FDN0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FHOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FHdkUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQztnQ0FDM0MsQ0FBQztnQ0FFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQztnQ0FDeEUsQ0FBQztnQ0FDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0NBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsd0JBQXdCLENBQUM7Z0NBQ3hFLENBQUM7NEJBR0wsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQztvQkFFTCxDQUFDO2dCQUVMLENBQUM7Z0JBekZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFlBQVk7d0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLDhCQUFhLENBQUM7d0JBQzVDLFFBQVEsRUFBRyx3NENBdUNWO3FCQUNKLENBQUM7OzhCQUFBO2dCQWdERixpQkFBQztZQUFELENBQUMsQUE5Q0QsSUE4Q0M7WUE5Q0QsbUNBOENDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2JpbGVTZXJ2aWNlfSBmcm9tICcuL21vYmlsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnb2JqZWN0aXZlcycsXG4gICAgcHJvdmlkZXJzOiBbU2Nyb2xsaW5nU2VydmljZSwgTW9iaWxlU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGgxIGFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJibHVlXCI+T2JqZWN0aXZlczwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbCBmaXJzdFwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWlubmVyLXBhbmVsIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+SW5mbHVlbmNlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBvc2l0aXZlbHkgaW5mbHVlbmNlIG15IHN1cnJvdW5kaW5ncyBhbmQgcGVlcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkNvbm5lY3Q8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VW5pdGUgb3RoZXJzIHRocm91Z2ggcG9zaXRpdmUgYXR0aXR1ZGUgYW5kIGZyaWVuZGx5IHZpYmVzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWlubmVyLXBhbmVsIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+SW5zcGlyZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5CZSBhIHJvbGUgbW9kZWwgYW1vbmdzdCBwZWVycyBhbmQgaW5zcGlyZSBvdGhlcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q2hhbmdlIHRoZSBXb3JsZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBPYmplY3RpdmVzIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgb3V0cm9JbWFnZTtcbiAgICBsb2FkZWQgPSBmYWxzZTtcblxuICAgIGxvYWRlZENvdW50ID0gMDtcbiAgICBpbWFnZUNvdW50ID0gMztcbiAgICBjb250YWluZXI7XG4gICAgb3V0cm9JbWFnZTE7XG4gICAgb3V0cm9JbWFnZTI7XG4gICAgbW9vbjtcbiAgICBwYW5lbHM7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgc2Nyb2xsaW5nU2VydmljZSA6IFNjcm9sbGluZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgbW9iaWxlU2VydmljZSA6IE1vYmlsZVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vYmlsZVNlcnZpY2UuaXNEZXNrdG9wKCkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuY29udGFpbmVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uIGZ1bmMoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1wYW5lbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhbmVsID0gdGhpcy5wYW5lbHNbdGhpcy5wYW5lbHMubGVuZ3RoLzJdO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8tY29udGFpbmVyXCIpWzBdO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jb250YWluZXIgJiYgIXRoaXMuY29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcyhcImRlc2t0b3BcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSArPSBcIiBkZXNrdG9wXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIgJiYgcGFuZWwgJiYgcGFuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gXCJ1cmwoaW1hZ2VzL291dHJvMS5qcGcpXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGVbXCJiYWNrZ3JvdW5kLWltYWdlXCJdID0gXCJ1cmwoaW1hZ2VzL291dHJvMi5qcGcpXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=