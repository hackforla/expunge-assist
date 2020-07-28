import React, { Component } from 'react';
import Collapsible from './Collapsible.js';
import './main.css';

//import Context from './Paragraph1';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // PP1
      Name: "",
      AgeInYears: -1,
      NumberOfConvictions: -1,
      SubjectOfConvictions: "",
      TimeSinceLastConviction: "",
      CloseToFamily: false,
      Family: [""],
      FmailyMember: "",
      AddAnotherFamilyMember: "No",
      IsWorking: "",  // choose from "Yes", "No, but I was recently", "No"
      Industry: "",
      WorkingDuration: "",
      AddContextToNotWorking: false,
      AddContextToWorking: false,
      NotWorkingContext: "",
      WorkContext: "",
      ChallengesOfLifeWithRecord: "",
      ChallengesOfLifeWithRecordContext: "",
      WhyWantsToClearRecord: "",
      // PP2
      SinceMyLastConviction: "", 
      AddSinceMyLastConvictionContext: false,
      SinceMyLastConvictionContext: "", 
      WhyItMatters: "",
      LifeChanges: [],
      LifeChangesContext: [],
      AddAnotherLifeChange: "",
    };
    this.handleChange = this.handleChange.bind(this);  
  }

  formatFamilyString() {
    var str = this.state.Family.join(", ");
    return (str === "") ? "(your family)" : str;
  } 

  MoreLifeChangesBlock() {
    return (
      <div>
        { this.state.LifeChanges.map((_, index) => { 
          return (
            <div> Please complete this sentence with another change from your life: <br/> Also, <br/>
              <textarea name={"LifeChange" + index.toString()} value={this.state.LifeChange} onChange={this.handleChange} />       
              <br/>
              Context for your prior response (optional): <br/>
              <textarea name={"LifeChangeContext" + index.toString()} value={this.state.LifeChangeContext} onChange={this.handleChange} />
              <br/>
            </div>
        )})}
        Has anything else changed in your life that you would like to share?
        <input type="button" name="AddAnotherLifeChange" value={"Yes"} onClick={this.handleChange} />
      </div>);
  }

  FamilyBlock() {
    if (this.state.CloseToFamily) {
      return (
        <div>
          { this.state.Family.map((_, index) => { 
            return (
              <label> Add a family member and your relationship to them:
                <input type="text" name={"Family" + index.toString()} value={this.state.familyMember} onClick={this.handleChange} /> 
                <input type="button" name={"RemoveFamily"  + index.toString()} value={"Remove"} onClick={this.handleChange} />      
                <br/>
              </label>
          )})}
          Would you like to add another family member?
          <input type="button" name="AddAnotherFamilyMember" value={"Yes"} onClick={this.handleChange} />
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
          <label>Complete this sentence: I have been working in {this.state.Industry === "" ? "this industry" : this.state.Industry} for </label>
          <input type="text" name="WorkingDuration" value={this.state.WorkingDuration} onChange={this.handleChange} /> 
          <br/>    
        </div>
      );
    } else if (this.state.IsWorking === "No, but I was until recently") {
      return (
        <div>
          <label>In what industry were you working? </label>
          <input type="text" name="Industry" value={this.state.Industry} onChange={this.handleChange} /> 
          <br/>
          <label>Complete this sentence: Until recently I worked in {this.state.Industry === "" ? "this industry" : this.state.Industry} for </label>
          <input type="text" name="WorkingDuration" value={this.state.WorkingDuration} onChange={this.handleChange} /> 
          <br/>    
        </div>
      );
    } else if (this.state.IsWorking === "No") {
      return (
        <div>
          <label>Would you like to add a sentence explaining your work situation to the judge? We recommend this
                 if you think it adds context, particularly if the reason that you are having trouble finding 
                 work is related to your conviction. </label>
                 <label> Yes 
          <input type="radio" name="AddContextToNotWorking" value={"Yes"} checked={this.state.AddContextToNotWorking === "Yes"} onChange={this.handleChange} />      
          </label>
          <label> No
          <input type="radio" name="AddContextToNotWorking" value={"No"} checked={this.state.AddContextToNotWorking === "No"} />  
          </label>
          <br/>
          { this.state.AddContextToNotWorking &&
              <label><label> Please write a sentence of context about your work situation: </label> <br/>
              <textarea name="NotWorkingContext" value={this.state.NotWorkingContext} onChange={this.handleChange} />   
              </label>
          } 
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
        pp1 += __notWorkingContext + " ";  // TODO should add punctuation if not already present. multiple instances of this
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
        __sinceMyLastConvictionContext = (__sinceMyLastConvictionContext === "") ? "(your sentence)." : __sinceMyLastConvictionContext;
      }
      __whyItMatters = (__whyItMatters === "") ? "(your sentence)." : __whyItMatters;
    }

    var pp2 = "Since my last conviction, " + __sinceMyLastConviction + ". ";
    if (this.state.AddContextToSinceMyLastConviction === "Yes") {
      pp2 += __sinceMyLastConvictionContext;
    }

    this.state.LifeChanges.forEach((__lifeChange, index) => {
      pp2 += "Also, " + __lifeChange + ". ";
      if (this.state.LifeChangesContext[index] !== "") {
        pp2 += this.state.LifeChangesContext[index] + ". ";
      } 
    })

    pp2 += __whyItMatters + " ";

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
    } else if (event.target.name.startsWith("RemoveFamily")) {
      let index = parseInt(event.target.name.substring(12));
      let items = [...this.state.Family];
      items.splice(index, 1);
      this.setState({
        "Family": items
      });
    } else if (event.target.name === "AddAnotherFamilyMember") {
      this.setState({
        "Family": [...this.state.Family, ""]
      });
    } else if (event.target.name.startsWith("LifeChange")) {
      if (event.target.name.startsWith("LifeChangeContext")) {
        let index = parseInt(event.target.name.substring(17))
        let items = [...this.state.LifeChangesContext];
        items[index] = event.target.value
        this.setState({
          "LifeChangesContext": items
        });
      } else {
        let index = parseInt(event.target.name.substring(10))
        let items = [...this.state.LifeChanges];
        items[index] = event.target.value
        this.setState({
          "LifeChanges": items
        });
      }  
    } else if (event.target.name === "AddAnotherLifeChange") {
      this.setState({
        "LifeChanges": [...this.state.LifeChanges, ""],
        "LifeChangesContext": [...this.state.LifeChangesContext, ""]
      });
    } else {  
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    //alert(event.target.name + " : " + event.target.value);
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
        Would you like to add a sentence of context to your prior response?       
        <label> Yes </label>
        <input type="radio" name="AddContextToSinceMyLastConviction" value={"Yes"} checked={this.state.AddContextToSinceMyLastConviction === "Yes"} onChange={this.handleChange} />      
        <label> No  </label>
        <input type="radio" name="AddContextToSinceMyLastConviction" value={"No"} checked={this.state.AddContextToSinceMyLastConviction === "No"} />  
        <br/>
        { this.state.AddContextToSinceMyLastConviction &&
            <label><label> Okay, add your context here: </label> <br/>
            <textarea name="SinceMyLastConvictionContext" value={this.state.SinceMyLastConvictionContext} onChange={this.handleChange} />   
            <br/>
            </label>
        } 
        { this.MoreLifeChangesBlock() }
        <label> Please write a sentence that talks about why these changes matter to you: </label> <br/>
        <textarea name="WhyItMatters" value={this.state.WhyItMatters} onChange={this.handleChange} />
        </form>
        </Collapsible>
        </div>
        </div>
        <div class="column">
          { this.assemblePP1() }
          <br/><br/>
          { this.assemblePP2() }
        </div>
      </div>
    );
  }
}

export default App;
