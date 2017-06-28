function Stack(){
  this.items = new Array();
  var stack = this;

  return {
    empty: function(){
      if (stack.items.length === 0){return true;}
      else {return false;}
    },
    push: function(item){
      stack.items.push(item);
      return item;
    },
    peek: ()=>{return stack.items[0]},
    pop: function(){
      var done = stack.items.pop();
      return done;
    },
    search: function(find){
      let index = stack.items.indexOf(find)
        if (index<0){
          return .1;
        } else {
          return index
        }
    }

  }

}

module.exports = Stack;
