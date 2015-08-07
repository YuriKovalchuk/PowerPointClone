/// <reference path="../../enums/slidetype.ts" />
///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import SlideModule = require('../../DAL/Model/Backbone.Models/Slide');
import SlideTypeEnumModule = require('../../Enums/SlideType');

import Slide = SlideModule.Slide;
import SlideTypeEnum = SlideTypeEnumModule.SlideType;


module PanelSlide {

    interface IProps {
        handleSelectSlide(id: string): void;
        slide: Slide;
    }

    interface IState {
        hasData: boolean
    }

    export class PanelSlide extends React.Component<IProps, IState, any>
    {
        state = {
            hasData: false
        }

        clickOnSlide(id: string): void {
            console.log('Selected a slide in Panel Slide');
            this.props.handleSelectSlide(id);
        };

        componentWillMount(): void {
            //this.model.fetch({
            //    url: "http://localhost:53840/api/slides/" + this.props.slideId
            //});
        }

        componentDidMount(): void {
            //this.model.on("sync", function () {
            //    this.setState({
            //        hasData: true
            //    });
            //}, this);
        }

        render() {
            var style: string = 'hidden';
            var slideType : SlideTypeEnum = this.props.slide.get('SlideType');

            return React.jsx(`
                <div className='panelSlide' onClick={this.clickOnSlide.bind(this, this.props.slide.get('Id'))} >
                    <div className='slide-wrapper'>
                        <div className='title'>
                            {this.props.slide.get('Title')}
                        </div>
                        <div className={'content-wrapper ' + SlideTypeEnum[slideType] }>
                            
                                {this.props.slide.get('Content')}
                            
                        </div>
                        <div className={'img-wrapper ' + SlideTypeEnum[slideType] }>
                            <img src={this.props.slide.get('ImageUrl')} title="Image" className="left-side-image" />
                        </div>
                    </div>
                </div>
            `);
        }
    }
}

export = PanelSlide;