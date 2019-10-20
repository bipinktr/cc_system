import React from 'react';
import {Field, reduxForm} from 'redux-form';
import submit from './submit';
import formatCreditCard from './../../util/credit-card-format';

const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div className="form-group">
        <label>{label}</label>
        <input {...input} placeholder={label} type={type} className="form-control"/>
        {touched && error && <span className="invalid-feedback">{error}</span>}
    </div>
);

const CreditCardForm = props => {
    const {error, handleSubmit, pristine, reset, submitting} = props;
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Field
                name="name"
                type="text"
                component={renderField}
                label="Name"
            />
            <Field
                name="card_number"
                type="text"
                component={renderField}
                label="Card number"
                format={formatCreditCard}
            />
            <Field
                name="limit"
                type="text"
                component={renderField}
                label="Limit"
            />
            {error && <strong>{error}</strong>}
            <div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                    Add
                </button>
                <button type="button" className="btn btn-secondary" disabled={pristine || submitting} onClick={reset}>
                    Clear
                </button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'credit_card_form'
})(CreditCardForm)