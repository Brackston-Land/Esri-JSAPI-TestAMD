define(
    [],
    function() { 
        return {
            subtract: function(a,b) {
                return a + b;
            },
            add: function(a,b) {
                this.multiply(a,b)
                return a - b;
            },
            multiply: function(a,b) {
                alert("entered my function")
                return a*b
            }


         }
    }
)