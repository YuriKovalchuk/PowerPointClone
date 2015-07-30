///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import SlideBaseModule = require('../../DAL/Model/SlideBase');

import SlideBase = SlideBaseModule.SlideBase;


module PanelSlide {

    interface IPropPanelSlide {
        handleSelectSlide(id: string): void;
        slide: SlideBase;
    }

    export class PanelSlide extends React.Component<IPropPanelSlide, any, any>
    {
        clickOnSlide(id: string): void {
            this.props.handleSelectSlide(id);
        };

        render() {
            return React.jsx(`
                <div className='panelSlide' onClick={this.clickOnSlide.bind(this, this.props.slide.id)} >
                    {this.props.slide.title}
                </div>
            `);
        }
    }
}

export = PanelSlide;