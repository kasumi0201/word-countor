import React from 'react';
import SaveButton from './SaveButton';
import AlertBox from './AlertBox';
import { SUCCESS, FAILURE, WAITING, IDLE } from './saveStatus';

export default class SaveManager extends React.Component {
    constructor() {
        super();
        this.state = { saveStatus: IDLE }
        this.save = this.save.bind(this);
    }

    save(event) {
        event.preventDefault();
        this.setState(() => ({ saveStatus: WAITING }))
        this.props.
            saveFunction(this.props.data).
            then(success => this.setState(() => ({ saveStatus: SUCCESS }))).
            catch(failure => this.setState(() => ({ saveStatus: FAILURE })))
    }

    render() {
        return(
            <div className="flex flex-column mv2">
                <SaveButton onClick={this.save}/>
                <AlertBox status={this.state.saveStatus}/>
            </div>
        )
    }
}
