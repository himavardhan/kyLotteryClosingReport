import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {

    //deafultows=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
    deafultrows=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    kyFixedTicketprices=[1,2,3,5,10,20,25,30];
    TotalAmount=[];
    kyTicketsEndNumbers={'1':299,
                         '2':149,
                         '3':99,
                         '5':59,
                         '10':29,
                         '20':19,
                         '25':19,
                         '30':19}
    soldTickets:any="-";
    rowTotal:any="-";

  constructor() { }

  ngOnInit() {
  }

  sendFormData(data){
   // console.log(data.value);
       let totalNumberOfRow=data.value;
    for (const key in totalNumberOfRow) {
      if (totalNumberOfRow.hasOwnProperty(key)) {
        var rownumber = key.match(/\d+/g).map(Number).join();
        let singleRow = totalNumberOfRow[key];
       // console.log(rownumber);  
       let endVlaue=0;
       let startValue=0;
       let priceValue=0     
           for (const rowkey in singleRow) {          
             if (singleRow.hasOwnProperty(rowkey)) {
               const element = singleRow[rowkey];
               if(rowkey.includes('end')){endVlaue=element; console.log(endVlaue);}
               if(rowkey.includes('start')){startValue=element;  console.log(startValue);}
               if(rowkey.includes('price')){ priceValue=element;  console.log(priceValue);}                            
             }
           }


        // Common Senario Starting number small && ending number big 
        if(endVlaue >= startValue){
          this.soldTickets=endVlaue - startValue;       
          document.getElementById("sold"+rownumber).innerHTML=this.soldTickets; 
          const Total:any=  this.soldTickets * priceValue ;
          document.getElementById("rowTotal"+rownumber).innerHTML= Total; 
          this.TotalAmount.push(Total);
        }
        //This all tickets in row sold
        if(endVlaue == 0 && startValue){
          let tsold=0;         
          let tickEnddefault=this.kyTicketsEndNumbers[priceValue];
          for (let index = startValue; index <= tickEnddefault; index++) {
             tsold++;            
          }
          document.getElementById("sold"+rownumber).innerHTML=""+tsold;
          const Total:any=  tsold * priceValue ;
          document.getElementById("rowTotal"+rownumber).innerHTML= Total; 
          this.TotalAmount.push(Total);
          ///console.log("Total sold="+tsold);
        }
         //This is for sold all the tickets and put new tickets
        if(endVlaue < startValue){
          let tsold=0;         
          let tickEnddefault=this.kyTicketsEndNumbers[priceValue];
          for (let index = startValue; index <= tickEnddefault; index++) {
              tsold++;            
          }
          for (let index = 0; index < endVlaue; index++) {
            tsold++;           
          }
          console.log(" total sold "+tsold);
          document.getElementById("sold"+rownumber).innerHTML=""+tsold;
          const Total:any=  tsold * priceValue ;
          document.getElementById("rowTotal"+rownumber).innerHTML= Total; 
          this.TotalAmount.push(Total);

        }
     
        
      }
    }
     
      this.soldTickets=data.value.endnumber1 - data.value.startnumber1;
    this.rowTotal=data.value.price1 * this.soldTickets ;
    //  document.getElementById("sold1").innerHTML="hello";
    // console.log(document.getElementById("sold1").innerHTML)
    //console.log(this.soldTickets+ " "+this.rowTotal);
   // console.log(this.TotalAmount.reduce((cur,acc)=> cur+acc));
    document.getElementById("InstanceTicketTotal").
                innerHTML=this.TotalAmount.reduce((cur,acc)=> cur+acc);
                this.TotalAmount=[]


  }

  priceValidation(priceField){      
     let val=this.kyFixedTicketprices.includes(parseInt(priceField.target.value));
     if(!val){ priceField.target.value="";}
     console.log(priceField);
      }

  endNumberValidation(endNumber){
    let rownumber=endNumber.name.match(/\d+/g).map(Number).join();
    let priceValueId="price"+rownumber;
    let pricevalue=(document.getElementById(priceValueId) as HTMLInputElement).value;
    let endnumberdefault= this.kyTicketsEndNumbers[pricevalue]
     if(endNumber.value > endnumberdefault){
         console.log(endnumberdefault);
     }
  }

  addNewRow(){
    let addNewRow=this.deafultrows.length;
   // this.deafultrows.push(addNewRow);
    console.log(this.deafultrows.push(++addNewRow));      
    return false;
    //event.stopPropagation();
  }

}
