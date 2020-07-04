import React, { Component } from 'react';
import { Button, Icon, Fab } from 'native-base';

const TodoFab = () => {
    return(
    <Fab
            active={true}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => {}}>
            <Icon name="tasks" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="edit" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="delete" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="refresh" />
            </Button>
          </Fab>
    )
}
export default TodoFab;