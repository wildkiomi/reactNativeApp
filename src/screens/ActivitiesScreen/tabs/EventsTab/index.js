import * as React from 'react';
import CustomDeckSwiper from "../../../../components/CustomDeckSwiper"

const EventsTab = () => {
    const cards = [
        {
          text: 'Card One',
          name: 'One',
          image: require('../../../../../assets/1.jpg'),
        },
        {
          text: 'Card Two',
          name: 'Two',
          image: require('../../../../../assets/2.png'),
        },
        {
          text: 'Card Tree',
          name: 'Tree',
          image: require('../../../../../assets/3.png'),
        },
      
      ];

    return (
        <CustomDeckSwiper cards={cards} />
    )
}
export default EventsTab;