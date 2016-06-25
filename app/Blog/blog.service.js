System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var BlogService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            BlogService = (function () {
                function BlogService(http) {
                    this.http = http;
                }
                BlogService.prototype.getEntries = function () {
                    // return [
                    //     {
                    //         date : '24 June, 2016',
                    //         subject : "Building This",
                    //         entry : ""
                    //     }
                    // ];
                    var url = "http://localhost:3000/api/blogentries";
                    return this.http.get(url)
                        .map(function (response) {
                        if (response.status === 200) {
                            return response.json();
                        }
                        else {
                            throw new Error("Error");
                        }
                    });
                };
                BlogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BlogService);
                return BlogService;
            }());
            exports_1("BlogService", BlogService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBRUkscUJBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFFOUIsQ0FBQztnQkFDRCxnQ0FBVSxHQUFWO29CQUNJLFdBQVc7b0JBQ1gsUUFBUTtvQkFDUixrQ0FBa0M7b0JBQ2xDLHFDQUFxQztvQkFDckMscUJBQXFCO29CQUNyQixRQUFRO29CQUNSLEtBQUs7b0JBQ0wsSUFBSSxHQUFHLEdBQUcsdUNBQXVDLENBQUM7b0JBRWxELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7eUJBQ2pCLEdBQUcsQ0FBQyxVQUFDLFFBQVE7d0JBQ1YsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUN6QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMzQixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzdCLENBQUM7b0JBRUwsQ0FBQyxDQUFDLENBQUM7Z0JBRWQsQ0FBQztnQkEzQkw7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBNEJiLGtCQUFDO1lBQUQsQ0FBQyxBQTNCRCxJQTJCQztZQTNCRCxxQ0EyQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmxvZ1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBodHRwOiBIdHRwKSB7XG5cbiAgICB9XG4gICAgZ2V0RW50cmllcyAoKSB7XG4gICAgICAgIC8vIHJldHVybiBbXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgZGF0ZSA6ICcyNCBKdW5lLCAyMDE2JyxcbiAgICAgICAgLy8gICAgICAgICBzdWJqZWN0IDogXCJCdWlsZGluZyBUaGlzXCIsXG4gICAgICAgIC8vICAgICAgICAgZW50cnkgOiBcIlwiXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIF07XG4gICAgICAgIGxldCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ibG9nZW50cmllc2A7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxuICAgICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICB9KTtcblxuICAgIH1cbn1cbiJdfQ==