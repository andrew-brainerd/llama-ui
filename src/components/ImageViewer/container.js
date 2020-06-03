import { connect } from 'react-redux';
import { getIsLoadingImage, getCurrentImage } from '../../selectors/images';
import { loadImage } from '../../actions/images';
import ImageViewer from './ImageViewer';

const mapStateToProps = state => ({
  isLoadingImage: getIsLoadingImage(state),
  image: getCurrentImage(state)
});

const mapDispatchToProps = dispatch => ({
  loadImage: tag => dispatch(loadImage(tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
