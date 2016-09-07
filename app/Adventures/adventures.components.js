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
                        console.log(response);
                    });
                }
                PhotoGallery.prototype.handleClick = function (item) {
                };
                PhotoGallery = __decorate([
                    core_1.Component({
                        template: "\n        <div *ngFor=\"let item of photos\" class=\"photo\" tabindex=\"0\" (click)=\"handleClick(item)\">\n            <img src={{item}}>\n        </div>\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5jb21wb25lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFaTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxxQkFBcUI7d0JBQ2hDLFFBQVEsRUFBRyxnR0FJVjtxQkFDSixDQUFDOztzQ0FBQTtnQkFNRix5QkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsbURBSUMsQ0FBQTtZQVVEO2dCQUNJO2dCQUVBLENBQUM7Z0JBWEw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUseUNBSVQ7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBTUYsb0JBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELHlDQUlDLENBQUE7WUFZRDtnQkFHSSxzQkFBcUIsZ0JBQWlDO29CQUgxRCxpQkFrQkM7b0JBZndCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBQ2xELG9DQUFvQztvQkFDcEMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUV4RSx3Q0FBd0M7b0JBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7d0JBQ2hFLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO3dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELGtDQUFXLEdBQVgsVUFBWSxJQUFJO2dCQUVoQixDQUFDO2dCQTNCTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxrS0FJVjt3QkFDRCxRQUFRLEVBQUcsY0FBYztxQkFDNUIsQ0FBQzs7Z0NBQUE7Z0JBcUJGLG1CQUFDO1lBQUQsQ0FBQyxBQWxCRCxJQWtCQztZQWxCRCx1Q0FrQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5pbXBvcnQge0FkdmVudHVyZVNlcnZpY2V9IGZyb20gJy4vYWR2ZW50dXJlcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ3ByZXNlbnRhdGlvbi1oZWFkZXInLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgPHA+PCBCYWNrPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUHJlc2VudGF0aW9uSGVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cbkBDb21wb25lbnQgKHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFzb25EZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cbkBDb21wb25lbnQgKHtcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwaG90b3NcIiBjbGFzcz1cInBob3RvXCIgdGFiaW5kZXg9XCIwXCIgKGNsaWNrKT1cImhhbmRsZUNsaWNrKGl0ZW0pXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17e2l0ZW19fT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzZWxlY3RvciA6IGBwaG90b2dhbGxlcnlgXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBQaG90b0dhbGxlcnkge1xuICAgIHBob3RvcyA6IGFueVtdO1xuICAgIGZvbGRlcm5hbWUgOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYWR2ZW50dXJlU2VydmljZTpBZHZlbnR1cmVTZXJ2aWNlKSB7XG4gICAgICAgIC8vV29ya2Fyb3VuZCBmb3IgZ2V0dGluZyByb3V0ZXIgcGF0aFxuICAgICAgICBsZXQgdXJsID0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIHRoaXMuZm9sZGVybmFtZSA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKFwiL1wiKSArIDEpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy9DYWxsIHNlcnZpY2UgdG8gY2FsbCBhcGkgdG8gZ2V0IHBob3Rvc1xuICAgICAgICB0aGlzLmFkdmVudHVyZVNlcnZpY2UuZ2V0UGhvdG9zKHRoaXMuZm9sZGVybmFtZSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5waG90b3MgPSByZXNwb25zZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soaXRlbSkge1xuXG4gICAgfVxufVxuIl19