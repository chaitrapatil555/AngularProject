import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {
userForm: FormGroup;
listData:any;
updateForm:FormGroup=new FormGroup({})
name:string="";
employid:number=0;
contactNo:number=0;
emailid:string="";
employdept:number=0;
eid:number=0;
mobileno:number=0;
constructor(private fb:FormBuilder) {
    this.listData = [];
    this.userForm = this.fb.group({
      name:['',Validators.required],
      employid:['',Validators.required],
      contactNo:['',Validators.required],
      emailid:['',Validators.required],
      employdept:['',Validators.required],
    })
   }
  public addItem() :void{
     this.listData.push(this.userForm.value);
     this.userForm.reset();
   }

   reset() {
     this.userForm.reset();
   }
   deleteItem(element: any){
     this.listData.forEach((value: any,index: any)=>{
       if(value == element)
       this.listData.splice(index,1);
     });
   }
   
   ngOnInit(): void {
    this.updateForm=new FormGroup({
      eid:new FormControl(),
      mobileno:new FormControl()
    })
  }
  editform(){
    this.listData.forEach((value: any)=>{
      if(value.employid==this.updateForm.get("eid")?.value){
        value.contactNo=this.updateForm.get("mobileno")?.value;
      }
    console.log(this.updateForm.get("mobileno")?.value);
    })
  }

}


