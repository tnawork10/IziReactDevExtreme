import { Form } from 'devextreme-react'
import { Item, SimpleItem } from 'devextreme-react/form';
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const formData = () => {
    return {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        textArea: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
    };
}

const DxExploreForm = (props: Props) => {
    const refForm = useRef<any>(null);
    const refFormText = useRef(null);
    const refFormTextArea = useRef<any>(null);
    const refFormSimpleItem = useRef<any>(null);
    const [data, setData] = useState(formData());
    const [heightTa, setHeightTa] = useState(0);
    const deps = useRef<any>({
        heightTa: 0
    });

    useEffect(() => {
        console.log(refFormTextArea.current); // some
        // console.log(refFormTextArea.current.instance);  // undefined
        // console.log(refFormTextArea.current.instance()); // error
        console.log(refFormTextArea.current._input);    // undefined
        // console.log(refFormTextArea.current._input());    // error
    }, []);

    useEffect(() => {

        if (!!refFormSimpleItem.current) {
            const c = refFormSimpleItem.current;
            const cc = c;
        }
        if (!!refForm.current) {
            const refF = refForm.current;
            const instance = refF.instance;
            // https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxForm/Methods/#getEditordataField
            const editor = instance.getEditor('textArea')
            const htmlElement: HTMLElement = editor?.element();
            console.log(htmlElement);
            const ta = htmlElement.querySelector('textarea');
            deps.current.heightTa = ta?.scrollHeight ?? 0;
            if (deps.current.heightTa == 0) {
                deps.current.heightTa = {};
            }
        }
    });

    useEffect(() => {
        setHeightTa(deps.current.heightTa);
    }, [deps.current.heightTa])

    useEffect(() => {
        setHeightTa(deps.current.heightTa);
    }, [refForm.current?.instance?.getEditor('textArea').element().querySelector('textarea')?.scrollHeight]);

    const getEditorOptions = () => {
        return {
            inputAttr: {
                style: `white-space: wrap; overflow: hidden; overflow-wrap: anywhere; resize: none;`,
            },
            height: (typeof deps.current.heightTa === 'number') ? deps.current.heightTa : 0
        };
    }

    return (
        <div>
            <h1>DxExploreForm</h1>
            <Form ref={refForm} formData={data}>
                <Item ref={refFormText} dataField={'text'} caption={'DefaultItem'}></Item>
                <Item ref={refFormTextArea}
                    dataField={'textArea'}
                    editorType={'dxTextArea'}
                    caption={'TextArea'}
                    editorOptions={getEditorOptions()}
                >
                </Item>
                {/* <SimpleItem ref={refFormSimpleItem} label={{ text: 'SimpleItem' }}></SimpleItem> */}
            </Form>
        </div>
    )
}

export default DxExploreForm