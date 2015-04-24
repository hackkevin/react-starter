/**
 * Created by v-kevwu on 4/24/2015.
 */
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});
React.render(
    <CommentBox />,
    document.getElementById('content')
);