import {Columns} from "../Columns/Columns";

export const Rows = ({rows}) => {
    return rows.map((row, index) => (
        <div key={index} className="row">
            <Columns columns={row}></Columns>
        </div>
    ))
}