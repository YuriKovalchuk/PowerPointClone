///<reference path="../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons', '../DAL/Model/SlideTitleWithImage', '../DAL/Model/SlideTitleWithText', '../DAL/Model/SlideWithTitleOnly', '../DAL/RepositoryManager'], function (require, exports, React, SlideTitleWithImageModule, SlideTitleWithTextModule, SlideWithTitleOnlyModule, SingletonModule) {
    var SlideTitleWithImage = SlideTitleWithImageModule.SlideTitleWithImage;
    var SlideTitleWithText = SlideTitleWithTextModule.SlideTitleWithText;
    var SlideWithTitleOnly = SlideWithTitleOnlyModule.SlideWithTitleOnly;
    var RepositoryManager = SingletonModule.RepositoryManager;
    var Main;
    (function (Main_1) {
        var Main = (function (_super) {
            __extends(Main, _super);
            function Main() {
                _super.apply(this, arguments);
                this.repository = RepositoryManager.GetInstance();
                this.state = {
                    changedSlideType: '',
                    content: ''
                };
            }
            Main.prototype.changeLayoutClickHandler = function (slideType) {
                this.setState({ changedSlideType: slideType });
            };
            Main.prototype.changeStageContentHandler = function (slideId) {
                console.log('Changing the state ' + slideId);
                this.setState({ content: 'Changing the state ' + slideId });
            };
            Main.prototype.Seed = function () {
                this.repository.DeleteAllSlides();
                this.repository.AddSlide(new SlideWithTitleOnly('Test 1'));
                this.repository.AddSlide(new SlideTitleWithText('Test 2', 'Content Test'));
                this.repository.AddSlide(new SlideTitleWithImage('Test 3', 'Image Path Test'));
                this.repository.AddSlide(new SlideWithTitleOnly('Test 4'));
                this.repository.AddSlide(new SlideTitleWithText('Test 5', 'Content Test'));
                this.repository.AddSlide(new SlideTitleWithImage('Test 6', 'Image Path Test'));
            };
            Main.prototype.render = function () {
                this.Seed();
                return React.jsx("\n                <div>\n                    <UpperMenu />\n                    <div className=\"container\">\n                        <div className=\"row\">\n                            <div className=\"col-md-2\">\n                                <div id=\"leftSideMenuWrapper\">\n                                    <LeftPanel changeStageClickHandler={this.changeStageContentHandler.bind(this)} />\n                                </div>\n                            </div>\n                            <div className=\"col-md-8 main-body\">\n                                <Stage changedSlideType={this.state.changedSlideType} />\n                            </div>\n                            <div className=\"col-md-2\">\n                                <RightSidePanel changeLayoutClick={this.changeLayoutClickHandler.bind(this)} />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ");
            };
            return Main;
        })(React.Component);
        Main_1.Main = Main;
    })(Main || (Main = {}));
    return Main;
});
//# sourceMappingURL=main.js.map