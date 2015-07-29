///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import PanelRowModule = require('../leftSidePanel/PanelRow');

import PanelRow = PanelRowModule.PanelRow;


module LeftPanel {

    interface IPropLeftPanel {
        slides: { id: string; title: string }[];
        changeStageClickHandler(id: string): void;
    }

    export class LeftPanel extends React.Component<IPropLeftPanel, any, any>
    {
        changeStageClickHandler(id: string): void {
            this.props.changeStageClickHandler(id);
            console.log('test in LeftPanel');
        };

        render() {

            var data = [];

            var f = this.changeStageClickHandler.bind(this);

            this.props.slides.forEach(function (s) {
                data.push(React.jsx(`
                    <PanelRow slide={s} changeStageClickHandler={f} />
                `));
            });

            return React.jsx(`
                <div>
                    <div className='header' >
                        <div className='header left'> Slides </div>
                        <div className='header right'>
                            <i className="fa fa-plus-square fa-lg"></i>&nbsp;Add slide
                        </div>
                    </div>
                    <div className='leftSidePanel'>
                        {data}
                    </div>            
                </div>
            `);
        }
    }
}

export = LeftPanel;