System.register(['angular2/core', './mobile.service'], function(exports_1, context_1) {
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
    var core_1, mobile_service_1;
    var Designs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            Designs = (function () {
                function Designs(mobileService) {
                    this.mobileService = mobileService;
                }
                Designs.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    if (!this.mobileService.isIOS()) {
                        document.addEventListener('scroll', function (e) {
                            setTimeout(function () {
                                var scrollTop = window.pageYOffset;
                                _this.image.nativeElement.style["background-position"] = "right " + (-scrollTop * .1) + "px";
                            }, 1000 / 60);
                        });
                    }
                };
                __decorate([
                    core_1.ViewChild('image'), 
                    __metadata('design:type', core_1.ElementRef)
                ], Designs.prototype, "image", void 0);
                Designs = __decorate([
                    core_1.Component({
                        template: "\n        <div class=\"designs fadeIn\">\n            <div #image class=\"intro\">\n\n            </div>\n            <div class=\"container\">\n                <h1 class=\"title\" align=\"center\">Designs</h1>\n                <p class=\"description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare rutrum sem, vitae malesuada tortor pellentesque sit amet. Sed pharetra nibh diam, non accumsan libero fringilla non. Sed nunc nulla, porta euismod efficitur ac, porta et dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lacinia in sapien vel euismod. Donec rhoncus leo rutrum dictum laoreet. Sed a metus nec erat euismod porttitor vitae ac purus. Fusce fermentum odio nec metus fermentum, sed consectetur turpis efficitur.</p>\n                \n            </div>\n        </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [mobile_service_1.MobileService])
                ], Designs);
                return Designs;
            }());
            exports_1("Designs", Designs);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWducy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlc2lnbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBSUksaUJBQXFCLGFBQTZCO29CQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7Z0JBRWxELENBQUM7Z0JBRUQsaUNBQWUsR0FBZjtvQkFBQSxpQkFTQztvQkFSRyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzs0QkFDbEMsVUFBVSxDQUFDO2dDQUNQLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0NBQ25DLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQzs0QkFDaEcsQ0FBQyxFQUFFLElBQUksR0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDaEIsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUMsT0FBTyxDQUFDOztzREFBQTtnQkFsQnZCO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLGsyQkFZVjtxQkFDSixDQUFDOzsyQkFBQTtnQkFvQkYsY0FBQztZQUFELENBQUMsQUFsQkQsSUFrQkM7WUFsQkQsNkJBa0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtNb2JpbGVTZXJ2aWNlfSBmcm9tICcuL21vYmlsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWducyBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxkaXYgI2ltYWdlIGNsYXNzPVwiaW50cm9cIj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIiBhbGlnbj1cImNlbnRlclwiPkRlc2lnbnM8L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gb3JuYXJlIHJ1dHJ1bSBzZW0sIHZpdGFlIG1hbGVzdWFkYSB0b3J0b3IgcGVsbGVudGVzcXVlIHNpdCBhbWV0LiBTZWQgcGhhcmV0cmEgbmliaCBkaWFtLCBub24gYWNjdW1zYW4gbGliZXJvIGZyaW5naWxsYSBub24uIFNlZCBudW5jIG51bGxhLCBwb3J0YSBldWlzbW9kIGVmZmljaXR1ciBhYywgcG9ydGEgZXQgZHVpLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gRG9uZWMgbGFjaW5pYSBpbiBzYXBpZW4gdmVsIGV1aXNtb2QuIERvbmVjIHJob25jdXMgbGVvIHJ1dHJ1bSBkaWN0dW0gbGFvcmVldC4gU2VkIGEgbWV0dXMgbmVjIGVyYXQgZXVpc21vZCBwb3J0dGl0b3Igdml0YWUgYWMgcHVydXMuIEZ1c2NlIGZlcm1lbnR1bSBvZGlvIG5lYyBtZXR1cyBmZXJtZW50dW0sIHNlZCBjb25zZWN0ZXR1ciB0dXJwaXMgZWZmaWNpdHVyLjwvcD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBEZXNpZ25zIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdpbWFnZScpIGltYWdlIDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIG1vYmlsZVNlcnZpY2UgOiBNb2JpbGVTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQgKCkge1xuICAgICAgICBpZighdGhpcy5tb2JpbGVTZXJ2aWNlLmlzSU9TKCkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudC5zdHlsZVtcImJhY2tncm91bmQtcG9zaXRpb25cIl0gPSBcInJpZ2h0IFwiICsgKC1zY3JvbGxUb3AgKiAuMSkgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgfSwgMTAwMC82MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==