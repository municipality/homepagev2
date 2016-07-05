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
                        template: "\n        <div class=\"home fadeIn\">\n            <div class=\"icon-container\">\n                <img class=\"icon\" src=\"images/brian-icon-2.png\">\n            </div>\n            <div class=\"titles-container\">\n                <div class=\"titles\">\n                    <h1 class=\"blue\">Software Engineer</h1>\n                    <h1 class=\"white\">Designer</h1>\n                    <h1 class=\"blue\">Dreamer</h1>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0k7Z0JBRUEsQ0FBQztnQkFFRCw4QkFBZSxHQUFmO29CQUFBLGlCQU9DO29CQU5HLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO3dCQUNsQyxVQUFVLENBQUM7NEJBQ1AsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzs0QkFDbkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUM1RixDQUFDLEVBQUUsSUFBSSxHQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNoQixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQWJEO29CQUFDLGdCQUFTLENBQUMsT0FBTyxDQUFDOzttREFBQTtnQkFsQnZCO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLGdmQWFWO3FCQUNKLENBQUM7O3dCQUFBO2dCQWlCRixXQUFDO1lBQUQsQ0FBQyxBQWZELElBZUM7WUFmRCx1QkFlQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuQENvbXBvbmVudCAoe1xuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZSBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiaW1hZ2VzL2JyaWFuLWljb24tMi5wbmdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImJsdWVcIj5Tb2Z0d2FyZSBFbmdpbmVlcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIndoaXRlXCI+RGVzaWduZXI8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJibHVlXCI+RHJlYW1lcjwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBAVmlld0NoaWxkKCdpbWFnZScpIGltYWdlO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0ICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZS5uYXRpdmVFbGVtZW50LnN0eWxlW1wiYmFja2dyb3VuZC1wb3NpdGlvblwiXSA9IFwiMCBcIiArICgtc2Nyb2xsVG9wICogLjEpICsgXCJweFwiO1xuICAgICAgICAgICAgfSwgMTAwMC82MCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19