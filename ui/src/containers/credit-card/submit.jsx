import {SubmissionError} from 'redux-form';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

function submit(values, dispatch, props) {
    const data = {
        name: values.name ? values.name.trim() || null : null,
        card_number: values.card_number ? values.card_number.replace(/\s/g, "") || null : null,
        limit: values.limit ? values.limit.replace(/\s/g, "") || null : null
    };
    return axios.post('http://localhost:3001/credit_card/add', JSON.stringify(data))
        .then(function (response) {
            props.addCard(response.data);
            props.reset();
        })
        .catch(function (error) {
            const res = error.response;
            if (res.status === 400) {
                let errors = {};
                res.data.forEach((item) => {
                    errors[item.field] = item.message;
                });
                throw new SubmissionError(errors);
            } else {
                throw new SubmissionError({
                    _error: res.data
                });
            }

        });
}

export default submit