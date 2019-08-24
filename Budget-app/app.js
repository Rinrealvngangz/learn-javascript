
// BUDGETCONTROLLER

var budgetController =(function() {

  var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage =-1;
  };
      
    Expense.prototype.calcpercentage = function(totalIncome){
          if(totalIncome >0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
          }else{
          this.percentage =-1 ;
          }

    };
      
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };


    var Income = function(id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
  };
   var calculatetotal = function(type){

    var sum =0;
    data.allItem[type].forEach(function(cur){
      sum += cur.value;
    });
    data.total[type] =sum;

   }
   var allExpenses =[];
   var allIncome =[];

   var totalExpenses =0;

   var data = {
     allItem: {
        exp :[],
        inc :[]
     
     },
     total: {
       exp :0,
       inc :0

     },
     budget :0,
     percentage :-1
  
   };
return {
   addItem: function(type,des,val){
     
    var newItem,ID;
    // create new ID
    if(data.allItem[type].length>0){
      ID = data.allItem[type][data.allItem[type].length-1].id +1;
    }else{
      ID = 0;
    }
    
    // create  new items based on 'inc' or 'exp' type
    if(type === 'exp'){
      newItem = new Expense(ID,des,val);
    }else if(type === 'inc'){
      newItem = new Income(ID,des,val);
    }
    // Push it into our data structure
    data.allItem[type].push(newItem);

    // return the new element
       return newItem;
   },
     deleteItem :function(type,id){
          var ids, index;
         ids= data.allItem[type].map(function(currentElement){
          return currentElement.id;
         });

          index = ids.indexOf(id);

          if(index !== -1){
            data.allItem[type].splice(index,1);
          }
     },
   calculateBudget:function(){
   
    // calculate total income and expenses
         calculatetotal('exp');
         calculatetotal('inc');
    // calculate the budget:income - expenses
         data.budget = data.total.inc - data.total.exp;
    // calculate the percentage of income that we spent
    if(data.total.inc >0){
      data.percentage = Math.round((data.total.exp / data.total.inc)*100 );
    }else{
          data.percentage =-1;
    };
       
   },
   calculatePercentages : function(){
      
     data.allItem.exp.forEach(function(cur){
       cur.calcpercentage(data.total.inc);
     });
    },
    getPercentages : function(){
             var allperc = data.allItem.exp.map(function(cur){
                return cur.getPercentage();
             });
             return allperc;
    },

   
    getBudget: function(){
          
      return {
        budget: data.budget,
        totalsincome: data.total.inc,
        totalExpenses: data.total.exp,
        percentage: data.percentage
      }

    },
   testing : function(){
     console.log(data);
   }
    };

    })();



// UICONTROLLER
    var UIController = (function(){
       
        var DOMstrings  ={
          inputType : '.add__type',
          inputdescription : '.add__description',
          inputvalue : '.add__value',
          inputbtn : '.add__btn',
          incomeContainer : '.income__list',
          expensesContainer : '.expenses__list',
          budgetlabel: '.budget__value',
          incomelabel: '.budget__income--value',
          expenseslabel: '.budget__expenses--value',
          percentagelabel:'.budget__expenses--percentage',
          container:'.container',
          expensesPercLable : '.item__percentage',
          dateLabel :'.budget__title--month'
        };
      var  formatnumber = function(num,type){
          var numSplit, int , dec ,type ;
          num = Math.abs(num);
          num = num.toFixed(2);

          numSplit = num.split('.');

          int = numSplit[0];
          if(int.length> 3){
            int = int.substr(0,int.length-3 ) + ','+ int.substr(int.length-3, 3);
          }
          dec = numSplit[1];
          return  (type === 'exp' ? '-' : '+') +' ' + int + '.' +dec;
        };
        var nodeListForEach = function(list , callback){
          for( var i= 0;i< list.length;i++){
        
            callback(list[i] , i);
          }
      };
      return {
        GetInput : function(){
          return {
             type : document.querySelector(DOMstrings.inputType).value,
             description :document.querySelector(DOMstrings.inputdescription).value, 
             value : parseFloat(document.querySelector(DOMstrings.inputvalue).value)
          };
        
        },
        AddlistItem : function(obj, type){
          var html,newHtml,element;
          // crerate HTML strings with placeholder text    
          if(type === 'inc'){
            element = DOMstrings.incomeContainer;
            html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><divclass="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
          }else if(type === 'exp'){
            element =DOMstrings.expensesContainer;
           html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
          }
         
          
         // Replace the placeholder text with some actual data
          newHtml = html.replace('%id%',obj.id);
          newHtml = newHtml.replace('%description%',obj.description);
          newHtml = newHtml.replace('%value%', formatnumber (obj.value,type));
         // Insert the HTML into the  DOM
         document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);

        },
         
        deletelisItem :function(selectorID){
            
          var el = document.getElementById(selectorID);
                el.parentNode.removeChild(el);
            

        },

         clearFields : function(){
       var field, fieldArr;
          field = document.querySelectorAll(DOMstrings.inputdescription + ', '+DOMstrings.inputvalue);
    
         fieldArr = Array.prototype.slice.call(field);

         fieldArr.forEach(function(current,index,array){
                 current.value ="";
         });
         fieldArr[0].focus();
         },
        displayBudget:function(obj){

          var type;
            obj.budget > 0 ? type ='inc' : type = 'exp';
         document.querySelector(DOMstrings.budgetlabel).textContent = formatnumber(obj.budget,type);
         document.querySelector(DOMstrings.incomelabel).textContent = formatnumber(obj.totalsincome,'inc');
         document.querySelector(DOMstrings.expenseslabel).textContent = formatnumber(obj.totalExpenses,'exp');
         if(obj.percentagelabel>0){
          document.querySelector(DOMstrings.percentagelabel).textContent = obj.percentage +'%';
         }else{
          document.querySelector(DOMstrings.percentagelabel).textContent = '---';
         };
        },

        displayPercentages  :function(percentages){
           var fields = document.querySelectorAll(DOMstrings.expensesPercLable);
            
                  nodeListForEach(fields,function(current,index){
                    if(percentages[index] > 0){
                      current.textContent= percentages[index] + '%';
                    }else
                    {
                      current.textContent = '---';
                    }
                    
          });

        },
        displayMonth :function(){
          var now ,months ,month, year;
          
          now = new Date();
           months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
          month = now.getMonth();
          year = now.getFullYear();

          document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' '+ year;

        },
        changedType : function(){
         var fields =document.querySelectorAll(
              DOMstrings.inputType + ','+ DOMstrings.inputdescription + ','+ DOMstrings.inputvalue);
         
              nodeListForEach(fields,function(cur){
                 cur.classList.toggle('red-focus');
              });

              document.querySelector(DOMstrings.inputbtn).classList.toggle('red');

        },
        getdomstrings : function(){
            return DOMstrings;
             
        }
      };
      
    })();


// GLOBAL APP CONTROLLER   
var controller =(function(budgetCtrl, UICtrl ){
    
var setupEventListener = function(){
  var DOM = UICtrl.getdomstrings();


  document.querySelector(DOM.inputbtn).addEventListener('click',CtrlAddItem);
  document.addEventListener('keypress',function(event){
    if(event.keyCode === 13 || event.which ===13)
    {
     CtrlAddItem(); 
    }
  });

  document.querySelector(DOM.container).addEventListener('click',ctrDeleteItem);
  document.querySelector(DOM.inputType).addEventListener('change',UICtrl.changedType);
};


  var updateBudget =function(){

    // 1. Calculate the budget
       budgetCtrl.calculateBudget();

    // 2. return the budget
     var budget =  budgetCtrl.getBudget();
    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);
  };

  var updatePercentages = function(){

    // 1. Calculate percentages
      budgetCtrl.calculatePercentages();

    // 2. Read percentages from the budget controller
     var percentages = budgetCtrl.getPercentages();

    // 3. Update the UI with the new precentages
       UICtrl.displayPercentages(percentages);
  }



  var CtrlAddItem = function(){
    var input ,newItem;
    // 1. Get the field input data
          input = UICtrl.GetInput();
         if(input.description !="" && !isNaN(input.value) && input.value >0 ){
           // 2. Add the item to the budget controller
           newItem = budgetController.addItem(input.type,input.description,input.value);
    // 3. Add the item to the UI
       UICtrl.AddlistItem(newItem,input.type);
    // 4. clear fields
       UICtrl.clearFields();
    // 5. calculate and update budget
      updateBudget();
    
    // 6. calculate and update percentages
      updatePercentages();
         }
    
   
  };
  var ctrDeleteItem = function(event){
 
     // use parentNode to traverse up the DOM and then get the unique 
      var itemID,splitID,type,ID;
      // target = i.ion-ios-close-outline
      itemID=event.target.parentNode.parentNode.parentNode.parentNode.id;
    

      if(itemID){
             // inc-# or exp-#
            // use split - JS converts string to an Object and will return and array

        splitID = itemID.split('-');
        type = splitID[0];
         ID = parseInt(splitID[1]);
      }
        // 1. delete the item from the data structure
       budgetCtrl.deleteItem(type,ID);

        // 2. delete the item from the UI

      UICtrl.deletelisItem(itemID);
        // 3. Update and show the new budget
        updateBudget();

        // 4. calculate and update percentages
      updatePercentages();

      
  };
     return {
       init: function(){
         console.log('Application has started');
         UICtrl.displayMonth();
         UICtrl.displayBudget({
          budget: 0,
          totalsincome: 0,
          totalExpenses:0,
          percentage: -1
        });
         setupEventListener();
       }

     };


    })(budgetController,UIController);

   controller.init();

   