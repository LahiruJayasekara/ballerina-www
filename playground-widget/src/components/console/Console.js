import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import './Console.css';

/**
 * Console component
 */
class Console extends React.Component {

    /**
     * @inheritDoc
     */
    constructor(props) {
        super(props);
        this.state = {
          content: ''
        }
    }

    /**
     * set
     */
    clearAndPrint(content) {
        this.setState({
          content,
        });
    }

    /**
     * append to console
     */
    append(content) {
        this.setState({
          content: this.state.content + '\n' + content
        })
    }

    /**
     * clear console
     */
    clear() {
      this.setState({
        content: ''
      });
  }

    /**
     * @inheritDoc
     */
    render() {
        return (
            <div className='console-area'>
                <Scrollbars style={{ width: 476, height: 82 }}>
                    <pre>{this.state.content}</pre>
                </Scrollbars>
            </div>
        );
    }
}

Console.propTypes = {
    onChange: PropTypes.func,
};
export default Console;
