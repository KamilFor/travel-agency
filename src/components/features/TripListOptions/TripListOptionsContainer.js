import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
//Functions
import { getAllTags } from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  addingTag,
  removingTag,
  changingDurationFrom,
  changingDurationTo,
} from '../../../redux/filtersRedux';

const mapStateToProps = (state) => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchPhrase: (phrase) => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addingTag: (tag) => dispatch(addingTag(tag)),
  removingTag: (tag) => dispatch(removingTag(tag)),
  changingDurationFrom: (type, value) => dispatch(changingDurationFrom(type, value)),
  changingDurationTo: (type, value) => dispatch(changingDurationTo(type, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
