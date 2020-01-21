import { connect } from 'react-redux';
import List from '../components/List';

function mapStateToProps (state) {
    return {
        items: state.items,
        deletedItems: state.deletedItems
    };
}

export default connect(mapStateToProps)(List);