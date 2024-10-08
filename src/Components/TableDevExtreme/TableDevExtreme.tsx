import React from 'react'
import { TreeList } from 'devextreme-react'
import { Column, SearchPanel } from 'devextreme-react/data-grid'

interface Props {
    dataSource: any
}


const TableDevExtreme = (props: Props) => {
    return (
        <>
            <h1>This is devextreme table</h1>
            <TreeList
                dataSource={props.dataSource}
                showBorders={true}
                columnAutoWidth={true}
                wordWrapEnabled={true}
                keyExpr="Task_ID"
                parentIdExpr="Task_Parent_ID"
                highlightChanges={true}                
            >
                <SearchPanel visible={true} />
                <Column dataField='Header1' caption='R1'></Column>
                <Column dataField='Header2' caption='R2'></Column>
                <Column dataField='Header3' caption='R3'></Column>
            </TreeList>
        </>
    )
}

export default TableDevExtreme