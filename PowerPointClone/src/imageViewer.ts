import React = require('react/addons');
import RepositoryManager = require('../DAL/RepositoryManager');

interface Props {
    index: number;
    slideId: string;
}

class ImageViewer extends React.Component<Props, any, any> {
    static defaultProps = { index: 0 }
	
    render() {
        var repositoryManager = RepositoryManager.RepositoryManager.GetInstance();
        var slide = repositoryManager.GetSlide(this.props.slideId);
        

        return React.jsx(`<div className="photos">
            <h1>{slide.title}</h1>
			<React.addons.CSSTransitionGroup transitionName="photo">
				<img key={this.props.index} 
				     src={"photos/"+this.props.index+'.jpg'} />
			</React.addons.CSSTransitionGroup>
		</div>`)
	}
}

ImageViewer.propTypes = { index: React.PropTypes.number.isRequired }

export = ImageViewer;