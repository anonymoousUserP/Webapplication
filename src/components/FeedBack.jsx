import React, { Component } from 'react';
import '../css/feedback.css';

class Feedback extends Component {
    state = {    }
    url = 'http://localhost:3500';

    selected = ''
    clickedFunc = (oEvent)=>{
        for(let i = 1;i<=5;i++){
            document.getElementById("level-"+i).style.color = '#4b537c';
        }
        document.getElementById(oEvent.currentTarget.id).style.color = '#fe71a4';
        this.selected = oEvent.currentTarget.id;
    }



    SubmitClick = async ()=>{

        if(this.selected === undefined){
            return;
        }

        const feedbackText = document.getElementById("feedbackText").value;
        const join = document.getElementById("feedbackCheckBox").checked ? 1 : 0;
        const data = {
            feedbackText : feedbackText,
            rating : this.selected[6],
            join : join
        }
        console.log(data);
        // debugger;

        // Making a post request to the server for the feedback save.
        const result = await fetch(this.url + '/api/feedback',  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json()
        })

        if (result.status === 'ok') {
            alert('Feed Back submitted successfully');
        } else {
            alert(result.error)
        }
    };
    render() {
        return (
            <React.Fragment>
                <div className="feedbackcontainer">
                    <h1 className="feedbackheading">Give feedback</h1>
                    <p className="feedbackpara">How would you rate our service?</p>
                    <div className="feedback-level">
                        <div className="level" id="level-1" onClick={this.clickedFunc}>
                            <i className="lar la-sad-tear"></i>
                        </div>
                        <div className="level" id="level-2" onClick={this.clickedFunc}>
                            <i className="las la-frown"></i>
                        </div>
                        <div className="level" id="level-3" onClick={this.clickedFunc}>
                            <i className="lar la-meh"></i>
                        </div>
                        <div className="level" id="level-4" onClick={this.clickedFunc}>
                            <i className="lar la-smile"></i>
                        </div>
                        <div className="level" id="level-5" onClick={this.clickedFunc}>
                            <i className="lar la-grin"></i>
                        </div>
                    </div>

                    <div className="feedback-msg">
                        <p className="para">
                            What would you like to share with us?
                        </p>
                        <textarea name="" id="feedbackText" placeholder="Your feedback"></textarea>
                    </div>

                    <div className="agreement">
                        <div className="checkbox">
                            <input type="checkbox" name="" id="feedbackCheckBox" />
                            <label htmlFor="">I'd like to help improve by joining the <a href="#">Reasearch Group</a>.</label>
                        </div>
                    </div>

                    <div className="feedbackbuttons">
                        <a id="feedbackSubmit" onClick={this.SubmitClick}>Submit</a>
                        <a href="You just cancelled your to submit the feedback">Cancel</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Feedback;