/**
 * Created by v-kevwu on 4/24/2015.
 */
var CommentList = React.createClass({displayName: "CommentList",
   renter: function(){
       return (
           React.createElement("div", {className: "commentList"}, 
               React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
               React.createElement(Comment, {author: "Jordan Walke"}, "This is *author* comment")
           )
       )
   }
});

