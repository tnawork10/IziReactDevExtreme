import Popup from 'devextreme-react/popup'
import React, { useState } from 'react'
import DxExploreForm from './DxExploreForm'
import 'devextreme/dist/css/dx.light.css';
import ScrollView from 'devextreme-react/scroll-view';

type Props = {}

const FormAtPopup = (props: Props) => {
    const [visisble, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(true)}>Open</button>
            <button onClick={() => setVisible(false)}>CLose</button>
            <Popup
                visible={visisble}
                showCloseButton={true}
                defaultHeight={'100%'}
                defaultWidth={'30%'}
                onHiding={() => setVisible(false)}
                resizeEnabled={true}
            >
                <h1>Some title</h1>
                <ScrollView>
                    <div>
                        <h1>Scroll view</h1>
                        {(visisble && <DxExploreForm></DxExploreForm>)}
                    </div>
                </ScrollView>
                <h1>Some title end</h1>
            </Popup></div>
    )
}

export default FormAtPopup