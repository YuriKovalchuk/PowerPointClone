///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

class PanelSlide extends React.Component<any, any, any>
{
    render() {
        return React.jsx(`
            <div className='panelSlide'>
                {this.props.title}
            </div>
        `);
    }
}

class PanelRow extends React.Component<any, any, any>
{
    
    render() {
        return React.jsx(`
            <div className='panelRow'>
                <span className='slideId'> {this.props.slide.id} </span>
                <PanelSlide title={this.props.slide.title}/>
            </div>
        `);
    }
}

class LeftPanel extends React.Component<any, any, any>
{

    render() {
        var data = [];
        this.props.slides.forEach(function (s) {
            data.push(React.jsx(`
                <PanelRow slide={s} />
            `));
        });

        return React.jsx(`
            <div className='leftSidePanel'>
                {data}
            </div>
        `);
    }
}


export = LeftPanel;