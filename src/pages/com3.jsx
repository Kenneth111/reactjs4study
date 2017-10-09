import React from 'react';
import BtnGroupContainer from './com3/btn_group'
import AddBtnContainer from './com3/addBtn'
import RemoveBtnContainer from './com3/removeBtn'
import myReducer from './com3/reducers'
import DynamicViewContainer from './com3/DynamicView'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(myReducer)
const ReduxDemo = () => (
    <div>
        <BtnGroupContainer></BtnGroupContainer>
        <AddBtnContainer></AddBtnContainer>
        <RemoveBtnContainer></RemoveBtnContainer>
        <DynamicViewContainer></DynamicViewContainer>
    </div>
)
class Com3 extends React.Component{
    render(){
        return  (
            <Provider store={store}>
                <ReduxDemo></ReduxDemo>
            </Provider>
        )
    }
}
export default Com3;