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
                    this.blogService = blogService;
                    //this.entries = this.blogService.getEntries();
                }
                Blog = __decorate([
                    core_1.Component({
                        providers: [blog_service_1.BlogService],
                        template: "\n        <div class=\"blog fadeIn\">\n            <h1 class=\"title\" align=\"center\">B Log</h1>\n        </div>\n        <div ngFor=\"#entry of entries\">\n\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService])
                ], Blog);
                return Blog;
            }());
            exports_1("Blog", Blog);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBR0ksY0FBcUIsV0FBeUI7b0JBQXpCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO29CQUMxQywrQ0FBK0M7Z0JBQ25ELENBQUM7Z0JBbEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsU0FBUyxFQUFHLENBQUMsMEJBQVcsQ0FBQzt3QkFDekIsUUFBUSxFQUFHLHVMQU9WO3FCQUVKLENBQUM7O3dCQUFBO2dCQVFGLFdBQUM7WUFBRCxDQUFDLEFBTkQsSUFNQztZQU5ELHVCQU1DLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Jsb2dTZXJ2aWNlfSBmcm9tICcuL2Jsb2cuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBwcm92aWRlcnMgOiBbQmxvZ1NlcnZpY2VdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZyBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCIgYWxpZ249XCJjZW50ZXJcIj5CIExvZzwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG5nRm9yPVwiI2VudHJ5IG9mIGVudHJpZXNcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBCbG9nIHtcbiAgICBlbnRyaWVzIDogT2JqZWN0W107XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBibG9nU2VydmljZSA6IEJsb2dTZXJ2aWNlKSB7XG4gICAgICAgIC8vdGhpcy5lbnRyaWVzID0gdGhpcy5ibG9nU2VydmljZS5nZXRFbnRyaWVzKCk7XG4gICAgfVxufVxuIl19