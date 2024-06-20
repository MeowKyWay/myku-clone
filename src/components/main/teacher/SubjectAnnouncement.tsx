import { generateClient } from "aws-amplify/api";
import { listDepartments } from "../../../graphql/queries";
function SubjectAnnouncement() {

    const client = generateClient();

    const handleCreateSubject = async () => {
        console.log("Create Subject");
        try {
            const res = await client.graphql({
                query: listDepartments,
            })

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button onClick={handleCreateSubject}>Test</button>
        </div>
    )
}

export default SubjectAnnouncement;