var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'SlideBase', '../../Enums/SlideType'], function (require, exports, SlideBase, SlideType) {
    var SlideWithTitleOnly = (function (_super) {
        __extends(SlideWithTitleOnly, _super);
        function SlideWithTitleOnly(presentationId, title) {
            _super.call(this, SlideType.TitleOnly, title, presentationId);
        }
        return SlideWithTitleOnly;
    })(SlideBase);
    return SlideWithTitleOnly;
});
//# sourceMappingURL=SlideWithTitleOnly.js.map