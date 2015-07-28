///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');


module PanelSlide {
    interface IPropPanelSlide {
        title: string;
    }

    export class PanelSlide extends React.Component<IPropPanelSlide, any, any>
    {
        render() {
            return React.jsx(`
                <div className='panelSlide'>
                    {this.props.title}
                </div>
            `);
        }
    }
}

export = PanelSlide;