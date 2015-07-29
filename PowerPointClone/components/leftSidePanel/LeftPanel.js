///<reference path="../../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons', '../../DAL/Model/SlideWithTitleOnly', '../../DAL/RepositoryManager'], function (require, exports, React, SlideWithTitleOnlyModule, SingletonModule) {
    var SlideWithTitleOnly = SlideWithTitleOnlyModule.SlideWithTitleOnly;
    var RepositoryManager = SingletonModule.RepositoryManager;
    var LeftPanel;
    (function (LeftPanel_1) {
        var LeftPanel = (function (_super) {
            __extends(LeftPanel, _super);
            function LeftPanel() {
                _super.apply(this, arguments);
                this.repository = RepositoryManager.GetInstance();
                this.model = [];
            }
            LeftPanel.prototype.changeStageClickHandler = function (id) {
                this.props.changeStageClickHandler(id);
            };
            ;
            LeftPanel.prototype.componentWillMount = function () {
                this.model = this.repository.GetAllSlides();
            };
            ;
            LeftPanel.prototype.clickAddSlide = function () {
                var newSlide = new SlideWithTitleOnly('');
                this.repository.AddSlide(newSlide);
                this.model = this.repository.GetAllSlides();
                this.forceUpdate();
            };
            ;
            LeftPanel.prototype.clickDeleteSlide = function () {
                this.forceUpdate();
            };
            LeftPanel.prototype.render = function () {
                var data = [];
                var f = this.changeStageClickHandler.bind(this);
                var g = this.clickDeleteSlide.bind(this);
                this.model.forEach(function (s) {
                    data.push(React.jsx("\n                    <PanelRow slide={s} changeStageClickHandler={f} clickDeleteUpdatePanel={g} />\n                "));
                });
                return React.jsx("\n                <div>\n                    <div className='header' >\n                        <div className='header left'> Slides </div>\n                        <div className='header right' onClick={this.clickAddSlide.bind(this)}>\n                            <i className=\"fa fa-plus-square fa-lg\"></i>&nbsp;Add slide\n                        </div>\n                    </div>\n                    <div className='leftSidePanel'>\n                        {data}\n                    </div>            \n                </div>\n            ");
            };
            return LeftPanel;
        })(React.Component);
        LeftPanel_1.LeftPanel = LeftPanel;
    })(LeftPanel || (LeftPanel = {}));
    return LeftPanel;
});
//# sourceMappingURL=LeftPanel.js.map