import React, { Component } from 'react';


class CurrentBurger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            additionNames: {
                name: "cheese",
                name: "tomatoes",
                name: "mushroom",
            },
            checkboxState: false,
            cheese: false,
            tomatoes: false,
            mushroom: false,
            additionsPrices: {
                cheese: 2,
                tomatoes: 5,
                mushroom: 10
            },
            burgerPrice: null
        }




        this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.calculateBurgerPrice = this.calculateBurgerPrice.bind(this);

    }




    calculateBurgerPrice(event, itemName) {

        if (event.target.checked) {
            this.setState({
                burgerPrice: this.state.burgerPrice += this.state.additionsPrices[itemName]
            });
        }
            else if (!event.target.checked){
                this.setState({
                    burgerPrice: this.state.burgerPrice -= this.state.additionsPrices[itemName]
                });
            }

    }


    onSubmit(event){
        alert('status ' + this.state.checkboxState );
        event.preventDefault();

    }

    toggle(event) {
       // this.setState({checkboxState: !this.state.checkboxState});
        const target = event.target;

     const value =   target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;

     this.setState({
      [name]: value
     });
    }




render(){

const burgerPrice = this.state.burgerPrice;

    const additions = this.props.components;
    return(
        <div>
                {additions.map(item => {
                   return(<div> <ul><li>
                        {item.name}


                    </li></ul>
                           <form >
                           <input
                               name={item.name}
                              value={item.name}
                               type="checkbox"
                               onClick={(event)=>{this.toggle(event);this.calculateBurgerPrice(event, item.name);}}


                           />
                           </form>
                       </div>
                );

                } )}
            ${burgerPrice}



        </div>


    );


}



}
export default CurrentBurger;