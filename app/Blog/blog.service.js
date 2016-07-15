System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
            },
            function (_1) {}],
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
                    var url = "http://blee.herokuapp.com/api/blogentries";
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
                    // to use map function
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BlogService);
                return BlogService;
            }());
            exports_1("BlogService", BlogService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUVJLHFCQUFvQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07Z0JBRTlCLENBQUM7Z0JBQ0QsZ0NBQVUsR0FBVjtvQkFDSSxXQUFXO29CQUNYLFFBQVE7b0JBQ1Isa0NBQWtDO29CQUNsQyxxQ0FBcUM7b0JBQ3JDLHFCQUFxQjtvQkFDckIsUUFBUTtvQkFDUixLQUFLO29CQUNMLElBQUksR0FBRyxHQUFHLDJDQUEyQyxDQUFDO29CQUV0RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3lCQUNqQixHQUFHLENBQUMsVUFBQyxRQUFRO3dCQUNWLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDM0IsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM3QixDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUVkLENBQUM7Z0JBM0JMO29CQUZrQixzQkFBc0I7b0JBRXZDLGlCQUFVLEVBQUU7OytCQUFBO2dCQTRCYixrQkFBQztZQUFELENBQUMsQUEzQkQsSUEyQkM7WUEzQkQscUNBMkJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCAncnhqcy9SeCc7IC8vIHRvIHVzZSBtYXAgZnVuY3Rpb25cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJsb2dTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaHR0cDogSHR0cCkge1xuXG4gICAgfVxuICAgIGdldEVudHJpZXMgKCkge1xuICAgICAgICAvLyByZXR1cm4gW1xuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGRhdGUgOiAnMjQgSnVuZSwgMjAxNicsXG4gICAgICAgIC8vICAgICAgICAgc3ViamVjdCA6IFwiQnVpbGRpbmcgVGhpc1wiLFxuICAgICAgICAvLyAgICAgICAgIGVudHJ5IDogXCJcIlxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyBdO1xuICAgICAgICBsZXQgdXJsID0gYGh0dHA6Ly9ibGVlLmhlcm9rdWFwcC5jb20vYXBpL2Jsb2dlbnRyaWVzYDtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpXG4gICAgICAgICAgICAgICAubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIH0pO1xuXG4gICAgfVxufVxuIl19