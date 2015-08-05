///<reference path="../../lib/_references.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons', '../../DAL/Model/Backbone.Models/Slide'], function (require, exports, React, SlideModule) {
    var Slide = SlideModule.Slide;
    var PanelRow;
    (function (PanelRow_1) {
        var PanelRow = (function (_super) {
            __extends(PanelRow, _super);
            function PanelRow() {
                _super.apply(this, arguments);
                this.state = {
                    deleted: false,
                    hasData: false
                };
                this.model = new Slide();
            }
            PanelRow.prototype.handleSelectSlide = function (id) {
<<<<<<< HEAD
                console.log('Handling selected slide in Panel Row');
=======
>>>>>>> finished presentation
                this.props.handleSelectSlide(id);
            };
            PanelRow.prototype.clickDeleteSlide = function (id) {
                console.log('Delete button clicked ( panel row )');
                this.props.clickDeleteUpdatePanel(id);
                this.setState({
                    deleted: true
                });
            };
            PanelRow.prototype.componentWillMount = function () {
                //this.model.fetch({
                //    url: "http://localhost:53840/api/slides/" + this.props.slideId
                //});
                //this.setState({
                //    deleted: this.props.deleted
                //})
            };
            PanelRow.prototype.componentDidMount = function () {
                //this.model.on("sync", function () {
                //    this.setState({
                //        hasData: true
                //    });
                //}, this)
            };
            PanelRow.prototype.render = function () {
<<<<<<< HEAD
                console.log('Rendering panel row...');
                var style;
                if (this.props.slide.get('Selected')) {
=======
                var style;
                if (this.props.slide.selected) {
>>>>>>> finished presentation
                    style = 'panelRow selected';
                }
                else {
                    style = 'panelRow';
                }
<<<<<<< HEAD
                var id = this.props.slide.get('Id');
                //if (!this.state.deleted) {
                return React.jsx("\n                    <div className={style} >\n                        <div className='slideId'> {this.props.index} </div>\n                        <div className='delButton' onClick={this.clickDeleteSlide.bind(this, id) } >\n                            <i className=\"fa fa-trash-o fa-3\"></i>\n                        </div>\n                        <PanelSlide slide={this.props.slide} handleSelectSlide={this.handleSelectSlide.bind(this)}/>\n                    </div>\n                ");
                //}
                //else {
                //    return React.jsx(`
                //        <div className={style} >
                //            <div className='slideId'> {this.props.index} </div>
                //            <div className='delButton' >
                //                <i className="fa fa-trash-o fa-3"></i>
                //            </div>
                //            <div> Deleting slide ... </div>
                //        </div>
                //    `);
                //}
=======
                return React.jsx("\n                <div className={style} >\n                    <div className='slideId'> {this.props.slide.index} </div>\n                    <div className='delButton' onClick={this.clickDeleteSlide.bind(this, this.props.slide.id) } > \n                        <i className=\"fa fa-trash-o fa-3\"></i>\n                    </div>\n                    <PanelSlide slide={this.props.slide} handleSelectSlide={this.handleSelectSlide.bind(this)}/>\n                </div>\n            ");
>>>>>>> finished presentation
            };
            return PanelRow;
        })(React.Component);
        PanelRow_1.PanelRow = PanelRow;
    })(PanelRow || (PanelRow = {}));
    return PanelRow;
});
//# sourceMappingURL=PanelRow.js.map