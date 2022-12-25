import Swal from "sweetalert2";
import {UpdateTaskStatusRequest} from "../APIRequest/APIRequest";



export function UpdateTodo(id,status){

    return Swal.fire({
        title: 'Change task status',
        input: "select",
        inputOptions:{New:"New",Completed:"Completed",Progress:"Progress",Canceled:"Canceled"},
        inputValue:status

    })
        .then((result) => {
                return UpdateTaskStatusRequest(id,result.value)
                    .then(res=>{
                        return res;
                    })

        })
}
