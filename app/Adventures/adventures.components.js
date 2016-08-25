System.register(['@angular/core'], function(exports_1, context_1) {
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
    var PresentationHeader, SeasonDefault, PhotoGallery;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                function PhotoGallery() {
                }
                PhotoGallery = __decorate([
                    core_1.Component({
                        template: "\n        <div *ngFor=\"let item of images\">\n\n        </div>\n    ",
                        selector: "photogallery",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PhotoGallery);
                return PhotoGallery;
            }());
            exports_1("PhotoGallery", PhotoGallery);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5jb21wb25lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFaTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxxQkFBcUI7d0JBQ2hDLFFBQVEsRUFBRyxnR0FJVjtxQkFDSixDQUFDOztzQ0FBQTtnQkFNRix5QkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsbURBSUMsQ0FBQTtZQVVEO2dCQUNJO2dCQUVBLENBQUM7Z0JBWEw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUseUNBSVQ7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBTUYsb0JBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELHlDQUlDLENBQUE7WUFXRDtnQkFHSTtnQkFFQSxDQUFDO2dCQWRMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLHVFQUlWO3dCQUNELFFBQVEsRUFBRyxjQUFjO3FCQUM1QixDQUFDOztnQ0FBQTtnQkFRRixtQkFBQztZQUFELENBQUMsQUFORCxJQU1DO1lBTkQsdUNBTUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ3ByZXNlbnRhdGlvbi1oZWFkZXInLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgPHA+PCBCYWNrPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUHJlc2VudGF0aW9uSGVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cbkBDb21wb25lbnQgKHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFzb25EZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cbkBDb21wb25lbnQgKHtcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpbWFnZXNcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHNlbGVjdG9yIDogYHBob3RvZ2FsbGVyeWAsXG59KVxuXG5leHBvcnQgY2xhc3MgUGhvdG9HYWxsZXJ5IHtcbiAgICBpbWFnZXM7XG4gICAgZm9sZGVybmFtZTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG4iXX0=