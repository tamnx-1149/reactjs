import React, {Component} from 'react';
import $ from 'jquery'

class Footer extends Component {
    componentDidMount() {
        var footerHeight = $('.main-footer').outerHeight() || 0
        var windowHeight = $(window).height()
        $('.content-wrapper').css('min-height', windowHeight - footerHeight);
    }

    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 2.4.0
                </div>
                <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All
                rights
                reserved.
            </footer>
        )
    }
}

export default Footer;
