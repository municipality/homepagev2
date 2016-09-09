System.register([], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var seasons, seasonItems;
    return {
        setters:[],
        execute: function() {
            exports_1("seasons", seasons = [{
                    path: 'Summer2016',
                    name: 'Summer 2016'
                }, {
                    path: 'Fall2016',
                    name: 'Fall 2016'
                }, {
                    path: 'Winter2017',
                    name: 'Winter 2017'
                }]);
            exports_1("seasonItems", seasonItems = {
                Summer2016: [
                    {
                        display: "Los Angeles",
                        path: "Summer2016LosAngeles",
                        dateStart: "July 1",
                        dateEnd: "July 3"
                    },
                    {
                        display: "AFX Photoshoot",
                        path: "Summer2016AFXPhotoshoot"
                    }
                ],
                Fall2016: [],
                Winter2017: []
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5zZWFzb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5zZWFzb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFBQSxZQUFZLENBQUM7O1FBRUYsT0FBTyxFQVdQLFdBQVc7Ozs7WUFYWCxxQkFBQSxPQUFPLEdBQUcsQ0FBQztvQkFDbEIsSUFBSSxFQUFHLFlBQVk7b0JBQ25CLElBQUksRUFBRyxhQUFhO2lCQUN2QixFQUFDO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsV0FBVztpQkFDcEIsRUFBQztvQkFDRSxJQUFJLEVBQUcsWUFBWTtvQkFDbkIsSUFBSSxFQUFHLGFBQWE7aUJBQ3ZCLENBQUMsQ0FBQSxDQUFDO1lBRVEseUJBQUEsV0FBVyxHQUFHO2dCQUNyQixVQUFVLEVBQUc7b0JBQ1Q7d0JBQ0ksT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLElBQUksRUFBRSxzQkFBc0I7d0JBQzVCLFNBQVMsRUFBRSxRQUFRO3dCQUNuQixPQUFPLEVBQUUsUUFBUTtxQkFDcEI7b0JBQ0Q7d0JBQ0ksT0FBTyxFQUFFLGdCQUFnQjt3QkFDekIsSUFBSSxFQUFFLHlCQUF5QjtxQkFDbEM7aUJBQ0o7Z0JBQ0QsUUFBUSxFQUFHLEVBRVY7Z0JBQ0QsVUFBVSxFQUFHLEVBRVo7YUFDSixDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB2YXIgc2Vhc29ucyA9IFt7XG4gICAgcGF0aCA6ICdTdW1tZXIyMDE2JyxcbiAgICBuYW1lIDogJ1N1bW1lciAyMDE2J1xufSx7XG4gICAgcGF0aDogJ0ZhbGwyMDE2JyxcbiAgICBuYW1lOiAnRmFsbCAyMDE2J1xufSx7XG4gICAgcGF0aCA6ICdXaW50ZXIyMDE3JyxcbiAgICBuYW1lIDogJ1dpbnRlciAyMDE3J1xufV07XG5cbmV4cG9ydCB2YXIgc2Vhc29uSXRlbXMgPSB7XG4gICAgU3VtbWVyMjAxNiA6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGlzcGxheTogXCJMb3MgQW5nZWxlc1wiLFxuICAgICAgICAgICAgcGF0aDogXCJTdW1tZXIyMDE2TG9zQW5nZWxlc1wiLFxuICAgICAgICAgICAgZGF0ZVN0YXJ0OiBcIkp1bHkgMVwiLFxuICAgICAgICAgICAgZGF0ZUVuZDogXCJKdWx5IDNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcIkFGWCBQaG90b3Nob290XCIsXG4gICAgICAgICAgICBwYXRoOiBcIlN1bW1lcjIwMTZBRlhQaG90b3Nob290XCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgRmFsbDIwMTYgOiBbXG5cbiAgICBdLFxuICAgIFdpbnRlcjIwMTcgOiBbXG5cbiAgICBdXG59O1xuIl19