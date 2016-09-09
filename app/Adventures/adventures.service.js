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
                AdventureService.prototype.getPhotos = function (album) {
                    var params = new http_1.URLSearchParams();
                    params.set('album', album);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQ0ksMEJBQXFCLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztnQkFFOUIsQ0FBQztnQkFFRCxvQ0FBUyxHQUFULFVBQVUsS0FBSztvQkFDWCxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzNCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDO29CQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO3dCQUNkLE1BQU0sRUFBRSxNQUFNO3FCQUNqQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUTt3QkFDYixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQzNCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO3dCQUNuRSxDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUM7Z0JBdEJMO29CQUFDLGlCQUFVLEVBQUU7O29DQUFBO2dCQXVCYix1QkFBQztZQUFELENBQUMsQUFyQkQsSUFxQkM7WUFyQkQsK0NBcUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgVVJMU2VhcmNoUGFyYW1zfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgQWR2ZW50dXJlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDpIdHRwKSB7XG5cbiAgICB9XG5cbiAgICBnZXRQaG90b3MoYWxidW0pIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zLnNldCgnYWxidW0nLCBhbGJ1bSk7XG4gICAgICAgIGxldCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4gKyBgL2FwaS9hZHZlbnR1cmVwaG90b3NgO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXNcbiAgICAgICAgICAgICAgICB9KS5tYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlc3BvbnNlIGZyb20gbXVuaWNpcGFsaXR5Lmhlcm9rdWFwcC5jb21cIik7XG4gICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=