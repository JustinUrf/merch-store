import React from 'react';
import Header from './Header';
import MerchList from './MerchList';
import { v4 } from 'uuid';
import NewItemForm from './NewItemForm';

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemFormShowing: false,
      itemList: [
        {
          name: 'Mag Harness 5000',
          manufacturer: 'Chickens Inc.',
          description: 'A sturdy harness with magnetic closures.',
          category: 'Harnesses',
          price: '24',
          quantity: '4',
          id: v4(),
        },
        {
          name: 'Velvet Claw Sheath (set of 2)',
          manufacturer: 'CluckCo',
          description: 'A luxurious covering for your pet\'s deadly claws.',
          category: 'Gloves',
          price: '125',
          quantity: '40',
          id: v4(),
        },
        {
          name: 'Chicken Pants',
          manufacturer: 'CluckCo',
          description: 'A one-size-fits-all solution to your chicken\'s rampant nudity.',
          category: 'Pants',
          price: '80',
          quantity: '200',
          id: v4(),
        },
      ],
      selectedItem: null,
    };
  }

  getItemById = (id, list = this.state.itemList) => {
    return list.filter(item => item.id === id)[0];
  };

  handleClickAddNewItem = () => {
    this.setState((prevState) => ({
      newItemFormShowing: !prevState.newItemFormShowing
    }));
  };

  handleChangingSelectedItem = (id) => {
    const newSelectedItem = this.getItemById(id);
    this.setState({ selectedItem: newSelectedItem });
  };


  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          {
            this.state.newItemFormShowing ?

              <NewItemForm /> //if true
              :
              <div><MerchList itemList={this.state.itemList} /></div> // if false
          }

          <button onClick={this.handleClickAddNewItem}>
            {this.state.newItemFormShowing ? 'Cancel' : 'Add new item'}
          </button>

          {this.state.selectedItem !== null && <div>showing a details page!</div>}
        </main>
      </React.Fragment>
    );
  }
}

export default MerchControl;