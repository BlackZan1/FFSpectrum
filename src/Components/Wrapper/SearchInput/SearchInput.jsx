import React from 'react';
import './SearchInput.scss';
import { reduxForm, Field } from 'redux-form';

class SearchInput extends React.Component {
    render() {
        return <div className='Search'>
            <div className='Search-toggle'>
                <button disabled={this.props.value !== ''} onClick={() => this.props.toggleType()}>Change category</button>
            </div>

            <form onSubmit={this.props.handleSubmit}>
                <div className='Search-form'>
                    <Field type="text" placeholder={`Add name of ${this.props.searchType.toUpperCase()}...`} component={'input'} name={'value'}/>
                </div>
            </form>

            <div className='User-block'>
                <p>Yours balance: {this.props.balance} gil</p>
            </div>
        </div>
    }
}

export default reduxForm({
    form: 'searchValue',
})(SearchInput);