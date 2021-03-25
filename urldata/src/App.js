import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    }
  }
  componentDidMount() {
    let url = "sample.json";          //fetch json data
    fetch(url)
      .then(result => result.json())      //promise
      .then(json => {
        this.setState({               // set state data :result as json data
          items: json,
        })
      })
  }

  render() {
    var { items } = this.state;
    if (!items) {
      return <h1>loading....</h1>;
    } else {
      return (
        <>
          <>
            {items.map(item => (
              <div style={{ width: '50%'}}>

                <div> <img alt='user' src={item.gender === 'M' ? '/image/male .png' : '/image/female.png'} style={{ width: "100px", marginLeft: "5px" }} />
                </div>

                <br />
                <span>Name: {item.name}</span> <br />
             Age: {item.age}<br />
             Gender: {item.gender}<br />
                <hr /></div>

            ))}
          </>
        </>
      )
    }
  }
}

export default App;

