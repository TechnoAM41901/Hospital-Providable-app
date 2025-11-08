import React from 'react';

function Dashboard(props) {
    return (
        <div>
            <h1>Welcome to Dashboard Page</h1>
            <h3>Details will be visible to only registered user only.</h3>
            <h4><a href='./register'>Click here</a> to get registered quickly!!</h4>
        </div>
    );
}

export default Dashboard;