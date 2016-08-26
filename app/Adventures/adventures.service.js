System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AdventureService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AdventureService = (function () {
                function AdventureService(http) {
                    this.http = http;
                }
                AdventureService.prototype.getPhotos = function (adventureFolderName) {
                    var params = new http_1.URLSearchParams();
                    params.set('foldername', adventureFolderName);
                    var url = document.location.origin + "/api/adventurephotos";
                    return this.http.get(url, {
                        search: params
                    }).map(function (response) {
                        if (response.status === 200) {
                            return response.json();
                        }
                        else {
                            throw new Error("No response from municipality.herokuapp.com");
                        }
                    });
                };
                AdventureService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AdventureService);
                return AdventureService;
            }());
            exports_1("AdventureService", AdventureService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQ0ksMEJBQXFCLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztnQkFFOUIsQ0FBQztnQkFFRCxvQ0FBUyxHQUFULFVBQVUsbUJBQW1CO29CQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7b0JBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7d0JBQ2QsTUFBTSxFQUFFLE1BQU07cUJBQ2pCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFRO3dCQUNiLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDM0IsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7d0JBQ25FLENBQUM7b0JBRUwsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQztnQkF0Qkw7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBdUJiLHVCQUFDO1lBQUQsQ0FBQyxBQXJCRCxJQXFCQztZQXJCRCwrQ0FxQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBBZHZlbnR1cmVTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOkh0dHApIHtcblxuICAgIH1cblxuICAgIGdldFBob3RvcyhhZHZlbnR1cmVGb2xkZXJOYW1lKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ2ZvbGRlcm5hbWUnLCBhZHZlbnR1cmVGb2xkZXJOYW1lKTtcbiAgICAgICAgbGV0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbiArIGAvYXBpL2FkdmVudHVyZXBob3Rvc2A7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICAgICAgICAgIH0pLm1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZnJvbSBtdW5pY2lwYWxpdHkuaGVyb2t1YXBwLmNvbVwiKTtcbiAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==