/// <reference path="../../enums/slidetype.ts" />
///<reference path="../../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    var PanelSlide;
    (function (PanelSlide_1) {
        var PanelSlide = (function (_super) {
            __extends(PanelSlide, _super);
            function PanelSlide() {
                _super.apply(this, arguments);
                this.state = {
                    hasData: false
                };
            }
            PanelSlide.prototype.clickOnSlide = function (id) {
                console.log('Selected a slide in Panel Slide');
                this.props.handleSelectSlide(id);
            };
            ;
            PanelSlide.prototype.componentWillMount = function () {
                //this.model.fetch({
                //    url: "http://localhost:53840/api/slides/" + this.props.slideId
                //});
            };
            PanelSlide.prototype.componentDidMount = function () {
                //this.model.on("sync", function () {
                //    this.setState({
                //        hasData: true
                //    });
                //}, this);
            };
            PanelSlide.prototype.render = function () {
                var style = 'hidden';
                var slideType = this.props.slide.get('SlideType');
                return React.jsx("\n                <div className='panelSlide' onClick={this.clickOnSlide.bind(this, this.props.slide.get('Id'))} >\n                    <div className='slide-wrapper'>\n                        <div className='title'>\n                            {this.props.slide.get('Title')}\n                        </div>\n                        <div className={'content-wrapper ' + SlideTypeEnum[slideType] }>\n                            \n                                {this.props.slide.get('Content')}\n                            \n                        </div>\n                        <div className={'img-wrapper ' + SlideTypeEnum[slideType] }>\n                            <img src={this.props.slide.get('ImageUrl')} title=\"Image\" className=\"left-side-image\" />\n                        </div>\n                    </div>\n                </div>\n            ");
            };
            return PanelSlide;
        })(React.Component);
        PanelSlide_1.PanelSlide = PanelSlide;
    })(PanelSlide || (PanelSlide = {}));
    return PanelSlide;
});
//# sourceMappingURL=PanelSlide.js.map