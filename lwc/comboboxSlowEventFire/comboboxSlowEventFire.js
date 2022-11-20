import { LightningElement } from 'lwc';

export default class ComboboxSlowEventFire extends LightningElement {


    valueStandard = 'inProgress';
    valueDelayed = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChangeStandard(event) {
        
        this.valueStandard = event.detail.value;
        console.log('Current value of the combobox: ' + this.valueStandard);
    }

    handleChangeDelayed(event) {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(this.handleSelectionChange.bind(this,event.detail.value),2000);
         
    }
    handleSelectionChange(val){
       this.valueDelayed = val;
        console.log('Current value of the combobox: ' + this.valueDelayed);
    }
}