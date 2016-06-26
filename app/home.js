System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home() {
                }
                Home.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    document.addEventListener('scroll', function (e) {
                        setTimeout(function () {
                            var scrollTop = window.pageYOffset;
                            _this.image.nativeElement.style["background-position"] = "0 " + (-scrollTop * .1) + "px";
                        }, 1000 / 60);
                    });
                };
                __decorate([
                    core_1.ViewChild('image'), 
                    __metadata('design:type', Object)
                ], Home.prototype, "image", void 0);
                Home = __decorate([
                    core_1.Component({
                        template: "\n        <div class=\"home fadeIn\">\n            <div #image class=\"image\">\n            </div>\n            <!--<div class=\"intro-icon-container\">\n                <img class=\"intro-icon\" src=\"images/brian-icon-2.png\">\n            </div>\n            <div class=\"titles-container\">\n                <div class=\"titles\">\n                    <h2 class=\"blue\">Software Engineer</h2>\n                    <h2 class=\"white\">Designer</h2>\n                    <h2 class=\"blue\">Dreamer</h2>\n                </div>\n            </div>-->\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBR0k7Z0JBRUEsQ0FBQztnQkFFRCw4QkFBZSxHQUFmO29CQUFBLGlCQU9DO29CQU5HLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO3dCQUNsQyxVQUFVLENBQUM7NEJBQ1AsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzs0QkFDbkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUM1RixDQUFDLEVBQUUsSUFBSSxHQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNoQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQWJEO29CQUFDLGdCQUFTLENBQUMsT0FBTyxDQUFDOzttREFBQTtnQkFwQnZCO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLGlrQkFlVjtxQkFDSixDQUFDOzt3QkFBQTtnQkFpQkYsV0FBQztZQUFELENBQUMsQUFmRCxJQWVDO1lBZkQsdUJBZUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob21lIGZhZGVJblwiPlxyXG4gICAgICAgICAgICA8ZGl2ICNpbWFnZSBjbGFzcz1cImltYWdlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImludHJvLWljb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW50cm8taWNvblwiIHNyYz1cImltYWdlcy9icmlhbi1pY29uLTIucG5nXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJsdWVcIj5Tb2Z0d2FyZSBFbmdpbmVlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwid2hpdGVcIj5EZXNpZ25lcjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYmx1ZVwiPkRyZWFtZXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoJ2ltYWdlJykgaW1hZ2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQgKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudC5zdHlsZVtcImJhY2tncm91bmQtcG9zaXRpb25cIl0gPSBcIjAgXCIgKyAoLXNjcm9sbFRvcCAqIC4xKSArIFwicHhcIjtcclxuICAgICAgICAgICAgfSwgMTAwMC82MCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=