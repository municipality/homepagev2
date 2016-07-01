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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQVNJLGVBQXFCLGFBQTZCO29CQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7b0JBUGxELFdBQU0sR0FBRyxLQUFLLENBQUM7Z0JBU2YsQ0FBQztnQkFFRCwrQkFBZSxHQUFmO2dCQUNBLENBQUM7Z0JBRUQsZ0NBQWdCLEdBQWhCLFVBQWlCLEtBQUs7b0JBQ2xCLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUM7b0JBQ0QsSUFBSSxLQUFLLENBQUM7b0JBQ1YsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDaEMsQ0FBQztvQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDL0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFFdEMsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFFTCxDQUFDO2dCQTdCRDtvQkFBQyxnQkFBUyxDQUFDLE9BQU8sQ0FBQzs7Z0RBQUE7Z0JBNUJ2QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxPQUFPO3dCQUNsQixRQUFRLEVBQUcsNHZCQWdCVjtxQkFDSixDQUFDOzt5QkFBQTtnQkF5Q0YsWUFBQztZQUFELENBQUMsQUF2Q0QsSUF1Q0M7WUF2Q0QseUJBdUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtNb2JpbGVTZXJ2aWNlfSBmcm9tICcuL21vYmlsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnaW50cm8nLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2ICNpbWFnZSBjbGFzcz1cImludHJvLWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvYnJpYW4tYmx1cnJlZC5qcGcnKTtcIj5cbiAgICAgICAgICAgICAgICA8aW1nIChsb2FkKT1cImludHJvSW1hZ2VMb2FkZWQoaW1hZ2UpXCIgc3JjPSdpbWFnZXMvYnJpYW4tYmx1cnJlZC5qcGcnIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8taWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW50cm8taWNvblwiIHNyYz1cImltYWdlcy9icmlhbi1pY29uLTIucG5nXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJibHVlXCI+U29mdHdhcmUgRW5naW5lZXI8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ3aGl0ZVwiPkRlc2lnbmVyPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYmx1ZVwiPkRyZWFtZXI8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnRybyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIGludHJvSW1hZ2U7XG4gICAgbG9hZGVkID0gZmFsc2U7XG5cbiAgICBpbnRyb0NvbnRhaW5lcjtcblxuICAgIGludHJvSW1hZ2UxO1xuICAgIEBWaWV3Q2hpbGQoJ2ltYWdlJykgcztcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIG1vYmlsZVNlcnZpY2UgOiBNb2JpbGVTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQgKCkge1xuICAgIH1cblxuICAgIGludHJvSW1hZ2VMb2FkZWQoaW1hZ2UpIHtcbiAgICAgICAgLy9QYXJhbGxheCBpbXBsZW1lbnRhdGlvblxuICAgICAgICB0aGlzLmludHJvSW1hZ2UxID0gaW1hZ2U7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGlmKGltYWdlLnN0eWxlLmJvdHRvbSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBpbWFnZS5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW50cm87XG4gICAgICAgIGlmKGludHJvID09IG51bGwpIHtcbiAgICAgICAgICAgIGludHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImludHJvLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIHRoaXMuaW50cm9Db250YWluZXIgPSBpbnRybztcbiAgICAgICAgfVxuICAgICAgICBpbnRyby5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlU2VydmljZS5pc0Rlc2t0b3AoKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cbiJdfQ==