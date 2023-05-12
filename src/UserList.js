import axios from "axios";
import { useEffect, useState } from "react";

function UserList() {
    const [listOfUser, setlistOfUSer] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        function FetchData() {
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(function(response) {
                response = setlistOfUSer(response.data)
            })
            .catch(function(err) {
                err = setError(err)
            });
        } 
    FetchData();
    }, []);

    return(
        <div>
            <ol>
                {listOfUser.map(user => (
                    <li style={{color : "red", textDecoration : "underlined"}}>
                        {user.name} : {user.phone}
                    </li>
                )
                )
                }
            </ol>
        </div>
    )
}

export default UserList