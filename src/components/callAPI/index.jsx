function callAPI(props) {

    if (props.reqType === "userInfo") {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        var url = 'http://localhost:3000/users/' + props.id;
        
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

            return response;
    }
    if (props.reqType === "activity") {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        var url = 'http://localhost:3000/users/' + props.id + '/activity';

        fetch(url, requestOptions)
           .then(response => response.text())
           .then(result => console.log(result))
           .catch(error => console.log('error', error));

           return response;
    }
    if (props.reqType === "sessions") {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        var url = 'http://localhost:3000/users/' + props.id + '/average-sessions';

        fetch(url, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

          return response;
    }
    if (props.reqType === "perf") {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        var url = 'http://localhost:3000/users/' + props.id + '/performance';

        fetch(url, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

          return response;
    }
};

export default callAPI;