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
                this.clicked = false;
            }
            LeftPanel.prototype.changeStageClickHandler = function (id) {
                this.props.changeStageClickHandler(id);
            };
            ;
            LeftPanel.prototype.componentWillMount = function () {
                this.model = this.repository.GetAllSlides();
                this.model[0].selected = true;
                this.selectedSlide = this.model[0];
            };
            ;
            LeftPanel.prototype.componentDidUpdate = function () {
                if (this.clicked) {
                    this.scrollDown();
                }
                this.clicked = false;
            };
            ;
            LeftPanel.prototype.scrollDown = function () {
                var panel = document.getElementById('leftSidePanel');
                panel.scrollTop = panel.scrollHeight;
            };
            LeftPanel.prototype.clickAddSlide = function () {
                var newSlide = new SlideWithTitleOnly('');
                newSlide.selected = true;
                this.repository.AddSlide(newSlide);
                this.selectedSlide = newSlide;
                this.model = this.repository.GetAllSlides();
                this.forceUpdate();
                this.scrollDown();
                this.clicked = true;
            };
            ;
            LeftPanel.prototype.clickDeleteSlide = function () {
                this.forceUpdate();
            };
            LeftPanel.prototype.handleSelectSlide = function (id) {
                this.selectedSlide = this.repository.GetSlide(id);
                this.selectedSlide.selected = true;
                this.repository.UpdateSlide(this.selectedSlide);
                this.forceUpdate();
            };
            LeftPanel.prototype.render = function () {
                var data = [];
                var index = 0;
                var f = this.changeStageClickHandler.bind(this);
                var g = this.clickDeleteSlide.bind(this);
                var h = this.handleSelectSlide.bind(this);
                var selectedSlide = this.selectedSlide;
                var repository = this.repository;
                this.model.forEach(function (s) {
                    if (s != selectedSlide) {
                        s.selected = false;
                        repository.UpdateSlide(s);
                    }
                    index++;
                    s.index = index;
                    data.push(React.jsx("\n                    <PanelRow slide={s} changeStageClickHandler={f} clickDeleteUpdatePanel={g} handleSelectSlide={h} />\n                "));
                });
                return React.jsx("\n                <div>\n                    <div className='header' >\n                        <div className='header left'> Slides </div>\n                        <div className='header right' onClick={this.clickAddSlide.bind(this)}>\n                            <i className=\"fa fa-plus-square fa-lg\"></i>&nbsp;Add slide\n                        </div>\n                    </div>\n                    <div id='leftSidePanel' className='leftSidePanel'>\n                        {data}\n                    </div>            \n                </div>\n            ");
            };
            return LeftPanel;
        })(React.Component);
        LeftPanel_1.LeftPanel = LeftPanel;
    })(LeftPanel || (LeftPanel = {}));
    return LeftPanel;
});
//# sourceMappingURL=LeftPanel.js.map