///<reference path="../lib/_references.d.ts"/>
<<<<<<< HEAD
define(["require", "exports", 'react/addons'], function (require, exports, React) {
    /*
    
    class App extends React.Component<any, State, any> {
    
        state = {
            photoIndex: 0,
            inputText: '1'
=======
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'react/addons', '../DAL/Model/SlideWithTitleOnly', '../DAL/RepositoryManager'], function (require, exports, React, Slides, PresentationSingleton) {
    var Singleton = PresentationSingleton.RepositoryManager;
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
            this.state = {
                photoIndex: 0,
                inputText: '1',
            };
>>>>>>> feature/presentation_insert
        }
    
        handleChange(addend) {
            var newIndex = this.state.photoIndex + addend,
                maxPhotos = 3;
            // clamp [0 thru maxPhotos-1]
            newIndex = Math.max(0, Math.min(maxPhotos - 1, newIndex));
    
            this.setState({
                photoIndex: newIndex,
                inputText: newIndex + 1
            })
        }
    
        handleKeyPress(e) {
            if (e.key == 'Enter') {
                this.setState({
                    photoIndex: parseInt(this.state.inputText, 10) - 1
                })
            }
<<<<<<< HEAD
        }
    
        render() {
            return React.jsx(`<div className="app">
                <div className="title">Picture Purrfect</div>
                <ImageViewer index={this.state.photoIndex} />
                <div>
                    <button
                        disabled={this.state.photoIndex == 0}
                        onClick={this.handleChange.bind(this, -1)}>Previous</button>
    
                    <input type="text"
              value={this.state.inputText}
              onChange={e => this.setState({inputText: e.target.value})}
                        onKeyPress={this.handleKeyPress.bind(this)} />
    
                    <button
                        disabled={this.state.photoIndex == 2}
                        onClick={this.handleChange.bind(this, 1)}>Next</button>
                </div>
            </div>`)
        }
    }
    */
    React.render(React.jsx("<Main />"), document.body);
=======
        };
        App.prototype.render = function () {
            var singletonManager = Singleton.GetInstance();
            var presentation = singletonManager.GetPresentation();
            var slideText = new Slides.SlideWithTitleOnly("test titlu");
            singletonManager.AddSlide(slideText);
            singletonManager.SavePresentation();
            return React.jsx("<div className=\"app\">\n\t\t\t<div className=\"title\">Picture Purrfect</div>\n\t\t\t<ImageViewer index={this.state.photoIndex} slideId={slideText.id}/>\n\t\t\t<div>\n                <div>\n                    <pre>{presentation.id}</pre>\n                </div>\n\n\t\t\t\t<button\n\t\t\t\t\tdisabled={this.state.photoIndex == 0}\n\t\t\t\t\tonClick={this.handleChange.bind(this, -1)}>Previous</button>\n\n\t\t\t\t<input type=\"text\"\n          value={this.state.inputText}\n          onChange={e => this.setState({inputText: e.target.value})}\n\t\t\t\t\tonKeyPress={this.handleKeyPress.bind(this)} />\n\n\t\t\t\t<button\n\t\t\t\t\tdisabled={this.state.photoIndex == 2}\n\t\t\t\t\tonClick={this.handleChange.bind(this, 1)}>Next</button>\n\t\t\t</div>\n\t\t</div>");
        };
        return App;
    })(React.Component);
    React.render(React.jsx("<App />"), document.body);
>>>>>>> feature/presentation_insert
});
//# sourceMappingURL=app.js.map