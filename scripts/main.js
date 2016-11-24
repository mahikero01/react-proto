var CommentBox = React.createClass({
    render: function(){
        return (
            <div className="commentBox">
                <h2>Comments</h2>
                <CommentList />
                <h2>Add a Comment</h2>
                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function(){
        return (
            <div className="commentList">
                <Comment author="Ted">First...</Comment>
                <Comment author="Daniel">Hellow World</Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function(){
        return (
            <div className="commentForm">
                CommentForm
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function(){
        return(
            <div className="panel panel-default comment">
                <div className="panel-heading">
                    {this.props.author}
                </div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);