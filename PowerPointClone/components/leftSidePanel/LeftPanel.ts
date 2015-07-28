///<reference path="../../lib/_references.d.ts"/>

import React = require('react/addons');
import PanelRow = require('../leftSidePanel/PanelRow');


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
                    <PanelRow.PanelRow slide={s} changeStageClickHandler={f} />
                `));
            });

            return React.jsx(`
            <div className='leftSidePanel'>
                {data}
            </div>
        `);
        }
    }
}

export = LeftPanel;