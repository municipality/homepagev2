System.register(['angular2/core', './blog.service'], function(exports_1, context_1) {
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
    var core_1, blog_service_1;
    var Blog;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            }],
        execute: function() {
            Blog = (function () {
                function Blog(blogService) {
                    var _this = this;
                    this.blogService = blogService;
                    this.blogService.getEntries()
                        .subscribe(function (response) {
                        response.sort(function (a, b) {
                        });
                        _this.entries = response;
                    });
                }
                Blog.prototype.ngAfterViewInit = function () {
                };
                Blog = __decorate([
                    core_1.Component({
                        providers: [blog_service_1.BlogService],
                        template: "\n        <div class=\"blog fadeIn\">\n            <h1 class=\"header\" align=\"center\">B Log</h1>\n            <div class=\"entry\" *ngFor=\"#entry of entries\">\n                <div class=\"entry-header\">\n                    <h3 class=\"title\">{{entry.title}}</h3>\n                    <h3 class=\"date\">{{entry.date}}</h3>\n                </div>\n                <p [innerHTML]='entry.entry' class=\"words\"></p>\n            </div>\n        </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService])
                ], Blog);
                return Blog;
            }());
            exports_1("Blog", Blog);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBR0ksY0FBcUIsV0FBeUI7b0JBSGxELGlCQWlCQztvQkFkd0IsZ0JBQVcsR0FBWCxXQUFXLENBQWM7b0JBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO3lCQUM1QixTQUFTLENBQUUsVUFBQyxRQUFRO3dCQUVqQixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7d0JBRW5CLENBQUMsQ0FBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDhCQUFlLEdBQWY7Z0JBRUEsQ0FBQztnQkFsQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixTQUFTLEVBQUcsQ0FBQywwQkFBVyxDQUFDO3dCQUN6QixRQUFRLEVBQUcsb2RBWVY7cUJBRUosQ0FBQzs7d0JBQUE7Z0JBbUJGLFdBQUM7WUFBRCxDQUFDLEFBakJELElBaUJDO1lBakJELHVCQWlCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0Jsb2dTZXJ2aWNlfSBmcm9tICcuL2Jsb2cuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBwcm92aWRlcnMgOiBbQmxvZ1NlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2cgZmFkZUluXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRlclwiIGFsaWduPVwiY2VudGVyXCI+QiBMb2c8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW50cnlcIiAqbmdGb3I9XCIjZW50cnkgb2YgZW50cmllc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudHJ5LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+e3tlbnRyeS50aXRsZX19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkYXRlXCI+e3tlbnRyeS5kYXRlfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBbaW5uZXJIVE1MXT0nZW50cnkuZW50cnknIGNsYXNzPVwid29yZHNcIj48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIGBcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQmxvZyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgZW50cmllcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBibG9nU2VydmljZSA6IEJsb2dTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ibG9nU2VydmljZS5nZXRFbnRyaWVzKClcclxuICAgICAgICAuc3Vic2NyaWJlKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnNvcnQoKGEsIGIpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVudHJpZXMgPSByZXNwb25zZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQgKCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=