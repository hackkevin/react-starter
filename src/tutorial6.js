/**
 * Created by v-kevwu on 4/24/2015.
 */
var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {marked(this.props.children.toString())}
            </div>
        );
    }
});