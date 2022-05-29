const date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"
];

function Today() {
    return (
        <div>
            <h2>
                Today is {date.getDate()} of {monthNames[date.getMonth()]}
            </h2>
            <p></p>
        </div>
    )
}
export default Today;