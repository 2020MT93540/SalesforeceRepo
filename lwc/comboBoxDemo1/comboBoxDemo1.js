import { LightningElement,track } from 'lwc';

export default class ComboBoxDemo1 extends LightningElement {


    statusOptions = [
        { value: 'new', label: 'New', description: 'A new item' },
        {
            value: 'in-progress',
            label: 'In Progress',
            description: 'Currently working on this item',
        },
        {
            value: 'finished',
            label: 'Finished',
            description: 'Done working on this item',
        },
    ];

    value = 'new';

    @track myValue = "initial value";
    handleChange(evt) {
        clearTimeout(this.timeoutId); // no-op if invalid id

        // this.timeoutID = setTimeout((evt) => {
        //     console.log('Current value of the input: ' + evt.target.value);
        //   }, 2000,evt);
     this.timeoutId = setTimeout(this.handleInputChange.bind(this,evt.target.value),2000);
  
    }
    handleInputChange(val){
        this.myValue = val;
        
        console.log('Current value of the input: ' + val);
    }

}