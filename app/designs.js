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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWducy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlc2lnbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBSUksaUJBQXFCLGFBQTZCO29CQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7Z0JBRWxELENBQUM7Z0JBRUQsaUNBQWUsR0FBZjtvQkFBQSxpQkFTQztvQkFSRyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzs0QkFDbEMsVUFBVSxDQUFDO2dDQUNQLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0NBQ25DLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQzs0QkFDaEcsQ0FBQyxFQUFFLElBQUksR0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDaEIsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUMsT0FBTyxDQUFDOztzREFBQTtnQkFsQnZCO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLGsyQkFZVjtxQkFDSixDQUFDOzsyQkFBQTtnQkFvQkYsY0FBQztZQUFELENBQUMsQUFsQkQsSUFrQkM7WUFsQkQsNkJBa0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbmltcG9ydCB7TW9iaWxlU2VydmljZX0gZnJvbSAnLi9tb2JpbGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWducyBmYWRlSW5cIj5cclxuICAgICAgICAgICAgPGRpdiAjaW1hZ2UgY2xhc3M9XCJpbnRyb1wiPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCIgYWxpZ249XCJjZW50ZXJcIj5EZXNpZ25zPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gb3JuYXJlIHJ1dHJ1bSBzZW0sIHZpdGFlIG1hbGVzdWFkYSB0b3J0b3IgcGVsbGVudGVzcXVlIHNpdCBhbWV0LiBTZWQgcGhhcmV0cmEgbmliaCBkaWFtLCBub24gYWNjdW1zYW4gbGliZXJvIGZyaW5naWxsYSBub24uIFNlZCBudW5jIG51bGxhLCBwb3J0YSBldWlzbW9kIGVmZmljaXR1ciBhYywgcG9ydGEgZXQgZHVpLiBQZWxsZW50ZXNxdWUgaGFiaXRhbnQgbW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3Rhcy4gRG9uZWMgbGFjaW5pYSBpbiBzYXBpZW4gdmVsIGV1aXNtb2QuIERvbmVjIHJob25jdXMgbGVvIHJ1dHJ1bSBkaWN0dW0gbGFvcmVldC4gU2VkIGEgbWV0dXMgbmVjIGVyYXQgZXVpc21vZCBwb3J0dGl0b3Igdml0YWUgYWMgcHVydXMuIEZ1c2NlIGZlcm1lbnR1bSBvZGlvIG5lYyBtZXR1cyBmZXJtZW50dW0sIHNlZCBjb25zZWN0ZXR1ciB0dXJwaXMgZWZmaWNpdHVyLjwvcD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGVzaWducyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2ltYWdlJykgaW1hZ2UgOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIG1vYmlsZVNlcnZpY2UgOiBNb2JpbGVTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCAoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMubW9iaWxlU2VydmljZS5pc0lPUygpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UubmF0aXZlRWxlbWVudC5zdHlsZVtcImJhY2tncm91bmQtcG9zaXRpb25cIl0gPSBcInJpZ2h0IFwiICsgKC1zY3JvbGxUb3AgKiAuMSkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwLzYwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==