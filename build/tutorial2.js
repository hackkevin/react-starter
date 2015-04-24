/**
 * Created by v-kevwu on 4/24/2015.
 */
var CommentList = React.createClass({displayName: "CommentList",
    render: function() {
        return (
            React.createElement("div", {className: "commentList"}, 
                "Hello, world! I am a CommentList."
            )
        );
    }
});

var CommentForm = React.createClass({displayName: "CommentForm",
    render: function() {
        return (
            React.createElement("div", {className: "commentForm"}, 
                "Hello, world! I am a CommentForm."
            )
        );
    }
});