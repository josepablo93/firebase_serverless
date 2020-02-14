import React from 'react';
import ProfileImg from '../../components/Profileimg';
import Button from '../../components/Button';
import Card from '../../components/Card';

const style = {
  container: {
    padding: '15px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  }
}

export default class Profile extends React.Component {
  public render() {
    return (
      <div style={style.container}>
        <div style={style.row}>
          <ProfileImg />
          <Button>Agregar</Button>
        </div>
        <div style={style.row}>
          <Card>
            <img src='http://placekitten.com/140/140'/>
          </Card>
          <Card>
            <img src='http://placekitten.com/140/140'/>
          </Card>
          <Card>
            <img src='http://placekitten.com/140/140'/>
          </Card>
          <Card>
            <img src='http://placekitten.com/140/140'/>
          </Card>
        </div>
        <div style={style.row}>
          <Card>
            <img src='http://placekitten.com/140/140'/>
          </Card>
          <Card>
            <img src='http://placekitten.com/140/140'/>
          </Card>
          <Card>
            <img src='http://placekitten.com/140/140'/>
          </Card>
          <Card>
            <img src='http://placekitten.com/140/140'/>
          </Card>
        </div>
      </div>
    )
  }
}