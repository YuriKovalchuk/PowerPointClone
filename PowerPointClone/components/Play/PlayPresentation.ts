/// <reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import Model = require('../../DAL/Model/Backbone.Models/Slide');
import SlideType = require('../../Enums/SlideType');

module Play {
    interface Props {
        PlayPresentationClickHandler: (trigger: boolean) => void;
    }

    interface State {
        hasData?: boolean;
        slide?: Model.Slide;
        slideCurrentIndex?: number;
    }

    export class PlayPresentation extends React.Component<Props, State, any>{
        private model: Backbone.Collection<Model.Slide> = new Backbone.Collection<Model.Slide>();

        state = {
            hasData: false,
            slide: new Model.Slide(),
            slideCurrentIndex: 0
        }

        closePresentation(): void {
            this.props.PlayPresentationClickHandler(false);
        }

        nextSlide(forward: number): void {
            var newIndex = this.model.indexOf(this.state.slide) + forward;
            var newSlide = this.model.at(newIndex);

            this.setState({
                slide: newSlide,
                slideCurrentIndex: newIndex
            });
        }

        componentWillMount(): void {
            this.model.fetch({
                url: "http://localhost:53840/api/slides"
            });
        }

        componentDidMount(): void {
            this.model.on("sync", function () {
                if (this.model.length > 0) {
                    this.setState({
                        hasData: true,
                        slide: this.model.at(0),
                        slideCurrentIndex: 0
                    });
                }
                else {
                    this.setState({
                        slideCurrentIndex: -1
                    });
                }
            }, this);
        }

        render() {
            if (this.state.hasData) {
                var actionLeftCssClass = "action action-left" + (this.state.slideCurrentIndex <= 0 ? " disabled" : "");
                var actionRightCssClass = "action action-right" + (this.state.slideCurrentIndex >= this.model.length - 1 ? " disabled" : "");
                var slideTypeNumber = this.state.slide.get('SlideType');

                return React.jsx(`
                <div id="presentation" className="presentation">
	                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand">PowerPoint Clone</a>
                            </div>
                            <ul className="nav navbar-nav navbar-right navbar-right">
                                <li><a id="close" onClick={this.closePresentation.bind(this)}><i className="fa fa-times fa-2x"></i></a></li>
                            </ul>
                        </div>
                    </nav>

                    <div className="presentation-container">
                        <div className="presentation-container col-2">
                            <a className={actionLeftCssClass} onClick={this.nextSlide.bind(this, -1)}>
                                <i className="fa fa-caret-left fa-5x"></i>
                            </a>
                        </div>

                        <div className="presentation-container col-8">
                            <div className="slide">
                                <div className={"play play-slide-title " + SlideType.SlideType[slideTypeNumber]}>{this.state.slide.get('Title')}</div>
                                <div className={"play play-slide-content " + SlideType.SlideType[slideTypeNumber]}>{this.state.slide.get('Content')}</div>
                                <div className={"play play-slide-image " + SlideType.SlideType[slideTypeNumber]}>
                                    <img src={this.state.slide.get('ImageUrl')} className="img-responsive" />
                                </div>
                            </div>
                        </div>

                        <div className="presentation-container col-2">
                            <a className={actionRightCssClass} onClick={this.nextSlide.bind(this, 1)}>
                                <i className="fa fa-caret-right fa-5x"></i>
                            </a>
                        </div>
                    </div>
                </div>
                `);
            }
            else {
                return React.jsx(`<div id="presentation"></div>`);
            }
        }
    }
}

export = Play;