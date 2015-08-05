///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import SlideModule = require('../../DAL/Model/Backbone.Models/Slide');

import Slide = SlideModule.Slide;


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
            return React.jsx(`
                <div className='panelSlide' onClick={this.clickOnSlide.bind(this, this.props.slide.get('Id'))} >
                    {this.props.slide.get('Title')}
                </div>
            `);
        }
    }
}

export = PanelSlide;