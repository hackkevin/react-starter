/**
 * Created by v-kevwu on 4/24/2015.
 */
var CommentList = React.createClass({
   renter: function(){
       return (
           <div className = "commentList">
               <Comment author="Pete Hunt">This is one comment</Comment>
               <Comment author="Jordan Walke">This is *author* comment</Comment>
           </div>
       )
   }
});

