System.register(['@angular/core', '@angular/router-deprecated', './adventures.service'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, adventures_service_1;
    var PresentationHeader, SeasonDefault, PhotoGallery;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
                function PhotoGallery(adventureService, data) {
                    var _this = this;
                    this.adventureService = adventureService;
                    this.data = data;
                    //Workaround for getting router path
                    this.foldername = data.data["album"];
                    //Call service to call api to get photos
                    this.adventureService.getPhotos(this.foldername).subscribe(function (response) {
                        _this.photos = response.photoset.photo;
                        _this.getPhotoUrls();
                    });
                }
                PhotoGallery.prototype.handleClick = function (item) {
                };
                PhotoGallery.prototype.ngDoCheck = function () {
                    var _this = this;
                    var url = document.location.pathname;
                    var newPath = url.substring(url.lastIndexOf("/") + 1).toLowerCase();
                    if (this.foldername !== newPath) {
                        this.foldername = newPath;
                        //Call service to call api to get photos
                        this.adventureService.getPhotos(this.foldername).subscribe(function (response) {
                            _this.photos = response.photoset.photo;
                            _this.getPhotoUrls();
                        });
                    }
                };
                //Set photos[i].url to image url
                PhotoGallery.prototype.getPhotoUrls = function () {
                    var _this = this;
                    this.photos.forEach(function (val, index, arr) {
                        arr[index]["url"] = _this.buildUrl(val.farm, val.server, val.id, val.secret);
                    });
                    console.log(this.photos);
                };
                PhotoGallery.prototype.buildUrl = function (farm, server, id, secret) {
                    return "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg";
                };
                PhotoGallery = __decorate([
                    core_1.Component({
                        template: "\n        <div *ngFor=\"let item of photos\" class=\"photo\" tabindex=\"0\" (click)=\"handleClick(item)\">\n            <img src={{item.url}}>\n        </div>\n    ",
                        selector: "photogallery"
                    }), 
                    __metadata('design:paramtypes', [adventures_service_1.AdventureService, router_deprecated_1.RouteData])
                ], PhotoGallery);
                return PhotoGallery;
            }());
            exports_1("PhotoGallery", PhotoGallery);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5jb21wb25lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5jb21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFaTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxxQkFBcUI7d0JBQ2hDLFFBQVEsRUFBRyxnR0FJVjtxQkFDSixDQUFDOztzQ0FBQTtnQkFNRix5QkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsbURBSUMsQ0FBQTtZQVVEO2dCQUNJO2dCQUVBLENBQUM7Z0JBWEw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUseUNBSVQ7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBTUYsb0JBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELHlDQUlDLENBQUE7WUFZRDtnQkFHSSxzQkFBcUIsZ0JBQWlDLEVBQVUsSUFBZTtvQkFIbkYsaUJBOENDO29CQTNDd0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFBVSxTQUFJLEdBQUosSUFBSSxDQUFXO29CQUMzRSxvQ0FBb0M7b0JBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFckMsd0NBQXdDO29CQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO3dCQUVoRSxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO3dCQUN0QyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsa0NBQVcsR0FBWCxVQUFZLElBQUk7Z0JBRWhCLENBQUM7Z0JBR0QsZ0NBQVMsR0FBVDtvQkFBQSxpQkFhQztvQkFaRyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFDckMsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNwRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO3dCQUUxQix3Q0FBd0M7d0JBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7NEJBRWhFLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7NEJBQ3RDLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDeEIsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGdDQUFnQztnQkFDaEMsbUNBQVksR0FBWjtvQkFBQSxpQkFLQztvQkFKRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRzt3QkFDaEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoRixDQUFDLENBQUMsQ0FBQztvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCwrQkFBUSxHQUFSLFVBQVMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTTtvQkFDN0IsTUFBTSxDQUFDLGlCQUFlLElBQUksMEJBQXFCLE1BQU0sU0FBSSxFQUFFLFNBQUksTUFBTSxTQUFNLENBQUM7Z0JBQ2hGLENBQUM7Z0JBdkRMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLHNLQUlWO3dCQUNELFFBQVEsRUFBRyxjQUFjO3FCQUM1QixDQUFDOztnQ0FBQTtnQkFpREYsbUJBQUM7WUFBRCxDQUFDLEFBOUNELElBOENDO1lBOUNELHVDQThDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlRGF0YX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHtBZHZlbnR1cmVTZXJ2aWNlfSBmcm9tICcuL2FkdmVudHVyZXMuc2VydmljZSc7XG5pbXBvcnQge0RvQ2hlY2t9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAncHJlc2VudGF0aW9uLWhlYWRlcicsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzZW50YXRpb24taGVhZGVyXCI+XG4gICAgICAgICAgICA8cD48IEJhY2s8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcmVzZW50YXRpb25IZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cbn1cblxuQENvbXBvbmVudCAoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXNvbkRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cbn1cblxuQENvbXBvbmVudCAoe1xuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBob3Rvc1wiIGNsYXNzPVwicGhvdG9cIiB0YWJpbmRleD1cIjBcIiAoY2xpY2spPVwiaGFuZGxlQ2xpY2soaXRlbSlcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt7aXRlbS51cmx9fT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzZWxlY3RvciA6IGBwaG90b2dhbGxlcnlgXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBQaG90b0dhbGxlcnkgaW1wbGVtZW50cyBEb0NoZWNre1xuICAgIHBob3RvcyA6IGFueVtdO1xuICAgIGZvbGRlcm5hbWUgOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYWR2ZW50dXJlU2VydmljZTpBZHZlbnR1cmVTZXJ2aWNlLCBwcml2YXRlIGRhdGE6IFJvdXRlRGF0YSkge1xuICAgICAgICAvL1dvcmthcm91bmQgZm9yIGdldHRpbmcgcm91dGVyIHBhdGhcbiAgICAgICAgdGhpcy5mb2xkZXJuYW1lID0gZGF0YS5kYXRhW1wiYWxidW1cIl07XG5cbiAgICAgICAgLy9DYWxsIHNlcnZpY2UgdG8gY2FsbCBhcGkgdG8gZ2V0IHBob3Rvc1xuICAgICAgICB0aGlzLmFkdmVudHVyZVNlcnZpY2UuZ2V0UGhvdG9zKHRoaXMuZm9sZGVybmFtZSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnBob3RvcyA9IHJlc3BvbnNlLnBob3Rvc2V0LnBob3RvO1xuICAgICAgICAgICAgdGhpcy5nZXRQaG90b1VybHMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soaXRlbSkge1xuXG4gICAgfVxuXG5cbiAgICBuZ0RvQ2hlY2sgKCkge1xuICAgICAgICBsZXQgdXJsID0gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIHZhciBuZXdQYXRoID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoXCIvXCIpICsgMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYodGhpcy5mb2xkZXJuYW1lICE9PSBuZXdQYXRoKSB7XG4gICAgICAgICAgICB0aGlzLmZvbGRlcm5hbWUgPSBuZXdQYXRoO1xuXG4gICAgICAgICAgICAvL0NhbGwgc2VydmljZSB0byBjYWxsIGFwaSB0byBnZXQgcGhvdG9zXG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZVNlcnZpY2UuZ2V0UGhvdG9zKHRoaXMuZm9sZGVybmFtZSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5waG90b3MgPSByZXNwb25zZS5waG90b3NldC5waG90bztcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBob3RvVXJscygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL1NldCBwaG90b3NbaV0udXJsIHRvIGltYWdlIHVybFxuICAgIGdldFBob3RvVXJscygpIHtcbiAgICAgICAgdGhpcy5waG90b3MuZm9yRWFjaCgodmFsLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgICAgICBhcnJbaW5kZXhdW1widXJsXCJdID0gdGhpcy5idWlsZFVybCh2YWwuZmFybSwgdmFsLnNlcnZlciwgdmFsLmlkLCB2YWwuc2VjcmV0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGhvdG9zKTtcbiAgICB9XG5cbiAgICBidWlsZFVybChmYXJtLCBzZXJ2ZXIsIGlkLCBzZWNyZXQpIHtcbiAgICAgICAgcmV0dXJuIGBodHRwczovL2Zhcm0ke2Zhcm19LnN0YXRpY2ZsaWNrci5jb20vJHtzZXJ2ZXJ9LyR7aWR9XyR7c2VjcmV0fS5qcGdgO1xuICAgIH1cbn1cbiJdfQ==