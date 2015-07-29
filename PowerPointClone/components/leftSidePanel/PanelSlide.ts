///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');


module PanelSlide {

    interface IPropPanelSlide {
        clickOnSlide(): void;
        title: string;
    }

    export class PanelSlide extends React.Component<IPropPanelSlide, any, any>
    {
        clickOnSlide(): void {
            
        };

        render() {
            return React.jsx(`
                <div className='panelSlide' onClick={this.clickOnSlide.bind(this)} >
                    {this.props.title}
                </div>
            `);
        }
    }
}

export = PanelSlide;