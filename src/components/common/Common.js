import {Component} from 'react';
import $ from 'jquery';
class Common extends Component {
    constructor(props){
        super(props);
    }
    validateMsg(response) {
        this.removeValidateMsg();
        if (response.data.errors) {
            $.each(response.data.errors, function (key, value) {
                var msgError = '<span class="help-block">' + value + '</span>';
                var selector = $('input[name=' + key + ']').parent();
                selector.addClass('has-error');
                selector.append(msgError)
            });
        }
    }

    hideLoading() {
        $('#div_loading').hide();
    }

    showLoading() {
        $('#div_loading').show();
    }

    removeValidateMsg() {
        $('.row .form-group').removeClass('has-error');
        $('.row .form-group').find('span').remove();
    }

}

export default new Common();