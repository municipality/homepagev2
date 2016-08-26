System.register(['@angular/core', './adventures.service'], function(exports_1, context_1) {
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
    var core_1, adventures_service_1;
    var PresentationHeader, SeasonDefault, PhotoGallery;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (adventures_service_1_1) {
                adventures_service_1 = adventures_service_1_1;
            }],
        execute: function() {
            PresentationHeader = (function () {
                function PresentationHeader() {
                }
                PresentationHeader = __decorate([
                    core_1.Component({
                        selector: 'presentation-header',
                        template: "\n        <div class=\"presentation-header\">\n            <p>< Back</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PresentationHeader);
                return PresentationHeader;
            }());
            exports_1("PresentationHeader", PresentationHeader);
            SeasonDefault = (function () {
                function SeasonDefault() {
                }
                SeasonDefault = __decorate([
                    core_1.Component({
                        template: "\n        <div>\n\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SeasonDefault);
                return SeasonDefault;
            }());
            exports_1("SeasonDefault", SeasonDefault);
            PhotoGallery = (function () {
                function PhotoGallery(adventureService) {
                    var _this = this;
                    this.adventureService = adventureService;
                    //Workaround for getting router path
                    var url = document.location.pathname;
                    this.foldername = url.substring(url.lastIndexOf("/") + 1).toLowerCase();
                    //Call service to call api to get photos
                    this.adventureService.getPhotos(this.foldername).subscribe(function (response) {
                        _this.photos = response;
                    });
                }
                PhotoGallery = __decorate([
                    core_1.Component({
                        template: "\n        <div *ngFor=\"let item of photos\" class=\"\">\n\n        </div>\n    ",
                        selector: "photogallery"
                    }), 
                    __metadata('design:paramtypes', [adventures_service_1.AdventureService])
                ], PhotoGallery);
                return PhotoGallery;
            }());
            exports_1("PhotoGallery", PhotoGallery);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5jb21wb25lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFaTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxxQkFBcUI7d0JBQ2hDLFFBQVEsRUFBRyxnR0FJVjtxQkFDSixDQUFDOztzQ0FBQTtnQkFNRix5QkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsbURBSUMsQ0FBQTtZQVVEO2dCQUNJO2dCQUVBLENBQUM7Z0JBWEw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUseUNBSVQ7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBTUYsb0JBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELHlDQUlDLENBQUE7WUFZRDtnQkFHSSxzQkFBcUIsZ0JBQWlDO29CQUgxRCxpQkFhQztvQkFWd0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFDbEQsb0NBQW9DO29CQUNwQyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRXhFLHdDQUF3QztvQkFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTt3QkFDaEUsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBdEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLGtGQUlWO3dCQUNELFFBQVEsRUFBRyxjQUFjO3FCQUM1QixDQUFDOztnQ0FBQTtnQkFnQkYsbUJBQUM7WUFBRCxDQUFDLEFBYkQsSUFhQztZQWJELHVDQWFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHtBZHZlbnR1cmVTZXJ2aWNlfSBmcm9tICcuL2FkdmVudHVyZXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdwcmVzZW50YXRpb24taGVhZGVyJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxwPjwgQmFjazwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFByZXNlbnRhdGlvbkhlYWRlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxufVxuXG5AQ29tcG9uZW50ICh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgU2Vhc29uRGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxufVxuXG5AQ29tcG9uZW50ICh7XG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGhvdG9zXCIgY2xhc3M9XCJcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHNlbGVjdG9yIDogYHBob3RvZ2FsbGVyeWBcbn0pXG5cblxuZXhwb3J0IGNsYXNzIFBob3RvR2FsbGVyeSB7XG4gICAgcGhvdG9zIDogYW55W107XG4gICAgZm9sZGVybmFtZSA6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBhZHZlbnR1cmVTZXJ2aWNlOkFkdmVudHVyZVNlcnZpY2UpIHtcbiAgICAgICAgLy9Xb3JrYXJvdW5kIGZvciBnZXR0aW5nIHJvdXRlciBwYXRoXG4gICAgICAgIGxldCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgdGhpcy5mb2xkZXJuYW1lID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoXCIvXCIpICsgMSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvL0NhbGwgc2VydmljZSB0byBjYWxsIGFwaSB0byBnZXQgcGhvdG9zXG4gICAgICAgIHRoaXMuYWR2ZW50dXJlU2VydmljZS5nZXRQaG90b3ModGhpcy5mb2xkZXJuYW1lKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBob3RvcyA9IHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=