import React from 'react';
import Collapsible from './Collapsible.js';

class Paragraph1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            AgeInYears: -1,
            NumberOfConvictions: -1,
            SubjectOfConvictions: "",
            TimeSinceLastConviction: "",
            CloseToFamily: false,
            Family: [],
            IsWorking: "No",  // choose from "Yes", "No, but I was recently", "No"
            Industry: "",
            WorkingDuration: "",
            AddContextToNotWorking: false,
            AddContextToWorking: false,
            NotWorkingContext: "",
            WorkContext: "",
            ChallengesOfLifeWithRecord: "",
            ChallengesOfLifeWithRecordContext: "",
            WhyWantsToClearRecord: "",
        };
        this.handleChange = this.handleChange.bind(this);
      }

      assemble() {
        var addPlaceholders = true;
        var __name = this.state.Name.trim();
        var __age = (this.state.AgeInYears < 0) ? "null": this.state.AgeInYears.toString();
        var __numberOfConvictions = (this.state.AgeInYears < 0) ? "null" : this.state.NumberOfConvictions.toString();
        var __subjectOfConvictions = this.state.SubjectOfConvictions.trim();
        var __timeSinceLastConviction = this.state.TimeSinceLastConviction.trim();
        var __industry = this.state.Industry.trim();
        var __workingDuration = this.state.WorkingDuration.trim();
        var __workContext = this.state.WorkContext.trim()  // TODO add a standard sentence formatting fn to a paragraph class and extend it
        var __notWorkingContext = this.state.NotWorkingContext.trim();
        var __challengesOfLifeWithRecord = this.state.ChallengesOfLifeWithRecord.trim();
        var __challengesOfLifeWithRecordContext = this.state.ChallengesOfLifeWithRecordContext.trim();
        var __whyWantsToClearRecord = this.state.WhyWantsToClearRecord.trim();

        if (addPlaceholders) {
            __name = (__name === "") ? "(your name)" : __name;
            __age = (__age === "null") ? "(your age)" : __age;
            __numberOfConvictions = (__numberOfConvictions === "null") ? "(number)" : __numberOfConvictions;
            __subjectOfConvictions = (__subjectOfConvictions === "") ? "(subject of convictions)" : __subjectOfConvictions;
            __timeSinceLastConviction = (__timeSinceLastConviction === "") ? "(time period)" : __timeSinceLastConviction;
            __industry = (__industry === "") ? "(industry)" : __industry;
            __workingDuration = (__workingDuration === "") ? "(duration)" : __workingDuration;
            __workContext = (__workContext === "") ? "(your sentence)." : __workContext;
            __notWorkingContext = (__notWorkingContext === "") ? "(your sentence)." : __notWorkingContext;
            __challengesOfLifeWithRecord = (__challengesOfLifeWithRecord === "") ? "(your sentence)." : __challengesOfLifeWithRecord;
            __challengesOfLifeWithRecordContext = (__challengesOfLifeWithRecordContext === "") ? "(your sentence)." : __challengesOfLifeWithRecordContext;
            __whyWantsToClearRecord = (__whyWantsToClearRecord === "") ? "(your sentence)." : __whyWantsToClearRecord; 
        }

        var pp1 = "My name is " + __name + ", and I am " + __age + " years old. ";
        pp1 += "I have " + __numberOfConvictions
        pp1 += (__numberOfConvictions === 1) ? " conviction " : " convictions "
        pp1 += "for " + __subjectOfConvictions + ", and " 
        pp1 += (__numberOfConvictions === 1) ? " it was " : " they were " 
        pp1 += __timeSinceLastConviction + " ago. "
        if (this.state.CloseToFamily) {
            pp1 += "I have a close family, including " + this.formatFamilyString() + ". ";
        }
        if (this.state.IsWorking === "No" && this.state.AddContextToNotWorking) {
            pp1 += __notWorkingContext;  // TODO should add punctuation if not already present. multiple instances of this
        } else {
            if (this.state.IsWorking === "Yes") {
                pp1 += "I have been working in " + __industry + " for " + __workingDuration + ". "
            } else if (this.state.IsWorking === "NoButRecently") {
                pp1 += "Until recently I was working in " + __industry + " for " +__workingDuration + ". "
            } 
            if (this.state.AddContextToWorking) {
                pp1 += __workContext;
            } 
        }
        pp1 += __challengesOfLifeWithRecord + " ";
        pp1 += __challengesOfLifeWithRecordContext + " ";
        pp1 += __whyWantsToClearRecord + " ";

        return pp1;
    }

    handleChange(event) {    
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    showInputs() {
      return (
        <div>
        <Collapsible trigger="Paragraph 1">
        <form> 
        <label>
          Your name as you would like to see it on your personal statement:
          <input type="text" name="Name" value={this.state.Name} onChange={this.handleChange} />        
        </label>
        <br/>
        <label>
          Your age in years: 
          <input type="number" name="AgeInYears" value={this.state.AgeInYears} onChange={this.handleChange} />        
        </label>
        <br/>
        <label>
          How many convictions do you have? 
          <input type="number" name="NumberOfConvictions" value={this.state.NumberOfConvictions} onChange={this.handleChange} />        
        </label>
        <br/>
        <label>
          What are your convictions for? 
          <input type="text" name="SubjectOfConvictions" value={this.state.SubjectOfConvictions} onChange={this.handleChange} />        
        </label>
        <br/>
        <label>
          How long ago was your most recent conviction? 
          <input type="text" name="TimeSinceLastConviction" value={this.state.TimeSinceLastConviction} onChange={this.handleChange} />        
        </label>
        <br/>
        <label>
          Are you close to your family? 
          <label> Yes 
          <input type="radio" name="CloseToFamily" value={"Yes"} checked={this.state.CloseToFamily === "Yes"} onChange={this.handleChange} />      
          </label>
          <label> No
          <input type="radio" name="CloseToFamily" value={"No"} checked={this.state.CloseToFamily === "No"} onChange={this.handleChange} />  
          </label>
        </label>
        {/* <br/>
        <label>
          Add a family member and your relationship to them:  
          <input type="text" name="Family" value={this.state.Family} onChange={this.handleChange} />       
        </label> */}
        </form>
        </Collapsible>
        <div>My name is {this.state.Name}</div>
      </div>
      );
    }
}

// export default Paragraph1;

class Context extends React.Component {
  render() {
    return (
      <button>Add context to the prior response? </button>
    )
  }
}

export default Context;
