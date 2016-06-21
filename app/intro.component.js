System.register(['angular2/core', './mobile.service'], function(exports_1, context_1) {
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
    var core_1, mobile_service_1;
    var Intro;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            Intro = (function () {
                function Intro(mobileService) {
                    this.mobileService = mobileService;
                    this.loaded = false;
                }
                Intro.prototype.ngAfterViewInit = function () {
                    debugger;
                };
                Intro.prototype.introImageLoaded = function (image) {
                    //Parallax implementation
                    this.introImage1 = image;
                    var me = this;
                    if (image.style.bottom == "") {
                        image.style.bottom = '0px';
                    }
                    var intro;
                    if (intro == null) {
                        intro = document.getElementsByClassName("intro-container")[0];
                        this.introContainer = intro;
                    }
                    intro.style.height = window.innerHeight + "px";
                    image.style.height = window.innerHeight + "px";
                    if (this.mobileService.isDesktop()) {
                        document.addEventListener("scroll", function (e) {
                        });
                    }
                };
                __decorate([
                    core_1.ViewChild('image'), 
                    __metadata('design:type', Object)
                ], Intro.prototype, "s", void 0);
                Intro = __decorate([
                    core_1.Component({
                        selector: 'intro',
                        template: "\n        <div class=\"intro-container\">\n            <div #image class=\"intro-image-container\" style=\"background-image: url('images/brian-blurred.jpg');\">\n                <img (load)=\"introImageLoaded(image)\" src='images/brian-blurred.jpg' style=\"display:none;\">\n            </div>\n            <div class=\"intro-icon-container\">\n                <img class=\"intro-icon\" src=\"images/brian-icon-2.png\">\n            </div>\n            <div class=\"titles-container\">\n                <div class=\"titles\">\n                    <h2 class=\"blue\">Software Engineer</h2>\n                    <h2 class=\"white\">Designer</h2>\n                    <h2 class=\"blue\">Dreamer</h2>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [mobile_service_1.MobileService])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQVNJLGVBQXFCLGFBQTZCO29CQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7b0JBUGxELFdBQU0sR0FBRyxLQUFLLENBQUM7Z0JBU2YsQ0FBQztnQkFFRCwrQkFBZSxHQUFmO29CQUNJLFFBQVEsQ0FBQTtnQkFDWixDQUFDO2dCQUVELGdDQUFnQixHQUFoQixVQUFpQixLQUFLO29CQUNsQix5QkFBeUI7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQ2QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUMvQixDQUFDO29CQUNELElBQUksS0FBSyxDQUFDO29CQUNWLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNmLEtBQUssR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQy9DLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUMvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDakMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBRXRDLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUM7Z0JBRUwsQ0FBQztnQkE5QkQ7b0JBQUMsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7O2dEQUFBO2dCQTVCdkI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsT0FBTzt3QkFDbEIsUUFBUSxFQUFHLDR2QkFnQlY7cUJBQ0osQ0FBQzs7eUJBQUE7Z0JBMENGLFlBQUM7WUFBRCxDQUFDLEFBeENELElBd0NDO1lBeENELHlCQXdDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7TW9iaWxlU2VydmljZX0gZnJvbSAnLi9tb2JpbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2ludHJvJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiAjaW1hZ2UgY2xhc3M9XCJpbnRyby1pbWFnZS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2JyaWFuLWJsdXJyZWQuanBnJyk7XCI+XG4gICAgICAgICAgICAgICAgPGltZyAobG9hZCk9XCJpbnRyb0ltYWdlTG9hZGVkKGltYWdlKVwiIHNyYz0naW1hZ2VzL2JyaWFuLWJsdXJyZWQuanBnJyBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWljb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImludHJvLWljb25cIiBzcmM9XCJpbWFnZXMvYnJpYW4taWNvbi0yLnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYmx1ZVwiPlNvZnR3YXJlIEVuZ2luZWVyPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwid2hpdGVcIj5EZXNpZ25lcjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJsdWVcIj5EcmVhbWVyPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgSW50cm8gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBpbnRyb0ltYWdlO1xuICAgIGxvYWRlZCA9IGZhbHNlO1xuXG4gICAgaW50cm9Db250YWluZXI7XG5cbiAgICBpbnRyb0ltYWdlMTtcbiAgICBAVmlld0NoaWxkKCdpbWFnZScpIHM7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBtb2JpbGVTZXJ2aWNlIDogTW9iaWxlU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0ICgpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICBpbnRyb0ltYWdlTG9hZGVkKGltYWdlKSB7XG4gICAgICAgIC8vUGFyYWxsYXggaW1wbGVtZW50YXRpb25cbiAgICAgICAgdGhpcy5pbnRyb0ltYWdlMSA9IGltYWdlO1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZihpbWFnZS5zdHlsZS5ib3R0b20gPT0gXCJcIikge1xuICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGludHJvO1xuICAgICAgICBpZihpbnRybyA9PSBudWxsKSB7XG4gICAgICAgICAgICBpbnRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnRyby1jb250YWluZXJcIilbMF07XG4gICAgICAgICAgICB0aGlzLmludHJvQ29udGFpbmVyID0gaW50cm87XG4gICAgICAgIH1cbiAgICAgICAgaW50cm8uc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGlmICh0aGlzLm1vYmlsZVNlcnZpY2UuaXNEZXNrdG9wKCkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG59XG4iXX0=