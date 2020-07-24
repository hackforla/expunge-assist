import React, { Component } from 'react';
import Collapsible from './Collapsible.js';
import './main.css';

import Context from './Paragraph1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      AgeInYears: -1,
      NumberOfConvictions: -1,
      SubjectOfConvictions: "",
      TimeSinceLastConviction: "",
      CloseToFamily: false,
      Family: [""],
      AddAnotherFamilyMember: "No",
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
      SinceMyLastConviction: "",
    };
    this.handleChange = this.handleChange.bind(this);  
  }

  formatFamilyString() {
    var str = this.state.Family.join(", ");
    return (str === "") ? "(your family)" : str;
  } 

  FamilyBlock() {
    if (this.state.CloseToFamily) {
      return (
        <div>
          { this.state.Family.map((familyMember, index) => { 
            return (
              <label> Add a family member and your relationship to them:
                <input type="text" name={"Family" + index.toString()} value={this.state.familyMember} onChange={this.handleChange} />       
                <br/>
              </label>
          )})}
          Would you like to add another family member?
          <label> Yes 
          <input type="radio" name="AddAnotherFamilyMember" value={"Yes"} checked={this.state.AddAnotherFamilyMember === "Yes"} onChange={this.handleChange} />      
          </label>
          <label> No
          <input type="radio" name="AddAnotherFamilyMember" value={"No"} checked={this.state.AddAnotherFamilyMember === "No"} />  
          </label>
          <br/>
        </div>);
    }
  }

  WorkBlock() {
    if (this.state.IsWorking === "Yes") {
      return (
        <div>
          <label>In what industry are you working? </label>
          <input type="text" name="Industry" value={this.state.Industry} onChange={this.handleChange} /> 
          <br/>
                
        </div>
      );
    }
  }

  assemblePP1() {
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

  assemblePP2() {
    var addPlaceholders = true;
    var __sinceMyLastConviction = this.state.SinceMyLastConviction.trim();
    var __sinceMyLastConvictionContext = this.state.SinceMyLastConvictionContext.trim();
    var __whyItMatters = this.state.WhyItMatters.trim(); 

    if (addPlaceholders) {
      __sinceMyLastConviction = (__sinceMyLastConviction === "") ? "(your response)" : __sinceMyLastConviction;
      if (this.state.SinceMyLastConvictionAddContext) {
        __sinceMyLastConvictionContext = (__sinceMyLastConvictionContext === "") ? "(your sentence). " : __sinceMyLastConvictionContext;
      }
      this.__whyItMatters = (__whyItMatters === "") ? "(your sentence). " : __whyItMatters;
    }

    var pp2 = "Since my last conviction, " + __sinceMyLastConviction + ". ";

    return pp2;
  }

  handleChange(event) { 
    if (event.target.name.startsWith("Family")) {
      let index = parseInt(event.target.name.substring(6))
      let items = [...this.state.Family];
      items[index] = event.target.value
      this.setState({
        "Family": items
      });
    } else if (event.target.name === "AddAnotherFamilyMember") {
      this.setState({
        "Family": [...this.state.Family, ""]
      });
    } else {  
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  render () {
    return (
      <div class="row">
        <div class="column">
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
        <br/>
        { this.FamilyBlock() }
        <label>Are you currently working? Choose the closest answer: <br/>
          <input type="radio" name="IsWorking" value={"Yes"} checked={this.state.IsWorking === "Yes"} onChange={this.handleChange} />      
          <label> Yes 
          </label>
          <br/>
          <input type="radio" name="IsWorking" value={"No, but I was until recently"} checked={this.state.IsWorking === "No, but I was until recently"} onChange={this.handleChange} />  
          <label> No, but I was until recently
          </label>
          <br/>
          <input type="radio" name="IsWorking" value={"No"} checked={this.state.IsWorking === "No"} onChange={this.handleChange} />  
          <label> No
          </label>
          <br/>
        { this.WorkBlock() }
        </label>
        <label> Please write a sentence describing the challenges of life with a record: </label> <br/>
        <textarea name="ChallengesOfLifeWithRecord" value={this.state.ChallengesOfLifeWithRecord} onChange={this.handleChange} />
        <br/>
        <label> Please write a sentence adding context to your last response: </label> <br/>
        <textarea name="ChallengesOfLifeWithRecordContext" value={this.state.ChallengesOfLifeWithRecordContext} onChange={this.handleChange} />
        <br/>
        <label> Please write a sentence that states why you want to clear your record: </label> <br/>
        <textarea name="WhyWantsToClearRecord" value={this.state.WhyWantsToClearRecord} onChange={this.handleChange} />
        </form>
        </Collapsible>
        </div>
        <div>
        <Collapsible trigger="Paragraph 2">
        <form> 
        <label> Complete the sentence: <br/>"Since my last conviction, </label> 
        <input type="text" name="SinceMyLastConviction" value={this.state.SinceMyLastConviction} onChange={this.handleChange} />
        <br/>
        <Context/>     
        <br/>
        <label>
          Would you like to add another life change?
          <label> Yes 
          <input type="radio" name="AddAnotherLifeChange" value={"Yes"} checked={this.state.AddAnotherLifeChange === "Yes"} onChange={this.handleChange} />      
          </label>
          <label> No
          <input type="radio" name="AddAnotherLifeChange" value={"No"} checked={this.state.AddAnotherLifeChange === "No"} onChange={this.handleChange} />  
          </label>
        </label>
        </form>
        </Collapsible>
        </div>
        </div>
        <div class="column">
          { this.assemblePP1() }
        </div>
      </div>
    );
  }
}

export default App;
