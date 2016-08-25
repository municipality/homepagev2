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
    var DesignsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DesignsService = (function () {
                function DesignsService() {
                }
                DesignsService.prototype.getProjects = function () {
                    return [
                        {
                            title: "Scroll Art",
                            url: "http://scrollart.herokuapp.com",
                            image: 'images/scroll-art.png'
                        },
                        {
                            title: 'Photo Wall',
                            url: 'http://brians-photo-wall.herokuapp.com',
                            image: 'images/photo-wall.png'
                        },
                        {
                            title: 'About Brian Lee',
                            url: 'http://about-brian-lee.herokuapp.com',
                            image: 'images/about-brian-lee.png'
                        }
                    ];
                    // let url = `http://municipality.herokuapp.com/api/projects`;
                    // return this.http.get(url)
                    //        .map((response) => {
                    //            if(response.status === 200) {
                    //                return response.json();
                    //            }
                    //            else {
                    //                throw new Error("No response from municipality.herokuapp.com");
                    //            }
                    //
                    //        });
                };
                DesignsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DesignsService);
                return DesignsService;
            }());
            exports_1("DesignsService", DesignsService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWducy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVzaWducy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBaUNBLENBQUM7Z0JBL0JHLG9DQUFXLEdBQVg7b0JBQ0ksTUFBTSxDQUFDO3dCQUVLOzRCQUNJLEtBQUssRUFBRyxZQUFZOzRCQUNwQixHQUFHLEVBQUcsZ0NBQWdDOzRCQUN0QyxLQUFLLEVBQUcsdUJBQXVCO3lCQUNsQzt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsWUFBWTs0QkFDcEIsR0FBRyxFQUFHLHdDQUF3Qzs0QkFDOUMsS0FBSyxFQUFHLHVCQUF1Qjt5QkFDbEM7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLGlCQUFpQjs0QkFDekIsR0FBRyxFQUFHLHNDQUFzQzs0QkFDNUMsS0FBSyxFQUFHLDRCQUE0Qjt5QkFDdkM7cUJBQ0osQ0FBQztvQkFDViw4REFBOEQ7b0JBQzlELDRCQUE0QjtvQkFDNUIsOEJBQThCO29CQUM5QiwyQ0FBMkM7b0JBQzNDLHlDQUF5QztvQkFDekMsZUFBZTtvQkFDZixvQkFBb0I7b0JBQ3BCLGlGQUFpRjtvQkFDakYsZUFBZTtvQkFDZixFQUFFO29CQUNGLGFBQWE7Z0JBQ2pCLENBQUM7Z0JBbENMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQW1DYixxQkFBQztZQUFELENBQUMsQUFqQ0QsSUFpQ0M7WUFqQ0QsMkNBaUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIERlc2lnbnNTZXJ2aWNlIHtcblxuICAgIGdldFByb2plY3RzICgpIHtcbiAgICAgICAgcmV0dXJuIFtcblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6IFwiU2Nyb2xsIEFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogXCJodHRwOi8vc2Nyb2xsYXJ0Lmhlcm9rdWFwcC5jb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlIDogJ2ltYWdlcy9zY3JvbGwtYXJ0LnBuZydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnUGhvdG8gV2FsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgOiAnaHR0cDovL2JyaWFucy1waG90by13YWxsLmhlcm9rdWFwcC5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgOiAnaW1hZ2VzL3Bob3RvLXdhbGwucG5nJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdBYm91dCBCcmlhbiBMZWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogJ2h0dHA6Ly9hYm91dC1icmlhbi1sZWUuaGVyb2t1YXBwLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA6ICdpbWFnZXMvYWJvdXQtYnJpYW4tbGVlLnBuZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgIC8vIGxldCB1cmwgPSBgaHR0cDovL211bmljaXBhbGl0eS5oZXJva3VhcHAuY29tL2FwaS9wcm9qZWN0c2A7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcbiAgICAgICAgLy8gICAgICAgIC5tYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgLy8gICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlc3BvbnNlIGZyb20gbXVuaWNpcGFsaXR5Lmhlcm9rdWFwcC5jb21cIik7XG4gICAgICAgIC8vICAgICAgICAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgfSk7XG4gICAgfVxufVxuIl19