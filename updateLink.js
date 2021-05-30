class getLink {
    constructor(){
      this.tag = document.getElementById("tag")
      this.tag.value = "Tag"
      this.Ques1 = document.getElementById("ques1")
      this.Ques1.value = "Question 1"
      this.Ques2 = document.getElementById("ques2")
      this.Ques2.value = "Question 2"
      this.Ques3 = document.getElementById("ques3")
      this.Ques3.value = "Question 3"
      this.Ques4 = document.getElementById("ques4")
      this.Ques4.value = "Question 4"
      this.Answer = document.getElementById("ans")
      this.Answer.value = "Answer"
      this.submitButton = createButton('Add');
      this.submitButton.position(0,0);
    }
    display(){
      this.submitButton.mousePressed(()=>{
        if(this.tag.value == "Tag"){
          alert("Please enter a tag!");
        }
        else if(this.Ques1.value == "Question 1" && this.Ques2.value == "Question 2" && this.Ques3.value == "Question 3" && this.Ques4.value == "Question 3"){
          alert("Please enter atleast one question!");
        }
        else if(this.Answer.value == "Answer"){
          alert("Please enter a answer!");
        }
        else{
          var jsonformat = {};
          var list1 = []
          jsonformat["tag"] = this.tag.value
          for(var i=1; i<=4;i++){
            if(i == 1){
              if(this.Ques1.value != "Question 1"){
                list1.push(this.Ques1.value);
              }
            }
            else if(i == 2){  
              if(this.Ques2.value != "Question 2"){
                list1.push(this.Ques2.value);
              }
            }
            else if(i == 3){ 
              if(this.Ques3.value != "Question 3"){
                console.log(jsonformat)
                list1.push(this.Ques3.value);
              }
            }
            else if(i == 4){  
              if(this.Ques4.value != "Question 4"){
                list1.push(this.Ques4.value);
              }
            }
          }
          
           this.update_link(list1, count1);
        }
      });
    }
    update_link(json,number){
      print('/' + (number+1).toString() + '/')
        database.ref('/' + (number+1) + '/').set({
          tag : this.tag.value,
          patterns : json,
          responses : this.Answer.value
        });
        database.ref('/count/').set({
          count : number+1
        });
        alert("Thank you for your constribution! Consider Adding More!");
        this.tag.value = "Tag"
        this.Ques1.value = "Question 1"
        this.Ques2.value = "Question 2"
        this.Ques3.value = "Question 3"
        this.Ques4.value = "Question 4"
        this.Answer.value = "Answer"
    }

}
